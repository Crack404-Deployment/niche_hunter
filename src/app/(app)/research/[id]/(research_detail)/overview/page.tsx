"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, ResearchJob, OpportunityScore } from '@/services/research.service';

const getScoreTheme = (score: number) => {
  if (score >= 80) return { color: "text-green-500", bg: "bg-green-500", border: "border-green-500", glow: "shadow-[0_0_20px_rgba(34,197,94,0.2)]", label: "Strong Opportunity" };
  if (score >= 60) return { color: "text-yellow-500", bg: "bg-yellow-500", border: "border-yellow-500", glow: "shadow-[0_0_20px_rgba(234,179,8,0.2)]", label: "Promising" };
  if (score >= 40) return { color: "text-orange-500", bg: "bg-orange-500", border: "border-orange-500", glow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]", label: "Risky" };
  return { color: "text-red-500", bg: "bg-red-500", border: "border-red-500", glow: "shadow-[0_0_20px_rgba(239,68,68,0.2)]", label: "Avoid" };
};

export default function ResearchOverviewPage() {
  const params = useParams();
  const id = params.id as string;

  const [research, setResearch] = useState<ResearchJob | null>(null);
  const [score, setScore] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        setLoading(true);
        const [researchData, scoreData] = await Promise.all([
          researchService.getResearchStatus(id),
          researchService.getScore(id)
        ]);
        
        setResearch(researchData);
        setScore(scoreData);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Failed to load opportunity score.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchOverviewData();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-pulse space-y-8">
        <div className="h-48 bg-app-surface border border-app-border rounded-2xl w-full"></div>
        <div className="h-32 bg-app-surface border border-app-border rounded-2xl w-full"></div>
      </div>
    );
  }

  if (error || !research || !score) {
    return (
      <div className="p-4 m-4 sm:m-6 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm break-words">
        {error || 'Data could not be loaded.'}
      </div>
    );
  }

  const overallTheme = getScoreTheme(score.overall_score);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
      
      {/* SECTION 1: Executive Header & Master Score */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
        {/* Background Glow */}
        <div className={`absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] ${overallTheme.bg} opacity-5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-${overallTheme.bg} opacity-5 pointer-events-none`}></div>

        {/* Title & Meta */}
        <div className="relative z-10 w-full min-w-0">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className={`w-2 h-2 rounded-full ${overallTheme.bg} animate-pulse shrink-0`}></span>
            <span className="text-secondary-text text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono truncate">Executive Summary</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary-text tracking-tight mb-2 capitalize break-words leading-tight">
            {research.query}
          </h1>
          <p className="text-muted-text font-mono text-xs sm:text-sm break-words">
            Target Query • {research.country} ({research.language.toUpperCase()}) • Standard Depth
          </p>
        </div>

        {/* Master Score Verdict */}
        <div className="relative z-10 flex flex-row items-center justify-between sm:justify-center gap-3 sm:gap-6 bg-app-bg/50 backdrop-blur-md border border-app-border/80 p-4 sm:p-6 rounded-xl w-full lg:w-auto shrink-0 overflow-x-auto">
          <div className="text-center shrink-0">
            <div className={`text-4xl sm:text-5xl md:text-6xl font-black ${overallTheme.color} drop-shadow-[0_0_15px_rgba(currentColor,0.4)] tracking-tighter`}>
              {score.overall_score}<span className="text-lg sm:text-2xl text-muted-text">/100</span>
            </div>
            <div className={`text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase mt-1 md:mt-2 ${overallTheme.color}`}>
              {overallTheme.label}
            </div>
          </div>
          
          <div className="w-px h-12 sm:h-16 bg-app-border shrink-0 hidden sm:block"></div>
          
          <div className="flex flex-col items-center justify-center shrink-0 min-w-0">
            <div className={`bg-opacity-20 border-2 ${overallTheme.color} ${overallTheme.border} font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-widest px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg transform sm:rotate-[-5deg] ${overallTheme.glow} truncate max-w-full`}>
              {score.recommendation}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sub-score Telemetry Matrix */}
      <section>
        <h2 className="text-xs sm:text-sm font-bold text-muted-text uppercase tracking-widest mb-3 sm:mb-4 font-mono">Intelligence Matrix</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {[
            { label: "Demand", val: score.demand_score },
            { label: "Trend", val: score.trend_score },
            { label: "SERP", val: score.serp_score },
            { label: "Competition", val: score.competition_score },
            { label: "Monetization", val: score.monetization_score },
            { label: "Buildability", val: score.buildability_score },
          ].map((item, idx) => {
            const theme = getScoreTheme(item.val);
            return (
              <div key={idx} className="bg-app-surface2 border border-app-border rounded-xl p-3 sm:p-4 flex flex-col justify-between min-w-0">
                <div className="text-[10px] sm:text-xs text-secondary-text font-medium mb-2 sm:mb-3 truncate">{item.label}</div>
                <div>
                  <div className={`text-xl sm:text-2xl font-black ${theme.color} mb-1.5 sm:mb-2`}>{item.val}</div>
                  <div className="w-full bg-app-bg h-1.5 rounded-full overflow-hidden">
                    <div className={`h-full ${theme.bg}`} style={{ width: `${item.val}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>

      {/* SECTION 3: Pros & Cons (Static Placholders until backend supports generation) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        
        {/* Pros */}
        <div className="bg-app-surface border border-app-border rounded-xl p-6 sm:p-8 relative overflow-hidden group min-w-0">
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-green-500/10 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          
          <h2 className="text-lg sm:text-xl font-bold text-primary-text mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </span>
            <span className="truncate">Key Strengths</span>
          </h2>
          
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 mt-0.5 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="text-secondary-text text-sm sm:text-base break-words">Trend Score is strong ({score.trend_score}/100).</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-green-500 mt-0.5 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
              <span className="text-secondary-text text-sm sm:text-base break-words">Monetization potential identified.</span>
            </li>
          </ul>
        </div>

        {/* Cons */}
        <div className="bg-app-surface border border-app-border rounded-xl p-6 sm:p-8 relative overflow-hidden group min-w-0">
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-red-500/10 rounded-full blur-[40px] sm:blur-[60px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          
          <h2 className="text-lg sm:text-xl font-bold text-primary-text mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </span>
            <span className="truncate">Identified Risks</span>
          </h2>
          
          <ul className="space-y-3 sm:space-y-4">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-red-500 mt-0.5 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </span>
              <span className="text-secondary-text text-sm sm:text-base break-words">Extremely low demand score ({score.demand_score}/100).</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-red-500 mt-0.5 shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </span>
              <span className="text-secondary-text text-sm sm:text-base break-words">Poor SERP opportunity ({score.serp_score}/100).</span>
            </li>
          </ul>
        </div>
      </section>
      
    </div>
  );
}