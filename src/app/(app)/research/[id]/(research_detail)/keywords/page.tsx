export default function KeywordsPage() {
  const keywordClusters = [
    {
      name: "Conversion",
      description: "High-intent queries focused on changing file formats.",
      color: "bg-score-strong",
      textColor: "text-score-strong",
      borderColor: "border-score-strong/30",
      bgColor: "bg-score-strong/10",
      keywords: [
        { term: "HEIC to JPG", trend: "+14%", intent: "High / Transactional", score: 84, status: "Strong" },
        { term: "HEIC to PNG", trend: "+8%", intent: "High / Transactional", score: 78, status: "Promising" },
        { term: "HEIC to PDF", trend: "+22%", intent: "High / Transactional", score: 89, status: "Strong" },
      ]
    },
    {
      name: "Editing",
      description: "Queries focused on manipulating or optimizing the image.",
      color: "bg-info",
      textColor: "text-info",
      borderColor: "border-info/30",
      bgColor: "bg-info/10",
      keywords: [
        { term: "HEIC compressor", trend: "+5%", intent: "Medium / Tool-seeking", score: 65, status: "Risky" },
        { term: "HEIC resize", trend: "-2%", intent: "Medium / Tool-seeking", score: 60, status: "Risky" },
      ]
    },
    {
      name: "Privacy",
      description: "Niche queries addressing security and metadata stripping.",
      color: "bg-accent",
      textColor: "text-accent",
      borderColor: "border-accent/30",
      bgColor: "bg-accent/10",
      keywords: [
        { term: "HEIC metadata", trend: "+30%", intent: "Low / Informational", score: 92, status: "Exceptional" },
        { term: "EXIF remover", trend: "+12%", intent: "Medium / Tool-seeking", score: 75, status: "Promising" },
      ]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-score-exceptional";
    if (score >= 80) return "text-score-strong";
    if (score >= 70) return "text-score-promising";
    if (score >= 60) return "text-score-risky";
    return "text-score-avoid";
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header */}
      <section className="bg-app-surface border border-app-border rounded-2xl p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">Module 03</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-primary-text tracking-tight mb-2">
            Keyword Explorer
          </h1>
          <p className="text-secondary-text text-sm max-w-lg">
            Semantic clustering and opportunity mapping across the entire target search landscape.
          </p>
        </div>

        <div className="relative z-10 flex gap-4 shrink-0">
          <div className="bg-app-bg border border-app-border rounded-lg p-4 text-center">
             <div className="text-2xl font-black text-primary-text">7</div>
             <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Core Terms</div>
          </div>
          <div className="bg-app-bg border border-app-border rounded-lg p-4 text-center">
             <div className="text-2xl font-black text-primary-text">3</div>
             <div className="text-[10px] text-muted-text uppercase tracking-widest mt-1">Clusters</div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Keyword Clusters Explorer */}
      <section className="space-y-10">
        {keywordClusters.map((cluster, idx) => (
          <div key={idx} className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg">
            
            {/* Cluster Header */}
            <div className="p-6 border-b border-app-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-app-surface2/30">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-10 rounded-full ${cluster.color}`}></div>
                <div>
                  <h2 className="text-xl font-bold text-primary-text tracking-tight">{cluster.name}</h2>
                  <p className="text-xs text-secondary-text mt-1">{cluster.description}</p>
                </div>
              </div>
              <div className={`px-3 py-1.5 rounded border ${cluster.borderColor} ${cluster.bgColor} ${cluster.textColor} text-xs font-bold font-mono tracking-widest uppercase`}>
                {cluster.keywords.length} Keywords
              </div>
            </div>

            {/* Keyword Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-app-bg border-b border-app-border text-[10px] uppercase tracking-widest text-muted-text font-mono">
                    <th className="py-4 px-6 font-medium">Keyword</th>
                    <th className="py-4 px-6 font-medium">Trend</th>
                    <th className="py-4 px-6 font-medium">Intent</th>
                    <th className="py-4 px-6 font-medium">Cluster</th>
                    <th className="py-4 px-6 font-medium text-right">Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-app-border/50">
                  {cluster.keywords.map((kw, kwIdx) => {
                    const isPositive = kw.trend.startsWith('+');
                    return (
                      <tr key={kwIdx} className="hover:bg-app-surface2/50 transition-colors group">
                        
                        {/* Keyword */}
                        <td className="py-4 px-6 font-mono text-sm text-primary-text font-medium group-hover:text-accent transition-colors">
                          {kw.term}
                        </td>
                        
                        {/* Trend */}
                        <td className="py-4 px-6">
                          <div className={`flex items-center gap-1.5 text-xs font-bold ${isPositive ? 'text-success' : 'text-danger'}`}>
                            {isPositive ? (
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                            ) : (
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>
                            )}
                            {kw.trend}
                          </div>
                        </td>
                        
                        {/* Intent */}
                        <td className="py-4 px-6">
                          <span className="text-xs text-secondary-text bg-app-bg border border-app-border px-2 py-1 rounded">
                            {kw.intent}
                          </span>
                        </td>
                        
                        {/* Cluster Tag */}
                        <td className="py-4 px-6">
                          <span className="text-xs text-muted-text">
                            {cluster.name}
                          </span>
                        </td>
                        
                        {/* Opportunity Score */}
                        <td className="py-4 px-6 text-right">
                          <div className="flex flex-col items-end">
                            <span className={`text-lg font-black ${getScoreColor(kw.score)}`}>
                              {kw.score}
                            </span>
                            <span className={`text-[9px] uppercase tracking-widest font-bold ${getScoreColor(kw.score)} opacity-80`}>
                              {kw.status}
                            </span>
                          </div>
                        </td>
                        
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}