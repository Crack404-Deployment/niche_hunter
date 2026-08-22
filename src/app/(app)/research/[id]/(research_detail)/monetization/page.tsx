export default function MonetizationPage() {
  const models = [
    { name: "Advertising", potential: "HIGH", color: "text-score-strong bg-score-strong/10 border-score-strong/30", description: "Extremely high traffic volume potential with low barrier to entry. Perfect for display ads (e.g., Mediavine, AdThrive) once traffic scales past 50k sessions/mo." },
    { name: "Premium (Freemium)", potential: "MEDIUM", color: "text-score-promising bg-score-promising/10 border-score-promising/30", description: "Core conversion is a commodity, but premium features like 'Bulk Convert', 'Cloud Storage Integration', and 'High Resolution Export' can drive modest subscription revenue." },
    { name: "API Access", potential: "MEDIUM", color: "text-score-promising bg-score-promising/10 border-score-promising/30", description: "B2B developers need HEIC conversion for their own apps. Offering a clean, rate-limited REST API creates a secondary, highly stable revenue stream." },
    { name: "Affiliate", potential: "LOW", color: "text-muted-text bg-app-surface2 border-app-border", description: "Very little commercial intent. Users just want to convert a file, not buy photography software or cloud storage. Affiliate conversions will be negligible." },
    { name: "Lead Generation", potential: "LOW", color: "text-muted-text bg-app-surface2 border-app-border", description: "Transactional, single-use intent. Collecting emails will cause high friction and lead to immediate bounce to competitors. Not recommended." },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header & Master Score */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-score-strong/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-score-strong animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 07</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Monetization Potential
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Analyzing commercial viability, expected revenue channels, and user willingness to pay.
          </p>
        </div>

        <div className="relative z-10 flex items-center bg-app-bg/80 border border-app-border p-6 rounded-xl shrink-0">
          <div className="text-right mr-6 hidden sm:block">
            <div className="text-xs text-muted-text uppercase tracking-widest font-mono mb-1">Commercial</div>
            <div className="text-sm font-bold text-primary-text">Viability Score</div>
          </div>
          <div className="w-px h-12 bg-app-border mr-6 hidden sm:block"></div>
          <div className="text-center">
            <div className="text-5xl font-black text-score-strong drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              82<span className="text-xl text-muted-text">/100</span>
            </div>
            <div className="text-score-strong text-[10px] font-bold tracking-widest uppercase mt-1">
              Strong Viability
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Monetization Matrix */}
      <section className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg">
        <div className="p-6 border-b border-app-border/50 bg-app-surface2/30">
           <h2 className="text-lg font-bold text-primary-text tracking-tight">Revenue Model Breakdown</h2>
        </div>

        <div className="divide-y divide-app-border/50">
          {models.map((model, idx) => (
            <div key={idx} className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-app-surface2/30 transition-colors">
              
              {/* Model Tag */}
              <div className="w-full md:w-1/4 flex flex-col items-start gap-3 shrink-0">
                <h3 className="text-lg font-bold text-primary-text">{model.name}</h3>
                <span className={`px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded border font-mono ${model.color}`}>
                  {model.potential}
                </span>
              </div>
              
              {/* Explanation */}
              <div className="w-full">
                <p className="text-sm text-secondary-text leading-relaxed">
                  {model.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}