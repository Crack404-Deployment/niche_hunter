import { Metadata } from 'next';
import Link from 'next/link';

// SEO: Server-Side Metadata for Google Search & OpenGraph
export const metadata: Metadata = {
  title: 'Crack404 Niche Hunter | Validate SaaS Ideas with Data',
  description: 'Stop guessing what to build. Niche Hunter provides deep SERP analysis, keyword demand, 52-week trends, and competitor Lighthouse audits to validate software ideas.',
  keywords: ['SaaS validation', 'niche research tool', 'SERP analysis', 'competitor intelligence', 'Lighthouse audit API', 'SEO difficulty checker', 'software idea generator'],
  openGraph: {
    title: 'Crack404 Niche Hunter | Data-Driven Idea Validation',
    description: 'Discover highly profitable website opportunities before you spend weeks building them.',
    url: 'https://nichehunter.crack404.com',
    siteName: 'Crack404 Niche Hunter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crack404 Niche Hunter | Validate SaaS Ideas',
    description: 'Data → Intelligence → Decision. Validate your next software project with real SERP data and competitor audits.',
  }
};

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen relative overflow-hidden bg-app-bg">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/15 via-app-bg to-app-bg -z-10" aria-hidden="true"></div>
      <div className="absolute top-40 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10" aria-hidden="true"></div>
      <div className="absolute top-80 -right-64 w-96 h-96 bg-info/10 rounded-full blur-[128px] -z-10" aria-hidden="true"></div>

      {/* SECTION 1: Hero */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-26 pb-24 flex flex-col items-center text-center relative z-10" aria-labelledby="hero-heading">
        
        
        <h1 id="hero-heading" className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-secondary-text tracking-tighter mb-6 leading-[1.1]">
          Find What to <br className="hidden md:block"/> Build Next.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-text mb-12 max-w-3xl font-light">
          Discover highly profitable software niches <span className="text-primary-text font-medium">before</span> you spend weeks building them. <br className="hidden md:block"/>Data → Intelligence → Decision.
        </p>
        
        <Link 
          href="/research/new" 
          aria-label="Start analyzing a niche"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-accent font-sans rounded-xl hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:-translate-y-1"
        >
          Analyze a Niche
          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </Link>

        {/* Animated Research Example Mockup */}
        <div className="mt-24 w-full max-w-3xl relative group" aria-hidden="true">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-info rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-app-surface/80 backdrop-blur-xl border border-app-border rounded-xl shadow-2xl overflow-hidden text-left font-mono text-sm">
            <div className="flex items-center justify-between px-4 py-3 border-b border-app-border bg-app-surface2/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-danger/80"></div>
                <div className="w-3 h-3 rounded-full bg-warning/80"></div>
                <div className="w-3 h-3 rounded-full bg-success/80"></div>
              </div>
              <div className="text-muted-text text-xs tracking-wider">TARGET: PHOTO_SCANNER_APP</div>
              <div className="w-4 h-4"></div> 
            </div>
            <div className="p-8 space-y-5">
              <div className="text-accent animate-pulse font-bold flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Extracting SERP telemetry...
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-secondary-text group-hover:text-primary-text transition-colors delay-100">
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Analyzing search intent
                  </div>
                  <div className="flex items-center gap-3 text-secondary-text group-hover:text-primary-text transition-colors delay-200">
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Mapping 52-week trends
                  </div>
                  <div className="flex items-center gap-3 text-secondary-text group-hover:text-primary-text transition-colors delay-300">
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Scanning top 10 competitors
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-secondary-text group-hover:text-primary-text transition-colors delay-400">
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Auditing technical debt
                  </div>
                  <div className="flex items-center gap-3 text-secondary-text group-hover:text-primary-text transition-colors delay-500">
                    <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Calculating buildability
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-app-border/50 flex justify-between items-end relative overflow-hidden rounded-b-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-score-strong/10 to-transparent -z-10"></div>
                <div className="p-4">
                  <div className="text-5xl font-black text-score-strong drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">84<span className="text-2xl text-muted-text">/100</span></div>
                  <div className="text-score-strong text-xs tracking-widest mt-2 font-sans font-bold">STRONG OPPORTUNITY</div>
                </div>
                <div className="p-4 text-right">
                   <div className="text-secondary-text text-xs mb-1">Intent: High (Transactional)</div>
                   <div className="text-secondary-text text-xs mb-1">SERP: Highly Vulnerable</div>
                   <div className="text-success text-xs font-bold">+18% MoM Trending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Problem (Split Layout) */}
      <section className="w-full relative py-32 border-t border-app-border bg-app-surface/30" aria-labelledby="problem-heading">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="problem-heading" className="text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
              Most developers don't have an idea problem.
            </h2>
            <div className="w-20 h-1 bg-accent mb-6 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
            <h3 className="text-2xl text-muted-text mb-6">
              They have a <span className="text-danger font-bold">validation</span> problem.
            </h3>
            <p className="text-lg text-secondary-text">
              Don't build first and discover demand later. Stop wasting months on products nobody is searching for. Let real-world API data, keyword analysis, and deep competitor audits drive your next deployment.
            </p>
          </div>
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-4 bg-danger/10 rounded-xl blur-xl"></div>
            <div className="bg-app-surface2 border border-app-border p-8 rounded-xl relative shadow-2xl">
              <div className="flex items-center gap-4 mb-6 opacity-50 grayscale">
                <div className="w-12 h-12 bg-app-surface rounded-lg border border-app-border flex items-center justify-center text-secondary-text">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                </div>
                <div>
                  <div className="text-primary-text font-bold">Unvalidated Idea</div>
                  <div className="text-xs text-muted-text">Built purely on assumptions</div>
                </div>
              </div>
              <div className="h-px w-full bg-app-border relative mb-6">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-app-surface2 px-2 text-muted-text text-xs">VS</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg border border-accent flex items-center justify-center text-accent shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <div className="text-primary-text font-bold text-lg">Validated Target</div>
                  <div className="text-xs text-success font-mono">Verified Demand • Weak SERP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Intelligence Pipeline (New Section based on API Data) */}
      <section className="w-full relative py-32 border-t border-app-border bg-app-bg" aria-labelledby="pipeline-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 id="pipeline-heading" className="text-4xl font-black text-primary-text mb-4">Deep Data Extraction.</h2>
            <p className="text-xl text-secondary-text max-w-2xl mx-auto">We don't just check search volume. Our pipeline executes a comprehensive technical analysis of the target market.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-app-border -z-10"></div>

            {/* Pipeline Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-app-surface border border-app-border rounded-2xl flex items-center justify-center mb-6 group-hover:border-info group-hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all">
                <svg className="w-10 h-10 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="font-bold text-primary-text mb-2">Semantic Intent</h3>
              <p className="text-sm text-secondary-text">Classifying primary keywords by intent (Transactional, Informational) to gauge real conversion potential.</p>
            </div>

            {/* Pipeline Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-app-surface border border-app-border rounded-2xl flex items-center justify-center mb-6 group-hover:border-warning group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all">
                <svg className="w-10 h-10 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              </div>
              <h3 className="font-bold text-primary-text mb-2">52-Week Trajectory</h3>
              <p className="text-sm text-secondary-text">Extracting historical momentum to ensure you are building for a growing market, not a dying fad.</p>
            </div>

            {/* Pipeline Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-app-surface border border-app-border rounded-2xl flex items-center justify-center mb-6 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="font-bold text-primary-text mb-2">SERP Top 10 Scan</h3>
              <p className="text-sm text-secondary-text">Deconstructing the first page of Google to identify organic vulnerability and weak domain ratings.</p>
            </div>

            {/* Pipeline Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-app-surface border border-app-border rounded-2xl flex items-center justify-center mb-6 group-hover:border-success group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all">
                <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="font-bold text-primary-text mb-2">Lighthouse Auditing</h3>
              <p className="text-sm text-secondary-text">Running automated technical audits on competitors to expose slow load times and poor UX.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Actionable Telemetry (Data Showcase) */}
      <section className="w-full relative py-32 border-t border-app-border bg-app-surface/50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-app-bg border border-app-border rounded-2xl p-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-score-strong/5 rounded-full blur-[80px] pointer-events-none"></div>
              <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest mb-6 font-mono">Live Target: Photo Scanner App</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-secondary-text font-medium">Competitor SEO Average</span>
                    <span className="text-xl font-black text-score-strong">100/100</span>
                  </div>
                  <div className="w-full bg-app-surface h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-score-strong w-[100%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-secondary-text font-medium">Competitor Performance Average</span>
                    <span className="text-xl font-black text-warning">61/100</span>
                  </div>
                  <div className="w-full bg-app-surface h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-warning w-[61%]"></div>
                  </div>
                  <p className="text-xs text-muted-text mt-2 font-mono"><span className="text-warning">Alert:</span> Multiple ranking pages suffer from load times &gt; 6,000ms.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-primary-text mb-6 leading-tight">
              Spot the technical weakness. <br/><span className="text-accent">Exploit the gap.</span>
            </h2>
            <p className="text-lg text-secondary-text mb-8">
              We aggregate Lighthouse performance data and domain authority scores across the SERP. If the top-ranking applications have terrible mobile UX or slow server-side processing, you instantly know how to build a better alternative.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-primary-text">Identify slow, legacy React or WordPress competitors.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="text-primary-text">Find missing features (e.g., bulk conversion, APIs).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: Intelligence Cards (Bento Box Design) */}
      <section className="w-full py-32 border-t border-app-border relative" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 id="features-heading" className="text-4xl font-black text-primary-text mb-4">Tactical Intelligence.</h2>
            <p className="text-xl text-secondary-text max-w-2xl">Everything you need to know before committing a single line of code to a new repository.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
            {/* Large Feature 1 */}
            <div className="md:col-span-2 bg-gradient-to-br from-app-surface2 to-app-surface border border-app-border hover:border-accent/50 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors"></div>
              <h3 className="text-2xl font-bold text-primary-text mb-2 relative z-10">Deep SERP Analysis</h3>
              <p className="text-secondary-text relative z-10">We analyze the top 10 Google results, extract SEO benchmarks, and spot weak organic competitors you can outrank easily.</p>
            </div>
            
            {/* Small Feature */}
            <div className="bg-app-surface border border-app-border hover:border-info/50 rounded-2xl p-8 flex flex-col justify-end relative group transition-colors">
               <h3 className="text-xl font-bold text-primary-text mb-2">Trend Velocity</h3>
               <p className="text-sm text-secondary-text">Map 52-week historical data to spot exploding niches before they peak.</p>
            </div>

            {/* Small Feature */}
            <div className="bg-app-surface border border-app-border hover:border-success/50 rounded-2xl p-8 flex flex-col justify-end group transition-colors">
               <h3 className="text-xl font-bold text-primary-text mb-2">Monetization</h3>
               <p className="text-sm text-secondary-text">Identify exact revenue paths (SaaS, Freemium, Ads) for your tool.</p>
            </div>

            {/* Large Feature 2 */}
            <div className="md:col-span-2 bg-app-surface border border-app-border hover:border-warning/50 rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden group transition-colors">
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-all text-warning">
                 <svg className="w-24 h-24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-text mb-2 relative z-10">Technical Audits & Buildability</h3>
              <p className="text-secondary-text relative z-10">Assess the technical complexity of ranking pages via Lighthouse to ensure you aren't biting off more than you can chew.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="w-full relative py-32 border-t border-app-border overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-accent/5" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none -z-10" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 id="cta-heading" className="text-5xl md:text-6xl font-black text-primary-text mb-6 tracking-tight">Stop guessing. <br/>Start hunting.</h2>
          <p className="text-xl text-secondary-text mb-12 max-w-2xl mx-auto">Join the intelligence platform giving developers the unfair advantage in discovering their next software idea.</p>
          <Link 
            href="/login" 
            aria-label="Create a free account"
            className="inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-accent rounded-xl hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:-translate-y-1 text-lg"
          >
            Start Research for Free
          </Link>
        </div>
      </section>

    </main>
  );
}