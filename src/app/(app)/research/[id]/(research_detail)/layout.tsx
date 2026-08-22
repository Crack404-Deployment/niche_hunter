"use client";

import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { researchService, ResearchJob } from '@/services/research.service';

const formatStatus = (status: string) => {
  return status.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

const navTabs = [
  { name: 'Overview', path: 'overview' },
  { name: 'Trends', path: 'trends' },
  { name: 'SERP', path: 'serp' },
  { name: 'Competitors', path: 'competitors' },
  { name: 'Audits', path: 'audit' },
];

export default function ResearchDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const id = params.id as string;
  
  const [job, setJob] = useState<ResearchJob | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let intervalId: NodeJS.Timeout;

    const pollStatus = async () => {
      try {
        const data = await researchService.getResearchStatus(id);
        setJob(data);

        if (data.status === 'COMPLETED' || data.status === 'FAILED') {
          clearInterval(intervalId);
        }
      } catch (err: unknown) {
        clearInterval(intervalId);
        setError(err instanceof Error ? err.message : 'Lost connection to the server.');
      }
    };

    pollStatus();
    intervalId = setInterval(pollStatus, 3000);
    return () => clearInterval(intervalId);
  }, [id]);

  if (error || job?.status === 'FAILED') {
    return (
      <div className="w-full flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-lg font-bold text-red-400 mb-2">Research Failed</h2>
          <p className="text-sm text-secondary-text">
            {error || 'The background worker encountered a critical error during data extraction.'}
          </p>
        </div>
      </div>
    );
  }

  if (!job || job.status !== 'COMPLETED') {
    return (
      <div className="w-full flex-grow flex flex-col items-center justify-center p-6 space-y-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-app-border rounded-full"></div>
          <div className="absolute inset-0 border-4 border-accent rounded-full border-t-transparent animate-spin"></div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-primary-text">Compiling Intelligence...</h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-app-surface2 border border-app-border rounded-full">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-mono text-accent">
              {job ? formatStatus(job.status) : 'Connecting to workers'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Sub-Navigation Tabs */}
      <div className="border-b border-app-border bg-app-surface/50 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-2 overflow-x-auto">
          {navTabs.map((tab) => {
            const href = `/research/${id}/${tab.path}`;
            const isActive = pathname.endsWith(`/${tab.path}`);
            return (
              <Link
                key={tab.path}
                href={href}
                className={`py-3.5 px-4 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-secondary-text hover:text-primary-text hover:border-app-border'
                }`}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex-grow p-6">
        {children}
      </div>
    </div>
  );
}