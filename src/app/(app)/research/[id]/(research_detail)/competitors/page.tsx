"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, Competitor } from '@/services/research.service';

export default function CompetitorsPage() {
  const params = useParams();
  const id = params.id as string;

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    researchService.getCompetitors(id)
      .then(setCompetitors)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const calculateWeakness = (comp: Competitor) => {
    const audit = comp.pages[0]?.audit;
    if (!audit) return 50;
    return Math.round(100 - ((audit.performance_score + audit.seo_score) / 2));
  };

  const getStatusText = (weakness: number) => {
    if (weakness >= 70) return "Highly Vulnerable";
    if (weakness >= 50) return "Vulnerable";
    return "Defensible";
  };

  const getWeaknessColor = (score: number) => {
    if (score >= 70) return "text-score-strong bg-score-strong/10 border-score-strong/30";
    if (score >= 50) return "text-score-promising bg-score-promising/10 border-score-promising/30";
    return "text-score-risky bg-score-risky/10 border-score-risky/30";
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 70) return "text-score-strong";
    if (score >= 50) return "text-score-promising";
    return "text-score-risky";
  };

  const toggleRow = (compId: string) => {
    setExpandedId(expandedId === compId ? null : compId);
  };

  if (loading) {
    return <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-pulse space-y-4"><div className="h-48 bg-app-surface rounded-2xl mb-8"></div>{[...Array(4)].map((_, i) => <div key={i} className="h-16 bg-app-surface rounded-xl"></div>)}</div>;
  }

  const vulnerableCount = competitors.filter(c => calculateWeakness(c) >= 50).length;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-danger/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-danger animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 05</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Competitor Intelligence
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Analyzing technological stacks and identifying technical debt in ranking competitors to find your wedge.
          </p>
        </div>

        <div className="relative z-10 flex gap-4 shrink-0">
          <div className="bg-app-bg border border-app-border rounded-lg p-4 text-center">
             <div className="text-2xl font-black text-primary-text">{competitors.length}</div>
             <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Analyzed</div>
          </div>
          <div className="bg-score-strong/10 border border-score-strong/30 rounded-lg p-4 text-center relative shadow-[0_0_15px_rgba(34,197,94,0.1)]">
             <div className="absolute -top-1 -right-1 w-3 h-3 bg-score-strong rounded-full animate-ping"></div>
             <div className="text-2xl font-black text-score-strong">{vulnerableCount}</div>
             <div className="text-[10px] text-score-strong uppercase tracking-widest mt-1 font-bold">Vulnerable</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Competitor Matrix Table */}
      <section className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-app-border/50 bg-app-surface2/30">
           <h2 className="text-lg font-bold text-primary-text tracking-tight">Competitor Vulnerability Matrix</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-app-bg border-b border-app-border text-[10px] uppercase tracking-widest text-muted-text font-mono">
                <th className="py-4 px-6 font-medium w-12"></th>
                <th className="py-4 px-6 font-medium">Domain</th>
                <th className="py-4 px-6 font-medium text-center">Pages Indexed</th>
                <th className="py-4 px-6 font-medium">Tech Stack</th>
                <th className="py-4 px-6 font-medium text-right">Weakness Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border/50">
              {competitors.map((comp) => {
                const isExpanded = expandedId === comp.id;
                const weaknessScore = calculateWeakness(comp);
                const status = getStatusText(weaknessScore);
                const tech = comp.technologies?.length ? comp.technologies.join(', ') : 'Unknown';
                
                // Dynamically derive gaps from Lighthouse data
                const audit = comp.pages[0]?.audit;
                const dynamicGaps = [];
                if (audit) {
                  if (audit.performance_score < 60) dynamicGaps.push(`Poor frontend performance (${audit.performance_score}/100)`);
                  if (audit.load_time_ms > 4000) dynamicGaps.push(`Slow page load speed (${(audit.load_time_ms / 1000).toFixed(1)}s)`);
                  if (audit.accessibility_score < 80) dynamicGaps.push(`Failing accessibility standards`);
                  if (audit.best_practices_score < 70) dynamicGaps.push(`Outdated development practices`);
                }
                if (dynamicGaps.length === 0) dynamicGaps.push("Highly optimized standard page.");

                return (
                  <React.Fragment key={comp.id}>
                    {/* Main Row */}
                    <tr 
                      onClick={() => toggleRow(comp.id)}
                      className={`cursor-pointer transition-colors group ${isExpanded ? 'bg-app-surface2/50' : 'hover:bg-app-surface2/30'}`}
                    >
                      <td className="py-4 px-6 text-muted-text group-hover:text-accent transition-colors">
                        <svg className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180 text-accent' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </td>
                      <td className="py-4 px-6 font-bold text-primary-text flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-app-bg border border-app-border flex items-center justify-center text-[10px]">🌐</div>
                        {comp.domain}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          <span className="w-8 h-8 rounded-lg bg-app-bg border border-app-border flex items-center justify-center text-xs font-bold text-secondary-text font-mono">
                            {comp.pages.length}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-xs text-secondary-text font-mono bg-app-bg border border-app-border px-2.5 py-1 rounded truncate max-w-[150px] inline-block">
                          {tech}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                         <div className="flex flex-col items-end">
                           <span className={`text-xl font-black ${getScoreTextColor(weaknessScore)}`}>
                             {weaknessScore}
                           </span>
                           <span className={`text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded border mt-1 ${getWeaknessColor(weaknessScore)}`}>
                             {status}
                           </span>
                         </div>
                      </td>
                    </tr>

                    {/* Expanded Detail Row */}
                    {isExpanded && (
                      <tr>
                        <td colSpan={5} className="p-0 border-b-2 border-accent/20">
                          <div className="bg-app-bg/50 px-8 py-6 flex flex-col md:flex-row gap-8 shadow-inner animate-in slide-in-from-top-2 duration-200">
                            
                            {/* Tracked Pages List */}
                            <div className="w-full md:w-1/3 space-y-4">
                              <h4 className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-2 border-b border-app-border pb-2">Indexed Competitor Pages</h4>
                              <div className="space-y-3">
                                {comp.pages.slice(0, 3).map((p, idx) => (
                                  <div key={idx} className="text-sm">
                                    <div className="text-primary-text font-medium truncate">{p.page_title || p.url}</div>
                                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline font-mono truncate block mt-0.5">{p.url}</a>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Core Strengths (Based on Audit) */}
                            <div className="w-full md:w-1/3 space-y-4">
                              <h4 className="text-[10px] uppercase tracking-widest text-muted-text font-mono mb-2 border-b border-app-border pb-2">Core Strengths</h4>
                              <ul className="space-y-2">
                                {audit && audit.seo_score >= 80 && (
                                  <li className="flex items-start gap-2 text-sm text-secondary-text">
                                    <span className="text-app-border mt-0.5 shrink-0"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                                    Strong On-Page SEO ({audit.seo_score}/100)
                                  </li>
                                )}
                                {audit && audit.performance_score >= 80 && (
                                  <li className="flex items-start gap-2 text-sm text-secondary-text">
                                    <span className="text-app-border mt-0.5 shrink-0"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                                    Fast Architecture
                                  </li>
                                )}
                                <li className="flex items-start gap-2 text-sm text-secondary-text">
                                  <span className="text-app-border mt-0.5 shrink-0"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>
                                  Established Domain Authority
                                </li>
                              </ul>
                            </div>

                            {/* Gaps / Vulnerabilities */}
                            <div className="w-full md:w-1/3 space-y-4">
                              <h4 className="text-[10px] uppercase tracking-widest text-accent font-bold font-mono mb-2 border-b border-app-border pb-2">Strategic Gaps</h4>
                              <ul className="space-y-2">
                                {dynamicGaps.map((gap, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-primary-text font-medium">
                                    <span className="text-accent mt-0.5 shrink-0">
                                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    </span>
                                    {gap}
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}