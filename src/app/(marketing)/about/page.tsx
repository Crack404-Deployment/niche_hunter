import type { Metadata } from 'next';
import Link from 'next/link';

// SEO: Server-Side Metadata for Google Search & OpenGraph
export const metadata: Metadata = {
  title: 'About Us | Crack404 Niche Hunter',
  description: 'Learn about the engineering team behind Crack404 Niche Hunter. Built by developers, for developers, to replace SaaS intuition with hard telemetry and SERP data.',
  keywords: [
    'about Crack404', 
    'Niche Hunter team', 
    'software validation tool', 
    'SaaS intelligence platform', 
    'developer tools'
  ],
  openGraph: {
    title: 'About the Niche Hunter Engine | Crack404',
    description: 'Crack404 Niche Hunter replaces gut feelings with hard telemetry. Meet the engineering team behind the platform.',
    url: 'https://nichehunter.crack404.com/about',
    siteName: 'Crack404 Niche Hunter',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Crack404 Niche Hunter',
    description: 'Crack404 Niche Hunter is a data-driven intelligence engine designed to help developers validate software ideas.',
  }
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen pt-20 pb-32 relative overflow-hidden bg-app-bg">
      
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none -z-20 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true"></div>

      <div className="max-w-4xl mx-auto px-6 space-y-20">
        
        {/* SECTION 1: Hero */}
        <section className="text-center space-y-6 pt-5" aria-labelledby="about-hero-heading">
          <h1 id="about-hero-heading" className="text-4xl md:text-6xl font-black text-primary-text tracking-tight leading-tight">
            Stop Guessing.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-text via-accent to-primary-text">Start Building.</span>
          </h1>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Crack404 Niche Hunter is a data-driven intelligence engine designed to help developers and entrepreneurs validate software ideas before writing a single line of code.
          </p>
        </section>

        {/* SECTION 2: The Mission */}
        <section className="bg-app-surface border border-app-border rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden" aria-labelledby="mission-heading">
          <div className="absolute top-0 right-0 w-64 h-64 bg-score-strong/5 rounded-full blur-[60px] pointer-events-none" aria-hidden="true"></div>
          
          <h2 id="mission-heading" className="text-3xl font-bold text-primary-text mb-6 flex items-center gap-3">
            <svg className="w-8 h-8 text-score-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            The Mission
          </h2>
          <div className="space-y-5 text-secondary-text text-lg leading-relaxed font-light">
            <p>
              Building software is expensive. But building the <em>wrong</em> software is fatal. Every day, thousands of talented developers spend months building applications that nobody wants, entering markets that are already saturated, or fighting uphill SEO battles against entrenched giants.
            </p>
            <p>
              We believe that engineering talent should be spent on solving real problems with clear demand. Crack404 Niche Hunter replaces gut feelings with hard telemetry: API-driven search volume velocity, SERP vulnerability scoring, and automated competitor technical debt analysis.
            </p>
          </div>
        </section>

        {/* SECTION 3: The Team / Engineering */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Team and Engineering Background">
          <div className="bg-app-surface border border-app-border rounded-3xl p-8 relative overflow-hidden group hover:border-accent/30 transition-colors shadow-lg">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-info/10 rounded-full blur-[50px] pointer-events-none" aria-hidden="true"></div>
            
            <div className="w-12 h-12 rounded-xl bg-app-bg border border-app-border flex items-center justify-center text-info mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-primary-text mb-3">Engineered by Crack404</h3>
            <p className="text-sm text-secondary-text leading-relaxed">
              Niche Hunter is designed and operated by the IT firm <strong>Crack404</strong>. Born out of the real-world development trenches, we built the exact tool we needed to validate our own product pipelines and client strategies.
            </p>
          </div>

          <div className="bg-app-surface border border-app-border rounded-3xl p-8 relative overflow-hidden group hover:border-accent/30 transition-colors shadow-lg">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] pointer-events-none" aria-hidden="true"></div>
            
            <div className="w-12 h-12 rounded-xl bg-app-bg border border-app-border flex items-center justify-center text-accent mb-6 shadow-inner group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            
            <h3 className="text-xl font-bold text-primary-text mb-3">Led by Experience</h3>
            <p className="text-sm text-secondary-text leading-relaxed">
              Spearheaded by full-stack software engineer Syed Shahriar Rofi. With deep expertise across Next.js, React, Django REST Framework, Python, PHP, and Flutter architectures, our engineering background ensures that the "Buildability" and "Technical Complexity" insights provided by the platform are grounded in actual development reality.
            </p>
          </div>
        </section>

        {/* SECTION 4: System Architecture Grid */}
        <section className="bg-app-surface/50 border border-app-border rounded-3xl p-10 shadow-lg" aria-label="Core Intelligence Vectors">
           <h3 className="text-sm font-bold text-muted-text uppercase tracking-widest mb-8 font-mono text-center">Core Intelligence Vectors</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
             <div className="p-6 bg-app-bg border border-app-border/50 rounded-2xl hover:border-accent/40 transition-colors">
               <div className="text-3xl font-black text-primary-text mb-2 font-mono opacity-80">01</div>
               <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold">Trend Velocity</div>
             </div>
             <div className="p-6 bg-app-bg border border-app-border/50 rounded-2xl hover:border-info/40 transition-colors">
               <div className="text-3xl font-black text-primary-text mb-2 font-mono opacity-80">02</div>
               <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold">Semantic Search</div>
             </div>
             <div className="p-6 bg-app-bg border border-app-border/50 rounded-2xl hover:border-warning/40 transition-colors">
               <div className="text-3xl font-black text-primary-text mb-2 font-mono opacity-80">03</div>
               <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold">SERP Audits</div>
             </div>
             <div className="p-6 bg-app-bg border border-app-border/50 rounded-2xl hover:border-success/40 transition-colors">
               <div className="text-3xl font-black text-primary-text mb-2 font-mono opacity-80">04</div>
               <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold">Monetization</div>
             </div>
           </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="text-center pt-12 border-t border-app-border/50" aria-label="Call to Action">
          <h2 className="text-3xl font-bold text-primary-text mb-6">Ready to see the data in action?</h2>
          <Link 
            href="/login" 
            aria-label="Access the Niche Hunter engine"
            className="inline-flex items-center gap-3 bg-primary-text text-app-bg px-10 py-5 rounded-xl font-bold text-lg hover:bg-accent transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:-translate-y-1"
          >
            Access the Engine
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </Link>
          <div className="mt-6 text-xs font-mono text-muted-text tracking-widest uppercase">
            Validate your next startup today.
          </div>
        </section>

      </div>
    </main>
  );
}