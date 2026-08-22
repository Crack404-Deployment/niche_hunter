"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();
  
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <nav 
      aria-label="Main Navigation" 
      className="fixed top-0 z-50 w-full border-b border-app-border/50 bg-app-bg/60 backdrop-blur-xl supports-[backdrop-filter]:bg-app-bg/40"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Link 
            href={isAuthenticated ? "/dashboard" : "/"} 
            className="flex items-center gap-3 group" 
            onClick={closeMenu}
            aria-label="Crack404 Niche Hunter Home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent/40 blur-md rounded-full group-hover:bg-accent/60 transition-all opacity-0 group-hover:opacity-100" aria-hidden="true"></div>
              <Image
                src="/logo.png"
                alt="Crack404 Niche Hunter Logo"
                width={28}
                height={28}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-primary-text group-hover:text-white transition-colors">
              Niche Hunter
            </span>
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-secondary-text">
          {isAuthenticated ? (
            <>
              <Link 
                href="/dashboard" 
                aria-current={isActive('/dashboard') ? 'page' : undefined}
                className={`transition-all ${isActive('/dashboard') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-primary-text'}`}
              >
                Dashboard
              </Link>
              <Link 
                href="/opportunities" 
                aria-current={isActive('/opportunities') ? 'page' : undefined}
                className={`transition-all flex items-center gap-1.5 ${isActive('/opportunities') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-accent'}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-accent ${isActive('/opportunities') ? '' : 'animate-pulse'}`} aria-hidden="true"></span>
                Opportunities
              </Link>
              <Link 
                href="/history" 
                aria-current={isActive('/history') ? 'page' : undefined}
                className={`transition-all ${isActive('/history') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-primary-text'}`}
              >
                History
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="/features" 
                aria-current={isActive('/features') ? 'page' : undefined}
                className={`transition-all ${isActive('/features') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-primary-text'}`}
              >
                Features
              </Link>
              <Link 
                href="/how-it-works" 
                aria-current={isActive('/how-it-works') ? 'page' : undefined}
                className={`transition-all ${isActive('/how-it-works') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-primary-text'}`}
              >
                How it Works
              </Link>
              <Link 
                href="/about" 
                aria-current={isActive('/about') ? 'page' : undefined}
                className={`transition-all ${isActive('/about') ? 'text-accent font-bold drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : 'hover:text-primary-text'}`}
              >
                About
              </Link>
            </>
          )}
        </div>

        {/* DESKTOP AUTH & CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <button
                onClick={logout}
                aria-label="Securely log out of your account"
                className="text-sm font-medium text-secondary-text hover:text-danger hover:text-red-400 transition-colors focus:outline-none"
              >
                Log out
              </button>
              <Link 
                href="/research/new" 
                aria-label="Start a new intelligence research scan"
                className="relative group overflow-hidden rounded-md p-[1px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-info opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true"></span>
                <div className="relative bg-app-bg px-4 py-2 rounded-md flex items-center gap-2 transition-all group-hover:bg-opacity-0 group-hover:text-white text-sm font-medium text-primary-text">
                  <span>Start Research</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                aria-label="Log into your account"
                className="text-sm font-medium text-secondary-text hover:text-primary-text transition-colors"
              >
                Log in
              </Link>
              <Link 
                href="/login" 
                aria-label="Create a new account and get started"
                className="relative group overflow-hidden rounded-md p-[1px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-info opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden="true"></span>
                <div className="relative bg-app-bg px-4 py-2 rounded-md flex items-center gap-2 transition-all group-hover:bg-opacity-0 group-hover:text-white text-sm font-medium text-primary-text">
                  <span>Get Started</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="text-secondary-text hover:text-primary-text focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-16 left-0 w-full bg-app-surface border-b border-app-border shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          
          {isAuthenticated ? (
            <>
              <div className="text-[10px] text-accent uppercase tracking-widest font-mono font-bold mb-1" aria-hidden="true">Intelligence Dashboard</div>
              <Link 
                href="/dashboard" 
                onClick={closeMenu} 
                className={`text-sm block ${isActive('/dashboard') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                Dashboard
              </Link>
              <Link 
                href="/opportunities" 
                onClick={closeMenu} 
                className={`text-sm flex items-center gap-2 ${isActive('/opportunities') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true"></span>
                Opportunities
              </Link>
              <Link 
                href="/history" 
                onClick={closeMenu} 
                className={`text-sm block ${isActive('/history') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                Research History
              </Link>
              <div className="w-full h-px bg-app-border my-2" aria-hidden="true"></div>
              <div className="flex flex-col gap-3 pb-4">
                <button
                  onClick={() => { closeMenu(); logout(); }}
                  className="text-red-400 text-sm font-medium text-center py-2 border border-app-border rounded-md hover:bg-app-surface2 transition-colors focus:outline-none"
                >
                  Log out
                </button>
                <Link 
                  href="/research/new" 
                  onClick={closeMenu} 
                  className="bg-gradient-to-r from-accent to-info text-white text-sm font-bold text-center py-2.5 rounded-md hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
                >
                  Start Research
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-[10px] text-muted-text uppercase tracking-widest font-mono font-bold mb-1" aria-hidden="true">Platform</div>
              <Link 
                href="/features" 
                onClick={closeMenu} 
                className={`text-sm block ${isActive('/features') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                Features
              </Link>
              <Link 
                href="/how-it-works" 
                onClick={closeMenu} 
                className={`text-sm block ${isActive('/how-it-works') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                How it Works
              </Link>
              <Link 
                href="/about" 
                onClick={closeMenu} 
                className={`text-sm block ${isActive('/about') ? 'text-accent font-bold' : 'text-secondary-text hover:text-primary-text'}`}
              >
                About
              </Link>
              <div className="w-full h-px bg-app-border my-2" aria-hidden="true"></div>
              <div className="flex flex-col gap-3 pb-4">
                <Link 
                  href="/login" 
                  onClick={closeMenu} 
                  className="text-primary-text text-sm font-medium text-center py-2 border border-app-border rounded-md hover:bg-app-surface2 transition-colors"
                >
                  Log in
                </Link>
                <Link 
                  href="/login" 
                  onClick={closeMenu} 
                  className="bg-gradient-to-r from-accent to-info text-white text-sm font-bold text-center py-2.5 rounded-md hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all"
                >
                  Get Started
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}