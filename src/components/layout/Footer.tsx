import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="relative bg-app-bg pt-20 pb-10 border-t border-app-border/50">
      <h2 id="footer-heading" className="sr-only">Footer Documentation and Navigation</h2>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" aria-label="Return to Crack404 Niche Hunter homepage" className="flex items-center gap-3 mb-6 w-fit focus:outline-none focus:ring-2 focus:ring-accent rounded-lg">
              <div className="bg-accent/10 p-1.5 rounded-lg border border-accent/20">
                <Image
                  src="/logo.png"
                  alt="Crack404 Niche Hunter Logo"
                  width={28}
                  height={28}
                  className="object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                />
              </div>
              <span className="font-black text-xl tracking-tight text-primary-text">Niche Hunter</span>
            </Link>
            <p className="text-secondary-text text-sm max-w-md leading-relaxed mb-8">
              The intelligence dashboard for developers and makers. Discover highly profitable, low-competition website opportunities before you spend weeks building them.
            </p>

            <div className="flex gap-4">
              {/* Website */}
              <a
                href="https://www.crack404.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our official website"
                className="w-10 h-10 rounded-full border border-app-border flex items-center justify-center text-muted-text hover:text-accent hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/crack404"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
                className="w-10 h-10 rounded-full border border-app-border flex items-center justify-center text-muted-text hover:text-accent hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61564752971614"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full border border-app-border flex items-center justify-center text-muted-text hover:text-accent hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 w-full">
            <nav aria-label="Platform Links" className="flex flex-col gap-4">
              <h3 className="text-primary-text font-bold tracking-wider text-xs uppercase mb-2">Platform</h3>
              <Link href="/features" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Features</Link>
              <Link href="/pricing" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Pricing</Link>
              <Link href="/how-it-works" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">How it Works</Link>
            </nav>

            <nav aria-label="Research Resources" className="flex flex-col gap-4">
              <h3 className="text-primary-text font-bold tracking-wider text-xs uppercase mb-2">Research</h3>
              <Link href="/opportunities" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Live Opportunities</Link>
              <Link href="/history" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Research Archive</Link>
              <Link href="/about" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">About the Engine</Link>
            </nav>

            <nav aria-label="Legal Links" className="flex flex-col gap-4">
              <h3 className="text-primary-text font-bold tracking-wider text-xs uppercase mb-2">Legal</h3>
              <Link href="/privacy" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Privacy Policy</Link>
              <Link href="/terms" className="text-secondary-text hover:text-accent hover:translate-x-1 transition-all text-sm focus:outline-none focus:text-accent">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-app-border/50 text-center md:text-left text-muted-text text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Crack404 Niche Hunter. All rights reserved.</p>
          <div className="flex items-center gap-2" role="status" aria-label="System operational status">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}