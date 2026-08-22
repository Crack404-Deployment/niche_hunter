import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features | Crack404 Niche Hunter',
  description: 'Explore the eight proprietary intelligence modules of Niche Hunter. From deep SERP analysis to automated Lighthouse competitor audits and 52-week trend mapping.',
  keywords: ['SaaS validation features', 'automated niche research', 'SERP competitor analysis', 'Lighthouse website audit API', 'keyword clustering', 'trend velocity tracking'],
  openGraph: {
    title: 'Platform Features | Crack404 Niche Hunter',
    description: 'Eight proprietary intelligence modules working together to validate your next software idea before you write a single line of code.',
    url: 'https://nichehunter.crack404.com/features',
    siteName: 'Crack404 Niche Hunter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Features | Crack404 Niche Hunter',
    description: 'Eight proprietary intelligence modules working together to validate your next software idea.',
  }
};

export default function FeaturesPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen relative overflow-hidden pb-32 bg-app-bg">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-app-bg to-app-bg -z-10" aria-hidden="true"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-25 pb-20 text-center" aria-labelledby="features-hero-heading">
        
        <h1 id="features-hero-heading" className="text-5xl md:text-6xl font-black text-primary-text tracking-tight mb-6">
          Tactical Intelligence.
        </h1>
        <p className="text-xl text-secondary-text max-w-2xl mx-auto font-light">
          Eight proprietary data modules working together to validate your next idea before you initialize a single repository.
        </p>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-6xl mx-auto px-6" aria-label="Core Features Grid">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. Demand Intelligence */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-info/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-info/10 border border-info/30 flex items-center justify-center text-info mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Demand Intelligence</h2>
              <p className="text-secondary-text text-sm">Analyze composite demand scores, semantic footprint, and search volume velocity to ensure consistent user interest.</p>
            </div>
            {/* Visual Mock (API Structure) */}
            <div className="relative z-10 mt-6 bg-app-surface2 border border-app-border rounded-lg p-4 flex items-center justify-between">
              <div className="w-full">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs text-secondary-text font-mono uppercase tracking-widest">Demand_Score</span>
                  <span className="text-lg font-black text-info">84/100</span>
                </div>
                <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-info w-[84%] group-hover:w-[90%] transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Trend Intelligence */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-success/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center text-success mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Trend Intelligence</h2>
              <p className="text-secondary-text text-sm">Spot exploding niches before they peak. Map 52-week historical data to differentiate between a fad and a long-term market.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 bg-app-surface2 border border-app-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted-text mb-1 font-mono uppercase tracking-widest">Direction: STABLE</div>
                  <div className="text-2xl font-black text-primary-text flex items-center gap-2">
                    73 <span className="text-xs text-success bg-success/10 px-2 py-0.5 rounded border border-success/30 font-bold uppercase tracking-widest">Score</span>
                  </div>
                </div>
                <svg className="w-16 h-8 text-success drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" fill="none" viewBox="0 0 100 40" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M0 35 Q 25 35, 35 20 T 70 20 T 100 15" className="group-hover:animate-pulse" />
                </svg>
            </div>
          </div>

          {/* 3. Keyword Discovery */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-accent/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Keyword Discovery</h2>
              <p className="text-secondary-text text-sm">Automatically extract the semantic landscape. Classify terms by intent (PRIMARY, COMMERCIAL) and cluster groupings.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                <div className="w-full flex items-center justify-between bg-app-surface2 border border-app-border rounded-md px-3 py-2 group-hover:border-accent/40 transition-colors">
                  <span className="text-xs font-mono text-primary-text">photo scanner app</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">PRIMARY</span>
                </div>
                <div className="w-full flex items-center justify-between bg-app-bg border border-app-border rounded-md px-3 py-2">
                  <span className="text-xs font-mono text-muted-text">best photo scanners</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary-text bg-app-surface2 px-1.5 py-0.5 rounded border border-app-border">COMMERCIAL</span>
                </div>
            </div>
          </div>

          {/* 4. SERP Analysis */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-warning/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-warning/10 border border-warning/30 flex items-center justify-center text-warning mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">SERP Analysis</h2>
              <p className="text-secondary-text text-sm">Deconstruct the top 10 search results. Identify organic opportunity flags and vulnerable domain results you can outrank easily.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 space-y-2">
                <div className="bg-app-surface2 border border-app-border rounded flex items-center p-2.5 gap-3">
                  <div className="w-6 h-6 rounded bg-app-bg flex items-center justify-center text-[10px] font-mono text-secondary-text border border-app-border">#1</div>
                  <div className="text-xs font-mono text-secondary-text truncate">www.pcmag.com</div>
                  <div className="text-[9px] font-bold text-muted-text ml-auto bg-app-bg px-2 py-0.5 rounded uppercase">ORGANIC</div>
                </div>
                <div className="bg-app-surface2 border border-success/50 rounded flex items-center p-2.5 gap-3 relative shadow-[0_0_10px_rgba(34,197,94,0.1)] group-hover:bg-success/5 transition-colors">
                  <div className="absolute -left-1 w-2 h-2 rounded-full bg-success animate-ping"></div>
                  <div className="w-6 h-6 rounded bg-app-bg flex items-center justify-center text-[10px] font-mono text-secondary-text border border-app-border">#2</div>
                  <div className="text-xs font-mono text-primary-text truncate">photext.ai</div>
                  <div className="text-[9px] font-bold text-success ml-auto bg-success/10 border border-success/30 px-2 py-0.5 rounded uppercase">OPPORTUNITY_FLAG</div>
                </div>
            </div>
          </div>

          {/* 5. Competitor Intelligence */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-danger/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(239,68,68,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-danger/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-danger/10 border border-danger/30 flex items-center justify-center text-danger mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Competitor Intelligence</h2>
              <p className="text-secondary-text text-sm">Reverse-engineer what works. Extract competitor page counts, estimate traffic, and find technical stack vulnerabilities.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 bg-app-surface2 border border-app-border rounded-lg p-4">
               <div className="flex justify-between items-center mb-3">
                 <span className="text-xs font-mono text-primary-text">www.camscanner.com</span>
                 <span className="text-[10px] text-danger font-bold uppercase tracking-widest bg-danger/10 px-2 py-0.5 rounded border border-danger/30">Vulnerable</span>
               </div>
               <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 text-xs text-secondary-text">
                   <svg className="w-3 h-3 text-app-border" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                   Pages Indexed: 2
                 </div>
                 <div className="flex items-center gap-2 text-xs text-secondary-text group-hover:text-primary-text transition-colors">
                   <svg className="w-3 h-3 text-app-border" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                   Tech Stack: legacy_framework
                 </div>
               </div>
            </div>
          </div>

          {/* 6. Website Audit */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-info/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-info/10 border border-info/30 flex items-center justify-center text-info mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Technical API Audits</h2>
              <p className="text-secondary-text text-sm">Automated Lighthouse scans on ranking pages. Expose exact SEO failures, performance bottlenecks, and slow load times.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
                <div className="bg-app-bg border border-app-border rounded-lg p-3 text-center">
                  <div className="text-[9px] text-muted-text font-mono uppercase tracking-widest mb-1">SEO</div>
                  <div className="text-lg font-black text-success">100</div>
                </div>
                <div className="bg-app-bg border border-app-border rounded-lg p-3 text-center group-hover:border-warning/50 transition-colors">
                  <div className="text-[9px] text-muted-text font-mono uppercase tracking-widest mb-1">PERF</div>
                  <div className="text-lg font-black text-warning">60</div>
                </div>
                <div className="bg-app-bg border border-app-border rounded-lg p-3 text-center group-hover:border-danger/50 transition-colors">
                  <div className="text-[9px] text-muted-text font-mono uppercase tracking-widest mb-1">LOAD</div>
                  <div className="text-sm font-black text-danger mt-2">7.2s</div>
                </div>
            </div>
          </div>

          {/* 7. Monetization Analysis */}
          <div className="group bg-app-surface border border-app-border rounded-2xl p-8 hover:border-success/50 transition-colors relative overflow-hidden flex flex-col justify-between h-[340px] shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
             <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-success/10 border border-success/30 flex items-center justify-center text-success mb-6 shadow-inner group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Monetization Telemetry</h2>
              <p className="text-secondary-text text-sm">Calculate average RPC (Revenue Per Click), affiliate potential, and SaaS pricing viability scores active in the niche.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 bg-app-surface2 border border-app-border rounded-lg p-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-secondary-text font-mono uppercase tracking-widest">Monetization_Score</span>
                <span className="text-lg font-black text-warning">40/100</span>
              </div>
              <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden">
                <div className="h-full bg-warning w-[40%] group-hover:w-[45%] transition-all duration-1000"></div>
              </div>
              <p className="text-[10px] text-muted-text mt-3 font-mono">Status: Limited commercial intent detected.</p>
            </div>
          </div>

          {/* 8. Build Opportunity */}
          <div className="group bg-gradient-to-br from-app-surface2 to-app-surface border border-accent/40 rounded-2xl p-8 hover:border-accent shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all relative overflow-hidden flex flex-col justify-between h-[340px]">
             <div className="absolute -inset-1 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-50"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/50 flex items-center justify-center text-accent mb-6 shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-2">Build Opportunity</h2>
              <p className="text-secondary-text text-sm">The ultimate master score. We calculate all data points to give you a definitive algorithmic rating: BUILD or AVOID.</p>
            </div>
             {/* Visual Mock (API Structure) */}
             <div className="relative z-10 mt-6 flex items-center justify-between border-t border-app-border/50 pt-4">
                <div>
                  <div className="text-[10px] text-secondary-text mb-1 tracking-widest uppercase font-mono">Algorithm_Verdict</div>
                  <div className="text-sm font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-0.5 rounded border border-red-500/30 w-fit">AVOID</div>
                </div>
                <div className="text-4xl font-black text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">
                  29<span className="text-lg text-muted-text">/100</span>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-32 text-center" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-3xl font-bold text-primary-text mb-6">Ready to see the real data?</h2>
        <Link 
          href="/login" 
          aria-label="Create your free account to run an analysis"
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-accent rounded-xl hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-1"
        >
          Run Your First Analysis
        </Link>
      </section>

    </main>
  );
}