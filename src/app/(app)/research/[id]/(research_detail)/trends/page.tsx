"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, TrendData } from '@/services/research.service';

export default function TrendsPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [trends, setTrends] = useState<TrendData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    researchService.getTrends(id)
      .then(setTrends)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="w-full max-w-6xl mx-auto px-6 py-8 animate-pulse"><div className="h-[500px] bg-app-surface rounded-2xl"></div></div>;
  }

  // Dynamic calculations from the API data
  const latestScore = trends.length > 0 ? trends[trends.length - 1].interest_score : 0;
  const avgScore = trends.length > 0 ? Math.round(trends.reduce((acc, t) => acc + t.interest_score, 0) / trends.length) : 0;
  const isRising = latestScore >= avgScore;

  // Dynamic SVG Path Generation
  const generateSvgPath = () => {
    if (trends.length === 0) return 'M0,240 L1000,240';
    return trends.map((t, i) => {
      const x = (i / (Math.max(trends.length - 1, 1))) * 1000;
      const y = 240 - (t.interest_score / 100) * 215; // 240 is base, 25 is peak
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  };
  
  const pathString = generateSvgPath();
  const fillPathString = `${pathString} L1000,300 L0,300 Z`;

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header & Master Trend Score */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-score-promising/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-score-promising animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 02</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Trend Intelligence
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Evaluating historical momentum, seasonality, and long-term interest trajectory for the target niche.
          </p>
        </div>

        <div className="relative z-10 flex items-center bg-app-bg/80 border border-app-border p-6 rounded-xl shrink-0">
          <div className="text-right mr-6 hidden sm:block">
            <div className="text-xs text-muted-text uppercase tracking-widest font-mono mb-1">Momentum</div>
            <div className="text-sm font-bold text-primary-text">Trend Score</div>
          </div>
          <div className="w-px h-12 bg-app-border mr-6 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-score-promising drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]">
              {avgScore}<span className="text-xl text-muted-text">/100</span>
            </div>
            <div className="text-score-promising text-[10px] font-bold tracking-widest uppercase mt-1">
              {isRising ? 'Promising' : 'Stable'}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Main Interactive Chart */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 shadow-xl">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg font-bold text-primary-text">Search Interest Over Time</h2>
          <div className="flex items-center gap-2 text-xs font-mono bg-app-bg border border-app-border px-3 py-1.5 rounded-lg">
            <span className="text-muted-text">Data Points:</span>
            <span className="text-primary-text">{trends.length} Weeks</span>
          </div>
        </div>
        
        {/* SVG Chart Container */}
        <div className="w-full relative h-[300px] md:h-[400px] pl-8 pb-8">
          
          <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-muted-text font-mono text-right pr-4 font-bold">
            <span>100 ┤</span>
            <span>80 ┤</span>
            <span>60 ┤</span>
            <span>40 ┤</span>
            <span>20 ┤</span>
            <span>0 ┤</span>
          </div>

          <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {[0, 60, 120, 180, 240, 300].map((y, i) => (
              <line key={i} x1="0" y1={y} x2="1000" y2={y} stroke="#242B36" strokeWidth="1" strokeDasharray="4 4" />
            ))}

            <path d={fillPathString} fill="url(#trendGradient)" />
            
            <path 
              d={pathString} 
              fill="none" 
              stroke="#F59E0B" 
              strokeWidth="4" 
              filter="url(#glow)"
              className="path-animate" 
            />

            {/* Render a dot for every 8th week to avoid cluttering the line */}
            {trends.filter((_, i) => i % 8 === 0 || i === trends.length - 1).map((t, i, arr) => {
              const originalIndex = trends.indexOf(t);
              const x = (originalIndex / (Math.max(trends.length - 1, 1))) * 1000;
              const y = 240 - (t.interest_score / 100) * 215;
              return <circle key={t.id} cx={x} cy={y} r="5" fill="#080B10" stroke="#F59E0B" strokeWidth="3" />;
            })}
          </svg>

          <div className="absolute left-8 right-0 bottom-0 flex justify-between text-[10px] text-muted-text font-mono font-bold mt-4 pt-2 border-t border-app-border">
            <span>Start</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
            <span>Latest</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: Trend Insights Data Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Direction Card */}
        <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-success/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-xs text-muted-text font-mono uppercase tracking-widest mb-2">Trend Direction</div>
          <div className="flex items-end gap-4">
            <div className={`text-3xl font-black ${isRising ? 'text-success' : 'text-warning'} flex items-center gap-2`}>
              {isRising ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>
              )}
              {isRising ? 'Rising' : 'Stable/Dropping'}
            </div>
          </div>
          <p className="text-xs text-secondary-text mt-4">
            Analysis based on 52-week historical Google Trends data mapping.
          </p>
        </div>

        <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-info/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-xs text-muted-text font-mono uppercase tracking-widest mb-2">Momentum Velocity</div>
          <div className="flex items-end gap-4">
            <div className="text-3xl font-black text-info">Active</div>
            <div className="text-xs font-bold text-secondary-text mb-1 bg-app-bg px-2 py-0.5 rounded border border-app-border">Market State</div>
          </div>
          <p className="text-xs text-secondary-text mt-4">
            User search volume indicates the category is currently active in the market.
          </p>
        </div>

        <div className="bg-app-surface border border-app-border rounded-xl p-6 relative overflow-hidden group">
           <div className="absolute inset-0 bg-app-surface2/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-xs text-muted-text font-mono uppercase tracking-widest mb-2">Seasonality Risk</div>
          <div className="flex items-end gap-4">
            <div className="text-3xl font-black text-primary-text">Low</div>
            <div className="text-xs font-bold text-success mb-1">Evergreen</div>
          </div>
          <p className="text-xs text-secondary-text mt-4">
            Demand remains relatively stable throughout the year. No major dependencies on holiday cycles.
          </p>
        </div>
      </section>
    </div>
  );
}