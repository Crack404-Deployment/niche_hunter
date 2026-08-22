"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, SERPResult } from '@/services/research.service';

export default function SerpPage() {
  const params = useParams();
  const id = params.id as string;

  const [serpResults, setSerpResults] = useState<SERPResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    researchService.getSERP(id)
      .then(setSerpResults)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-pulse"><div className="h-[400px] bg-app-surface rounded-2xl"></div></div>;
  }

  // Calculate some dynamic insights based on the API data
  const toolsCount = serpResults.filter(r => r.url.includes('app') || r.url.includes('tool')).length;
  const articlesCount = serpResults.filter(r => r.url.includes('blog') || r.url.includes('article') || r.url.includes('guide')).length;
  const organicCount = serpResults.filter(r => r.result_type === 'ORGANIC').length;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header & Master SERP Score */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-score-strong/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-score-strong animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 04</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            SERP Intelligence
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Deconstructing the top 10 search results to identify structural ranking vulnerabilities.
          </p>
        </div>

        <div className="relative z-10 flex items-center bg-app-bg/80 border border-app-border p-6 rounded-xl shrink-0">
          <div className="text-right mr-6 hidden sm:block">
            <div className="text-xs text-muted-text uppercase tracking-widest font-mono mb-1">Vulnerability</div>
            <div className="text-sm font-bold text-primary-text">Results Tracked</div>
          </div>
          <div className="w-px h-12 bg-app-border mr-6 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-score-strong drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              {serpResults.length}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Insights & Composition Matrix */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vulnerability Analysis */}
        <div className="bg-app-surface border border-app-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
          
          <h2 className="text-lg font-bold text-primary-text mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </span>
            Why the SERP is vulnerable
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5 shrink-0 text-sm">▶</span>
              <span className="text-secondary-text"><strong className="text-primary-text">{organicCount}/10</strong> results are highly organic targets.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-0.5 shrink-0 text-sm">▶</span>
              <span className="text-secondary-text"><strong className="text-primary-text">{articlesCount} results</strong> are informational articles, meaning room for dedicated tools.</span>
            </li>
          </ul>
        </div>

        {/* Composition Breakdown */}
        <div className="bg-app-surface border border-app-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-info/10 rounded-full blur-[50px] pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
          
          <h2 className="text-lg font-bold text-primary-text mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-info/10 border border-info/30 flex items-center justify-center text-info">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </span>
            SERP Composition
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center bg-app-bg border border-app-border rounded-lg p-3">
              <div className="text-3xl font-black text-primary-text">{toolsCount}</div>
              <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Tools</div>
            </div>
            <div className="text-center bg-app-bg border border-app-border rounded-lg p-3">
              <div className="text-3xl font-black text-primary-text">{articlesCount}</div>
              <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Articles</div>
            </div>
            <div className="text-center bg-score-strong/10 border border-score-strong/30 rounded-lg p-3 relative shadow-[0_0_10px_rgba(34,197,94,0.1)]">
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-score-strong animate-pulse border-2 border-app-surface"></div>
              <div className="text-3xl font-black text-score-strong">{organicCount}</div>
              <div className="text-[10px] text-score-strong uppercase tracking-widest mt-1">Organic</div>
            </div>
            <div className="text-center bg-app-bg border border-app-border rounded-lg p-3">
              <div className="text-3xl font-black text-primary-text">{serpResults.length - toolsCount - articlesCount}</div>
              <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Other</div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 3: Top 10 Ranking Radar */}
      <section className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-app-border/50 bg-app-surface2/30 flex items-center justify-between">
           <h2 className="text-lg font-bold text-primary-text tracking-tight">Top 10 Radar Scan</h2>
           <span className="text-xs font-mono text-muted-text">Live Intelligence API</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-app-bg border-b border-app-border text-[10px] uppercase tracking-widest text-muted-text font-mono">
                <th className="py-4 px-6 font-medium text-center w-16">Pos</th>
                <th className="py-4 px-6 font-medium">Domain / Title</th>
                <th className="py-4 px-6 font-medium">Type</th>
                <th className="py-4 px-6 font-medium text-right">Tactical Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border/50">
              {serpResults.map((result) => {
                // Determine styling based on the opportunity flag
                const style = result.opportunity_flag 
                  ? { color: "text-success", border: "border-success/30", bg: "bg-success/10", label: "Vulnerable Target" }
                  : { color: "text-warning", border: "border-warning/30", bg: "bg-warning/10", label: "Defensible" };

                return (
                  <tr key={result.id} className="hover:bg-app-surface2/50 transition-colors group">
                    
                    {/* Position */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-app-surface2 border border-app-border text-xs font-bold text-secondary-text font-mono">
                        #{result.position}
                      </div>
                    </td>
                    
                    {/* Domain & Title */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col">
                        <span className="font-medium text-primary-text">{result.domain}</span>
                        <span className="text-xs text-muted-text mt-0.5 max-w-sm truncate">{result.title}</span>
                      </div>
                    </td>
                    
                    {/* Type */}
                    <td className="py-4 px-6">
                      <span className="text-xs text-secondary-text bg-app-bg border border-app-border px-2 py-1 rounded font-mono">
                        {result.result_type}
                      </span>
                    </td>
                    
                    {/* Status / Insight */}
                    <td className="py-4 px-6 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${style.bg} ${style.border} ${style.color}`}>
                        {result.opportunity_flag && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
                        {!result.opportunity_flag && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>}
                        {style.label}
                      </span>
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}