"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { researchService } from '@/services/research.service';

interface MappedOpportunity {
  id: string;
  title: string;
  score: number;
  status: string;
  color: string;
  bg: string;
  borderColor: string;
  category: string;
  demand: number;
  competition: number;
}

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<MappedOpportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        const jobs = await researchService.getResearchHistory();
        
        const completedJobs = jobs.filter(j => j.status === 'COMPLETED');
        
        const oppsData = await Promise.all(
          completedJobs.map(async (job) => {
            try {
              const score = await researchService.getScore(job.id);
              return { job, score };
            } catch {
              return null;
            }
          })
        );

        const formattedOpps = oppsData
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .map(({ job, score }) => {
            let status = "Avoid";
            let color = "text-score-risky text-red-500";
            let bg = "bg-red-500/10";
            let borderColor = "border-red-500/30";

            if (score.overall_score >= 80) {
              status = "Strong";
              color = "text-score-strong text-green-500";
              bg = "bg-green-500/10";
              borderColor = "border-green-500/30";
            } else if (score.overall_score >= 60) {
              status = "Promising";
              color = "text-score-promising text-yellow-500";
              bg = "bg-yellow-500/10";
              borderColor = "border-yellow-500/30";
            } else if (score.overall_score >= 40) {
              status = "Risky";
              color = "text-orange-500";
              bg = "bg-orange-500/10";
              borderColor = "border-orange-500/30";
            }

            return {
              id: job.id,
              title: job.query,
              score: score.overall_score,
              status,
              color,
              bg,
              borderColor,
              category: job.country,
              demand: score.demand_score,
              competition: score.competition_score
            };
          })
          .sort((a, b) => b.score - a.score);

        setOpportunities(formattedOpps);
      } catch (error) {
        console.error("Failed to load opportunities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-6 py-8 animate-pulse space-y-10">
        <div className="h-32 bg-app-surface rounded-2xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-app-surface rounded-2xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-8 space-y-10">
      
      {/* SECTION 1: Page Header */}
      <section className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-app-border/50">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest font-mono">Global Discovery Engine</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-primary-text tracking-tight">
            Trending Opportunities
          </h1>
          <p className="text-secondary-text mt-3 max-w-2xl text-sm">
            Curated software niches with high demand, validated search intent, and exploitable competitor vulnerabilities.
          </p>
        </div>
        
        {/* Filter / Status Badge */}
        <div className="flex items-center gap-3 bg-app-surface border border-app-border rounded-xl p-2 pr-4 shadow-lg shrink-0">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-lg">
            🔥
          </div>
          <div>
            <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold">Current Filter</div>
            <div className="text-sm font-bold text-primary-text">Completed Reports</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Opportunity Grid */}
      {opportunities.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp) => (
            <Link href={`/research/${opp.id}/overview`} key={opp.id} className="block group">
              <div className="bg-app-surface border border-app-border rounded-2xl p-6 h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] hover:border-accent/50 flex flex-col">
                
                {/* Background Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px] pointer-events-none transition-opacity opacity-0 group-hover:opacity-100"></div>

                {/* Card Header (Category & Trend) */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-muted-text uppercase tracking-widest bg-app-bg px-2 py-1 rounded border border-app-border">
                    {opp.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold text-secondary-text uppercase tracking-widest">
                    Live Data
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-primary-text mb-6 group-hover:text-accent transition-colors flex-grow capitalize">
                  {opp.title}
                </h2>

                {/* Mini Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="bg-app-bg border border-app-border/50 rounded-lg p-3">
                    <div className="text-[9px] text-muted-text uppercase tracking-widest mb-1 font-mono">Demand</div>
                    <div className="text-sm font-bold text-primary-text">{opp.demand}</div>
                  </div>
                  <div className="bg-app-bg border border-app-border/50 rounded-lg p-3">
                    <div className="text-[9px] text-muted-text uppercase tracking-widest mb-1 font-mono">Competition</div>
                    <div className="text-sm font-bold text-primary-text">{opp.competition}</div>
                  </div>
                </div>

                {/* Master Score Footer */}
                <div className="pt-4 border-t border-app-border/50 flex items-end justify-between mt-auto">
                  <div>
                    <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono mb-1">Opportunity Score</div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${opp.color}`}>
                      {opp.status}
                    </div>
                  </div>
                  <div className={`text-3xl font-black ${opp.color}`}>
                    {opp.score}
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="py-12 text-center border border-dashed border-app-border rounded-xl">
          <p className="text-secondary-text font-mono">No completed research reports available yet.</p>
        </div>
      )}

      {/* SECTION 3: Empty State / Coming Soon for Automation */}
      <section className="bg-app-surface border border-dashed border-app-border/50 rounded-2xl p-12 text-center flex flex-col items-center justify-center relative overflow-hidden opacity-70 hover:opacity-100 transition-opacity mt-8">
        <div className="w-16 h-16 rounded-2xl bg-app-bg border border-app-border flex items-center justify-center text-muted-text mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        </div>
        <h3 className="text-lg font-bold text-primary-text mb-2">Automated Discovery Engine</h3>
        <p className="text-sm text-secondary-text max-w-md mx-auto mb-6">
          The global crawler is currently indexing millions of data points. Algorithmic opportunity surfacing will be activated in a future update.
        </p>
        <div className="text-xs font-mono text-muted-text bg-app-bg px-4 py-2 rounded-full border border-app-border">
          Status: Offline / Building Knowledge Graph
        </div>
      </section>

    </div>
  );
}