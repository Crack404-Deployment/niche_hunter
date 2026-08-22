import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How It Works | Crack404 Niche Hunter Pipeline",
  description: "Explore the 6-stage algorithmic validation pipeline: From raw seed idea to automated research, data aggregation, Lighthouse analysis, scoring, and tactical build recommendations.",
  keywords: [
    "niche validation pipeline",
    "market research process",
    "SERP intelligence pipeline",
    "software idea validation",
    "micro SaaS research",
    "competitor auditing API"
  ],
  openGraph: {
    title: "How It Works — Crack404 Niche Hunter",
    description: "The algorithmic engine that turns raw software concepts into validated, high-conviction builds.",
    url: 'https://nichehunter.crack404.com/how-it-works',
    siteName: 'Crack404 Niche Hunter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "How It Works — Crack404 Niche Hunter",
    description: "The algorithmic engine that turns raw software concepts into validated, high-conviction builds.",
  }
};

const pipelineSteps = [
  {
    step: "01",
    phase: "PHASE_01 // INGESTION",
    title: "Idea Input & Seeding",
    badge: "Input Stage",
    badgeColor: "border-accent/30 bg-accent/10 text-accent",
    description:
      "Enter a high-level software concept, problem space, keyword, or competitor URL. The engine tokenizes your query into semantic search vectors and seed keywords.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>SOURCE_INPUT</span>
          <span className="text-accent text-[10px] uppercase tracking-widest font-bold">PARSED</span>
        </div>
        <div className="bg-app-surface2 border border-app-border rounded p-2.5 flex items-center justify-between">
          <span className="text-primary-text font-medium text-sm">photo scanner</span>
          <span className="text-[10px] text-success border border-success/30 bg-success/10 px-2 py-0.5 rounded font-bold tracking-widest uppercase">Seed Keyword</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px] text-secondary-text">
          <div className="bg-app-surface p-2.5 rounded border border-app-border/60">
            <span className="text-muted-text block text-[9px] uppercase tracking-widest mb-1">INTENT CATEGORY</span>
            <span className="font-medium text-primary-text">PRIMARY</span>
          </div>
          <div className="bg-app-surface p-2.5 rounded border border-app-border/60">
            <span className="text-muted-text block text-[9px] uppercase tracking-widest mb-1">TARGET MARKET</span>
            <span className="font-medium text-primary-text">Global (US / EN)</span>
          </div>
        </div>
      </div>
    ),
    highlights: ["Raw query expansion", "Keyword vectorization", "Target market clustering"]
  },
  {
    step: "02",
    phase: "PHASE_02 // AGGREGATION",
    title: "Autonomous Deep Research",
    badge: "Web Crawling",
    badgeColor: "border-info/30 bg-info/10 text-info",
    description:
      "Niche Hunter initiates asynchronous crawler threads across search engines, trend trackers, and technical audit APIs to harvest real-time market data without manual intervention.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-2.5 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>CRAWLER_TASKS</span>
          <span className="text-info text-[10px] animate-pulse font-bold tracking-widest uppercase">ACTIVE_THREADS</span>
        </div>
        {[
          { label: "Google SERP Index Top 10", status: "200 OK", delay: "140ms" },
          { label: "Search Volume History (52 Wk)", status: "200 OK", delay: "89ms" },
          { label: "Competitor Tech Stack Scans", status: "200 OK", delay: "310ms" },
          { label: "Lighthouse Performance APIs", status: "200 OK", delay: "415ms" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-[11px] bg-app-surface2/60 px-3 py-2 rounded border border-app-border/40">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-secondary-text truncate">{item.label}</span>
            </div>
            <span className="text-muted-text text-[10px] shrink-0">{item.delay}</span>
          </div>
        ))}
      </div>
    ),
    highlights: ["Top 10 SERP extraction", "52-week trend polling", "Automated Lighthouse scans"]
  },
  {
    step: "03",
    phase: "PHASE_03 // SYNTHESIS",
    title: "Raw Data Normalization",
    badge: "Data Matrix",
    badgeColor: "border-warning/30 bg-warning/10 text-warning",
    description:
      "Thousands of raw JSON data points are sanitized, normalized, and mapped into structured matrices. We discard noise and isolate the exact metrics that dictate profitability.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>DATA_MATRIX_NORMALIZED</span>
          <span className="text-warning text-[10px] font-bold tracking-widest uppercase">STRUCTURED</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-app-surface2 p-3 rounded border border-app-border">
            <div className="text-[10px] text-muted-text uppercase tracking-widest mb-1">SERP_TARGETS</div>
            <div className="text-lg font-bold text-primary-text">10 Results</div>
          </div>
          <div className="bg-app-surface2 p-3 rounded border border-app-border">
            <div className="text-[10px] text-muted-text uppercase tracking-widest mb-1">TREND_VELOCITY</div>
            <div className="text-lg font-bold text-info">STABLE (73)</div>
          </div>
        </div>
        <div className="text-[11px] text-secondary-text bg-app-surface p-3 rounded border border-app-border flex items-center justify-between">
          <span className="uppercase tracking-widest text-[9px]">Competitors Audited:</span>
          <span className="text-primary-text font-bold">8 Unique Domains</span>
        </div>
      </div>
    ),
    highlights: ["Noise filtering & deduplication", "Search volume aggregation", "Keyword clustering"]
  },
  {
    step: "04",
    phase: "PHASE_04 // INTELLIGENCE",
    title: "Algorithmic Analysis & Gap Detection",
    badge: "Intelligence Layer",
    badgeColor: "border-accent/30 bg-accent/10 text-accent",
    description:
      "Our heuristics engine analyzes market dynamics: identifying stagnant top-ranking competitors, slow-loading legacy tools, unoptimized mobile interfaces, and feature gaps.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-3 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>VULNERABILITY_DETECTION</span>
          <span className="text-accent text-[10px] font-bold tracking-widest uppercase">2 FLAGS</span>
        </div>
        <div className="p-3 rounded bg-warning/10 border border-warning/30 text-[11px] space-y-1.5">
          <div className="text-warning font-bold flex items-center gap-2 text-xs">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            Technical Bottleneck
          </div>
          <div className="text-secondary-text text-[10px] leading-relaxed">
            Target 'www.pcmag.com' suffers from severe performance drag. Load time detected at <strong>7.2 seconds</strong> (Score: 60/100).
          </div>
        </div>
        <div className="p-3 rounded bg-danger/10 border border-danger/30 text-[11px] space-y-1.5">
          <div className="text-danger font-bold flex items-center gap-2 text-xs">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            High SERP Defense
          </div>
          <div className="text-secondary-text text-[10px] leading-relaxed">
            Target SERP is saturated with high-authority domains. 0 organic opportunity flags triggered.
          </div>
        </div>
      </div>
    ),
    highlights: ["Weak SERP entrant detection", "Competitor tech debt audits", "Feature gap matching"]
  },
  {
    step: "05",
    phase: "PHASE_05 // EVALUATION",
    title: "Multi-Variable Opportunity Scoring",
    badge: "Scoring Engine",
    badgeColor: "border-score-strong/30 bg-score-strong/10 text-score-strong",
    description:
      "All metrics are fed into our weighted scoring model (0–100). The algorithm balances search demand, SERP vulnerability, monetization potential, and developer build effort.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-4 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>WEIGHTED_SCORECARD</span>
          <span className="text-danger text-[10px] font-bold tracking-widest uppercase">RISK_DETECTED</span>
        </div>
        <div className="space-y-3">
          {[
            { metric: "Demand Score", score: "10/100", w: "10%", color: "bg-danger" },
            { metric: "SERP Score", score: "2/100", w: "2%", color: "bg-danger" },
            { metric: "Trend Score", score: "73/100", w: "73%", color: "bg-info" },
            { metric: "Buildability Score", score: "31/100", w: "31%", color: "bg-warning" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-[10px] uppercase tracking-widest">
                <span className="text-secondary-text">{item.metric}</span>
                <span className="text-primary-text font-bold">{item.score}</span>
              </div>
              <div className="w-full bg-app-surface2 h-1.5 rounded-full overflow-hidden">
                <div className={`${item.color} h-full rounded-full transition-all`} style={{ width: item.w }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-app-border flex items-center justify-between">
          <span className="text-[10px] text-muted-text uppercase tracking-widest">FINAL COMPOSITE SCORE</span>
          <span className="text-2xl font-black text-danger">29 / 100</span>
        </div>
      </div>
    ),
    highlights: ["Demand velocity weight", "SERP ranking friction score", "Technical complexity index"]
  },
  {
    step: "06",
    phase: "PHASE_06 // EXECUTION",
    title: "Actionable Build Recommendation",
    badge: "Tactical Blueprint",
    badgeColor: "border-accent/40 bg-accent/10 text-accent",
    description:
      "Receive a complete execution brief. Often, the most valuable output is knowing when to SKIP a bad idea, saving you weeks of unrewarded coding effort.",
    mockup: (
      <div className="bg-app-bg border border-app-border rounded-xl p-4 font-mono text-xs space-y-4 shadow-inner">
        <div className="flex items-center justify-between text-muted-text pb-2 border-b border-app-border">
          <span>BLUEPRINT_OUTPUT</span>
          <span className="text-danger text-[10px] font-bold tracking-widest uppercase">STATUS: HALT</span>
        </div>
        <div className="bg-danger/10 border border-danger/30 p-3 rounded flex items-center justify-between">
          <span className="text-danger font-bold text-sm uppercase tracking-widest">Recommendation:</span>
          <span className="text-danger font-black text-lg bg-danger/20 px-2 py-0.5 rounded">AVOID</span>
        </div>
        <div className="space-y-2 text-[11px] text-secondary-text bg-app-surface2 p-3 rounded border border-app-border/50">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-warning shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <span className="leading-relaxed">Extremely low demand (10/100). Do not allocate engineering resources to this query.</span>
          </div>
          <div className="flex items-start gap-2 pt-1">
            <svg className="w-4 h-4 text-warning shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <span className="leading-relaxed">Highly saturated SERP environment. Pivot to an adjacent micro-niche.</span>
          </div>
        </div>
      </div>
    ),
    highlights: ["Definitive Build / Skip verdict", "Saves weeks of wasted coding", "Immediate pivot guidance"]
  }
];

export default function HowItWorksPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen relative overflow-hidden pb-32 bg-app-bg">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/15 via-app-bg to-app-bg -z-10" aria-hidden="true"></div>
      <div className="absolute top-96 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-[140px] -z-10" aria-hidden="true"></div>
      <div className="absolute top-[800px] -right-48 w-96 h-96 bg-info/10 rounded-full blur-[140px] -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-96 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] -z-10" aria-hidden="true"></div>

      {/* Header / Hero Section */}
      <section className="w-full max-w-5xl mx-auto px-6 pt-25 pb-20 text-center relative z-10" aria-labelledby="pipeline-hero-heading">

        <h1 id="pipeline-hero-heading" className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-primary-text to-secondary-text tracking-tight mb-6 leading-tight">
          How Niche Hunter Works.
        </h1>

        <p className="text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto font-light leading-relaxed">
          From a raw query to mathematical certainty. Follow the complete intelligence pipeline that turns seed ideas into validated, high-conviction software products.
        </p>

        {/* Quick Pipeline Flow Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-muted-text">
          {["Idea", "Research", "Data", "Analysis", "Scoring", "Recommendation"].map((node, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-app-surface border border-app-border text-primary-text font-semibold shadow-sm">
                {node}
              </span>
              {i < 5 && <span className="text-accent font-bold" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline Steps (Vertical Timeline with Connecting Line) */}
      <section className="w-full max-w-6xl mx-auto px-6 relative z-10" aria-label="Pipeline Stages">
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent/50 via-app-border to-score-strong/50 z-0 pointer-events-none" aria-hidden="true"></div>

          <div className="space-y-16 lg:space-y-24">
            {pipelineSteps.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <article
                  key={idx}
                  className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {/* Left Column (Content on Even, Mockup on Odd for desktop) */}
                  <div className={`space-y-4 ${isEven ? "lg:text-left lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-muted-text tracking-widest">{item.phase}</span>
                      <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border ${item.badgeColor} shadow-sm`}>
                        {item.badge}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight flex items-center">
                      <span className="text-accent mr-3 font-mono">{item.step}.</span>
                      {item.title}
                    </h2>

                    <p className="text-secondary-text text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {item.highlights.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono bg-app-surface2 border border-app-border text-secondary-text px-3 py-1.5 rounded-md flex items-center gap-1.5"
                        >
                          <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (Mockup on Even, Content on Odd for desktop) */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-info/20 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500" aria-hidden="true"></div>
                      <div className="relative bg-app-surface border border-app-border rounded-2xl p-6 shadow-2xl hover:border-app-border/80 transition-colors">
                        {item.mockup}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Strategic Explanation Grid */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-36 relative z-10" aria-labelledby="methodology-heading">
        <div className="bg-app-surface border border-app-border rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

          <div className="max-w-3xl mb-12 relative z-10">
            <h2 id="methodology-heading" className="text-3xl md:text-4xl font-bold text-primary-text mb-4 tracking-tight">
              Why the Niche Hunter Methodology Works
            </h2>
            <p className="text-secondary-text text-base md:text-lg leading-relaxed font-light">
              Traditional market research relies on intuition and guesswork. The Crack404 intelligence engine transforms software validation into an empirical science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="bg-app-bg border border-app-border rounded-xl p-8 hover:border-accent/40 transition-colors">
              <div className="text-accent text-3xl mb-4 font-mono font-black">01</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Zero Assumptions</h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Every opportunity is backed by API-driven search volumes, verified competitor load times, and real-time Google SERP position analysis.
              </p>
            </div>

            <div className="bg-app-bg border border-app-border rounded-xl p-8 hover:border-info/40 transition-colors">
              <div className="text-info text-3xl mb-4 font-mono font-black">02</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Vulnerability First</h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                Instead of attacking industry giants, we hunt for weak competitors holding top spots that you can easily outrank with a performant Next.js app.
              </p>
            </div>

            <div className="bg-app-bg border border-app-border rounded-xl p-8 hover:border-success/40 transition-colors">
              <div className="text-success text-3xl mb-4 font-mono font-black">03</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Execution Ready</h3>
              <p className="text-sm text-secondary-text leading-relaxed">
                You receive a definitive build plan outlining exactly what MVP features to develop and which exact keywords to target for initial traction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-32 text-center relative z-10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-4xl md:text-5xl font-black text-primary-text mb-6 tracking-tight">
          Ready to run your idea through the pipeline?
        </h2>
        <p className="text-lg md:text-xl text-secondary-text mb-10 max-w-2xl mx-auto font-light">
          Start your first niche intelligence report in under 60 seconds. Stop coding in the dark and start building with data.
        </p>
        <Link
          href="/login"
          aria-label="Create your free account to validate a niche"
          className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-accent rounded-xl hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:-translate-y-1 text-lg"
        >
          Validate Your First Niche
        </Link>
      </section>

    </main>
  );
}