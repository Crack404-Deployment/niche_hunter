"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { researchService, OpportunityScore } from '@/services/research.service';

export default function BuildPlanPage() {
  const params = useParams();
  const id = params.id as string;
  const [scoreData, setScoreData] = useState<OpportunityScore | null>(null);

  useEffect(() => {
    if (id) {
      researchService.getScore(id).then(setScoreData).catch(console.error);
    }
  }, [id]);

  const score = scoreData?.buildability_score || 0;
  const effortLevel = score >= 70 ? "LOW" : score >= 40 ? "MEDIUM" : "HIGH";

  const mvpFeatures = ["HEIC → JPG", "HEIC → PNG", "HEIC Compressor"];
  const phase2Features = ["AVIF Support", "WebP Support", "Image Resizer"];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 08</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Execution Blueprint
          </h1>
        </div>

        <div className="relative z-10 flex items-center bg-app-bg/80 border border-app-border p-6 rounded-xl shrink-0">
          <div className="text-right mr-6 hidden sm:block">
            <div className="text-xs text-muted-text uppercase tracking-widest font-mono mb-1">Time to Market</div>
            <div className="text-sm font-bold text-primary-text">Estimated Effort</div>
          </div>
          <div className="w-px h-12 bg-app-border mr-6 hidden sm:block"></div>
          <div className="text-center">
            <div className={`text-4xl font-black ${effortLevel === 'LOW' ? 'text-score-exceptional' : 'text-score-risky'}`}>
              {effortLevel}
            </div>
            <div className="text-muted-text text-[10px] font-bold tracking-widest uppercase mt-1">
              Buildability Score: {score}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your beautiful Build Plan UI goes here... */}
    </div>
  );
}