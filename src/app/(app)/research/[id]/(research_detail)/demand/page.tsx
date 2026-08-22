export default function DemandPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header & Master Demand Score */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-score-strong/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-info animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 01</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Demand Intelligence
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Analyzing search volume velocity, user intent strength, and the overall semantic footprint of the target market.
          </p>
        </div>

        <div className="relative z-10 flex items-center bg-app-bg/80 border border-app-border p-6 rounded-xl shrink-0">
          <div className="text-right mr-6 hidden sm:block">
            <div className="text-xs text-muted-text uppercase tracking-widest font-mono mb-1">Composite</div>
            <div className="text-sm font-bold text-primary-text">Demand Score</div>
          </div>
          <div className="w-px h-12 bg-app-border mr-6 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-score-strong drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              84<span className="text-xl text-muted-text">/100</span>
            </div>
            <div className="text-score-strong text-[10px] font-bold tracking-widest uppercase mt-1">
              Strong Demand
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Sub-Metrics (Progress Bars) */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 shadow-xl">
        <h2 className="text-lg font-bold text-primary-text mb-8 border-b border-app-border/50 pb-4">Volume & Interest Vectors</h2>
        
        <div className="space-y-8 max-w-4xl">
          {/* Search Interest Bar */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="font-bold text-primary-text text-sm">Search Interest</div>
                <div className="text-xs text-secondary-text font-mono mt-0.5">Primary query volume & stability over 12 months</div>
              </div>
              <div className="text-info font-black font-mono text-lg">82%</div>
            </div>
            <div className="w-full bg-app-bg h-3 rounded-full overflow-hidden border border-app-border/50">
              <div className="h-full bg-info relative" style={{ width: '82%' }}>
                <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
              </div>
            </div>
          </div>

          {/* Related Searches Bar */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="font-bold text-primary-text text-sm">Related Searches</div>
                <div className="text-xs text-secondary-text font-mono mt-0.5">Depth of semantic variations and 'People Also Ask' triggers</div>
              </div>
              <div className="text-accent font-black font-mono text-lg">94%</div>
            </div>
            <div className="w-full bg-app-bg h-3 rounded-full overflow-hidden border border-app-border/50">
              <div className="h-full bg-accent relative" style={{ width: '94%' }}>
                <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
              </div>
            </div>
          </div>

          {/* Keyword Coverage Bar */}
          <div>
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="font-bold text-primary-text text-sm">Keyword Coverage</div>
                <div className="text-xs text-secondary-text font-mono mt-0.5">Ratio of discovered keywords vs. total possible search space</div>
              </div>
              <div className="text-warning font-black font-mono text-lg">68%</div>
            </div>
            <div className="w-full bg-app-bg h-3 rounded-full overflow-hidden border border-app-border/50">
              <div className="h-full bg-warning relative" style={{ width: '68%' }}>
                <div className="absolute inset-0 bg-white/20 w-full h-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Keyword Groups */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary-text">Semantic Keyword Groups</h2>
          <span className="text-xs font-mono text-muted-text border border-app-border bg-app-surface2 px-3 py-1 rounded-full">
            248 Total Keywords Discovered
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Group 1 */}
          <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden flex flex-col">
            <div className="bg-app-surface2 border-b border-app-border p-4 flex items-center justify-between">
              <h3 className="font-bold text-primary-text text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-score-strong"></span>
                Core Converters
              </h3>
              <span className="text-xs font-mono text-secondary-text">124K Vol</span>
            </div>
            <div className="p-4 flex-grow space-y-2">
              {["heic to jpg", "convert heic", "heic converter windows", "open heic file"].map((kw, i) => (
                <div key={i} className="flex items-center justify-between text-sm bg-app-bg border border-app-border/50 rounded px-3 py-1.5">
                  <span className="text-secondary-text font-mono text-xs">{kw}</span>
                  <span className="text-success text-[10px] font-bold bg-success/10 px-1.5 py-0.5 rounded">High Intent</span>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2 */}
          <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden flex flex-col">
            <div className="bg-app-surface2 border-b border-app-border p-4 flex items-center justify-between">
              <h3 className="font-bold text-primary-text text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-info"></span>
                Long-Tail Technical
              </h3>
              <span className="text-xs font-mono text-secondary-text">32K Vol</span>
            </div>
            <div className="p-4 flex-grow space-y-2">
              {["batch convert heic mac", "heic to png transparent", "heic to pdf online", "bulk heic to jpg"].map((kw, i) => (
                <div key={i} className="flex items-center justify-between text-sm bg-app-bg border border-app-border/50 rounded px-3 py-1.5">
                  <span className="text-secondary-text font-mono text-xs">{kw}</span>
                  <span className="text-info text-[10px] font-bold bg-info/10 px-1.5 py-0.5 rounded">Low KD</span>
                </div>
              ))}
            </div>
          </div>

          {/* Group 3 */}
          <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden flex flex-col">
            <div className="bg-app-surface2 border-b border-app-border p-4 flex items-center justify-between">
              <h3 className="font-bold text-primary-text text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-warning"></span>
                Informational
              </h3>
              <span className="text-xs font-mono text-secondary-text">88K Vol</span>
            </div>
            <div className="p-4 flex-grow space-y-2">
              {["what is a heic file", "why does iphone use heic", "how to view heic", "heic vs jpg quality"].map((kw, i) => (
                <div key={i} className="flex items-center justify-between text-sm bg-app-bg border border-app-border/50 rounded px-3 py-1.5">
                  <span className="text-secondary-text font-mono text-xs truncate max-w-[140px]">{kw}</span>
                  <span className="text-muted-text text-[10px] font-bold bg-app-surface2 px-1.5 py-0.5 rounded">Top of Funnel</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}