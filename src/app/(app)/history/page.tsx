"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { researchService, ResearchJob } from '@/services/research.service';

export default function HistoryPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Completed' | 'Processing' | 'Failed'>('All');
  const [historyData, setHistoryData] = useState<ResearchJob[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    researchService.getResearchHistory()
      .then(setHistoryData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const getMappedStatus = (status: string) => {
    if (status === 'COMPLETED') return 'Completed';
    if (status === 'FAILED') return 'Failed';
    return 'Processing';
  };

  const getScoreStyle = (mappedStatus: string) => {
    if (mappedStatus === 'Completed') return { text: "text-score-strong", badge: "bg-score-strong/10 border-score-strong/30 text-score-strong" };
    if (mappedStatus === 'Processing') return { text: "text-score-promising", badge: "bg-score-promising/10 border-score-promising/30 text-score-promising" };
    return { text: "text-score-risky", badge: "bg-score-risky/10 border-score-risky/30 text-score-risky" };
  };

  const filteredData = historyData.filter(item => {
    if (activeFilter === 'All') return true;
    return getMappedStatus(item.status) === activeFilter;
  });

  const filters: ('All' | 'Completed' | 'Processing' | 'Failed')[] = ['All', 'Completed', 'Processing', 'Failed'];

  if (loading) {
    return <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-pulse space-y-4"><div className="h-32 bg-app-surface rounded-2xl mb-8"></div><div className="h-[400px] bg-app-surface rounded-xl"></div></div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header */}
      <section className="relative flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-6 border-b border-app-border/50">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Archive</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-primary-text tracking-tight">
            Research History
          </h1>
          <p className="text-secondary-text mt-3 max-w-2xl text-sm">
            Access your past niche intelligence reports and monitor background worker status.
          </p>
        </div>
        
        {/* Total Count Badge */}
        <div className="flex items-center gap-4 bg-app-bg border border-app-border rounded-xl p-4 shrink-0 shadow-inner">
          <div className="text-right">
            <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono mb-1">Total Logs</div>
            <div className="text-2xl font-black text-primary-text">{historyData.length}</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Filters & Data Table */}
      <section className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-xl">
        
        {/* Filters Bar */}
        <div className="p-4 border-b border-app-border/50 bg-app-surface2/30 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-mono text-muted-text uppercase tracking-widest mr-4">Filters:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 font-mono tracking-widest uppercase ${
                activeFilter === filter 
                  ? 'bg-accent text-app-bg shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                  : 'bg-app-bg border border-app-border text-secondary-text hover:text-primary-text hover:border-app-border/80'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* History Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-app-bg border-b border-app-border text-[10px] uppercase tracking-widest text-muted-text font-mono">
                <th className="py-4 px-6 font-medium w-32">Date</th>
                <th className="py-4 px-6 font-medium">Target Niche</th>
                <th className="py-4 px-6 font-medium">Target Market</th>
                <th className="py-4 px-6 font-medium text-center">Status</th>
                <th className="py-4 px-6 font-medium text-right">Score</th>
                <th className="py-4 px-6 font-medium w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-app-border/50">
              {filteredData.length > 0 ? (
                filteredData.map((item) => {
                  const mappedStatus = getMappedStatus(item.status);
                  const style = getScoreStyle(mappedStatus);
                  
                  // Format the timestamp nicely
                  const formattedDate = new Date(item.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  });

                  return (
                    <tr key={item.id} className="hover:bg-app-surface2/50 transition-colors group">
                      
                      {/* Date */}
                      <td className="py-4 px-6 text-sm font-mono text-muted-text">
                        {formattedDate}
                      </td>
                      
                      {/* Title (Query) */}
                      <td className="py-4 px-6 font-bold text-primary-text group-hover:text-accent transition-colors capitalize">
                        <Link href={`/research/${item.id}/overview`} className="block">
                          {item.query}
                        </Link>
                      </td>

                      {/* Market Info */}
                      <td className="py-4 px-6">
                        <span className="text-xs text-secondary-text font-mono bg-app-bg border border-app-border px-2 py-1 rounded">
                          {item.country} ({item.language.toUpperCase()})
                        </span>
                      </td>
                      
                      {/* Status Badge */}
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded border font-mono ${style.badge}`}>
                          {mappedStatus}
                        </span>
                      </td>
                      
                      {/* Score Placeholder (Requires Django serializer update to fetch natively) */}
                      <td className="py-4 px-6 text-right">
                        <span className="text-xl font-black text-muted-text/50">
                          --
                        </span>
                      </td>

                      {/* Action Arrow */}
                      <td className="py-4 px-6 text-right">
                        <Link href={`/research/${item.id}/overview`} className="text-muted-text hover:text-accent transition-colors inline-block p-2">
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </td>
                      
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="py-12 px-6 text-center text-muted-text font-mono text-sm">
                    No research logs found for filter: <span className="text-primary-text">[{activeFilter}]</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}