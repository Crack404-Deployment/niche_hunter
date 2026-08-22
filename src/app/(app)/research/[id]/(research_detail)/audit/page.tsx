"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, WebsiteAudit } from '@/services/research.service';

export default function AuditPage() {
  const params = useParams();
  const id = params.id as string;

  const [audits, setAudits] = useState<WebsiteAudit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    researchService.getAudits(id)
      .then(setAudits)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-pulse"><div className="h-48 bg-app-surface rounded-2xl mb-8"></div><div className="grid grid-cols-4 gap-4"><div className="h-32 bg-app-surface rounded-xl"></div><div className="h-32 bg-app-surface rounded-xl"></div><div className="h-32 bg-app-surface rounded-xl"></div><div className="h-32 bg-app-surface rounded-xl"></div></div></div>;
  }

  const avgSeo = Math.round(audits.reduce((acc, a) => acc + a.seo_score, 0) / (audits.length || 1));
  const avgPerf = Math.round(audits.reduce((acc, a) => acc + a.performance_score, 0) / (audits.length || 1));
  const avgAccess = Math.round(audits.reduce((acc, a) => acc + a.accessibility_score, 0) / (audits.length || 1));
  const avgBestPrac = Math.round(audits.reduce((acc, a) => acc + a.best_practices_score, 0) / (audits.length || 1));

  const slowPages = audits.filter(a => a.load_time_ms > 3000);
  const badSeoPages = audits.filter(a => a.seo_score < 70);
  
  const getMetricColor = (score: number) => {
    if (score >= 90) return { color: "text-score-strong", bg: "bg-score-strong" };
    if (score >= 70) return { color: "text-score-promising", bg: "bg-score-promising" };
    return { color: "text-score-risky", bg: "bg-score-risky" };
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-info/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-info animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 06</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Website Audit
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Aggregated technical health analysis of top-ranking competitors to establish baseline requirements.
          </p>
        </div>
      </section>

      {/* SECTION 2: Technical Telemetry Matrix */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {[
            { label: "Avg SEO", score: avgSeo },
            { label: "Avg Performance", score: avgPerf },
            { label: "Avg Accessibility", score: avgAccess },
            { label: "Avg Best Practices", score: avgBestPrac },
          ].map((metric, idx) => {
            const theme = getMetricColor(metric.score);
            return (
              <div key={idx} className="bg-app-surface border border-app-border rounded-xl p-6 flex flex-col justify-between hover:bg-app-surface2/30 transition-colors">
                <div className="text-xs text-secondary-text font-medium mb-4 uppercase tracking-widest font-mono">
                  {metric.label}
                </div>
                <div>
                  <div className={`text-4xl font-black ${theme.color} mb-3`}>{metric.score}</div>
                  <div className="w-full bg-app-bg h-1.5 rounded-full overflow-hidden border border-app-border/50">
                    <div className={`h-full ${theme.bg}`} style={{ width: `${metric.score}%` }}></div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>

      {/* SECTION 3: Diagnostic Findings */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Positive Indicators */}
        <div className="bg-app-surface border border-app-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/10 rounded-full blur-[60px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          
          <h2 className="text-lg font-bold text-primary-text mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center text-success">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </span>
            Standard Baselines Required
          </h2>
          
          <ul className="space-y-4 font-mono text-sm">
            <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
              <span className="text-success shrink-0">✓</span>
              <span className="text-secondary-text">SEO Minimum Benchmark: {avgSeo}+</span>
            </li>
            <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
              <span className="text-success shrink-0">✓</span>
              <span className="text-secondary-text">Accessibility Benchmark: {avgAccess}+</span>
            </li>
          </ul>
        </div>

        {/* Warnings / Vulnerabilities */}
        <div className="bg-app-surface border border-app-border rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-warning/10 rounded-full blur-[60px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
          
          <h2 className="text-lg font-bold text-primary-text mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-warning/10 border border-warning/30 flex items-center justify-center text-warning">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </span>
            Identified Vulnerabilities
          </h2>
          
          <ul className="space-y-4 font-mono text-sm">
            {slowPages.length > 0 ? (
              <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
                <span className="text-warning shrink-0">⚠</span>
                <span className="text-primary-text">{slowPages.length} competitors have load times &gt; 3 seconds.</span>
              </li>
            ) : (
              <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
                <span className="text-success shrink-0">✓</span>
                <span className="text-primary-text">Competitor load times are highly optimized.</span>
              </li>
            )}
            
            {badSeoPages.length > 0 && (
              <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
                <span className="text-warning shrink-0">⚠</span>
                <span className="text-primary-text">{badSeoPages.length} competitors have failing SEO metrics.</span>
              </li>
            )}

            {avgPerf < 70 && (
              <li className="flex items-center gap-3 p-3 bg-app-bg border border-app-border rounded-lg">
                <span className="text-warning shrink-0">⚠</span>
                <span className="text-primary-text">Niche suffers from severe performance bottlenecks.</span>
              </li>
            )}
          </ul>
        </div>

      </section>

    </div>
  );
}