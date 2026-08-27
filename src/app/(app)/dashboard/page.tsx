"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { researchService } from '@/services/research.service';

interface RecentJob {
  id: string;
  title: string;
  timeAgo: string;
  score: number;
}

function getTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} day${days !== 1 ? 's' : ''} ago`;

  return date.toLocaleDateString();
}

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [recentJobs, setRecentJobs] = useState<RecentJob[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    strong: 0,
    rising: 0,
    saved: 0,
  });

  const firstName = user?.email
    ? user.email.split('@')[0].replace(/[0-9]/g, '').charAt(0).toUpperCase() + user.email.split('@')[0].replace(/[0-9]/g, '').slice(1)
    : 'Developer';

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const jobs = await researchService.getResearchHistory();
        const completedJobs = jobs.filter(j => j.status === 'COMPLETED');

        const scoresData = await Promise.all(
          completedJobs.map(async (job) => {
            try {
              const score = await researchService.getScore(job.id);
              return { job, score };
            } catch {
              return null;
            }
          })
        );

        const validScores = scoresData.filter((item): item is NonNullable<typeof item> => item !== null);

        // Calculate Telemetry stats
        let strongCount = 0;
        let risingCount = 0;
        const recent: RecentJob[] = [];

        validScores.forEach(({ job, score }) => {
          if (score.overall_score >= 80) strongCount++;
          if (score.trend_score >= 70) risingCount++;

          recent.push({
            id: job.id,
            title: job.query,
            timeAgo: getTimeAgo(job.created_at),
            score: score.overall_score
          });
        });

        setStats({
          total: jobs.length,
          strong: strongCount,
          rising: risingCount,
          saved: validScores.length
        });

        setRecentJobs(recent.slice(0, 4));

      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getScoreTheme = (score: number) => {
    if (score >= 80) return { color: "text-score-strong", badge: "bg-score-strong/10 border-score-strong/30 text-score-strong", label: "Strong" };
    if (score >= 60) return { color: "text-score-promising", badge: "bg-score-promising/10 border-score-promising/30 text-score-promising", label: "Promising" };
    if (score >= 40) return { color: "text-orange-500", badge: "bg-orange-500/10 border-orange-500/30 text-orange-500", label: "Risky" };
    return { color: "text-red-500", badge: "bg-red-500/10 border-red-500/30 text-red-500", label: "Avoid" };
  };

  const handleQuickSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/research/new`);
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-16 animate-pulse">
        <div className="flex flex-col items-center space-y-6">
          <div className="h-10 bg-app-surface w-64 rounded"></div>
          <div className="h-16 bg-app-surface w-full max-w-3xl rounded-xl"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className="h-24 bg-app-surface rounded-xl"></div>)}
        </div>
        <div className="h-[400px] bg-app-surface rounded-xl"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-16">

      {/* SECTION 1: Greeting & Primary Action (Search) */}
      <section className="flex flex-col items-center text-center space-y-6">
        <div className="px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-2 leading-tight">
            Good evening, {firstName}.
          </h1>
          <p className="text-lg text-secondary-text">
            What are you thinking about?
          </p>
        </div>

        <div className="w-full max-w-3xl relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-info/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-100 transition duration-500"></div>

          <div className="relative flex items-center bg-app-surface border border-app-border rounded-xl shadow-2xl p-2 hover:border-accent/60 transition-colors">

            <div className="pl-2 sm:pl-4 pr-2 text-accent shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>

            <div className="flex-grow w-full min-w-0 bg-transparent border-none px-2 py-2 sm:py-3 flex flex-col justify-center">
              <span className="text-primary-text font-bold text-sm sm:text-lg leading-tight">
                Validate your next software idea
              </span>
              <span className="text-muted-text text-xs sm:text-sm hidden sm:block mt-0.5">
                Run an automated telemetry audit on any market niche.
              </span>
            </div>

            <Link
              href="/research/new"
              className="bg-accent hover:bg-accent-hover text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] shrink-0 text-sm sm:text-base whitespace-nowrap flex items-center gap-2"
            >
              Start Research
              <svg className="w-4 h-4 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>

          </div>
        </div>
      </section>

      {/* SECTION 2: Quick Statistics */}
      <section>
        <h2 className="text-sm font-bold text-muted-text uppercase tracking-widest mb-4">Telemetry Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-app-surface border border-app-border rounded-xl p-5 hover:border-app-border/80 transition-colors">
            <div className="text-muted-text text-xs font-mono mb-2">Total Researches</div>
            <div className="text-3xl font-black text-primary-text">{stats.total}</div>
          </div>

          <div className="bg-app-surface border border-app-border rounded-xl p-5 hover:border-green-500/40 transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-500/10 rounded-full blur-xl"></div>
            <div className="text-muted-text text-xs font-mono mb-2">Strong Opportunities</div>
            <div className="text-3xl font-black text-green-500">{stats.strong}</div>
          </div>

          <div className="bg-app-surface border border-app-border rounded-xl p-5 hover:border-info/40 transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-info/10 rounded-full blur-xl"></div>
            <div className="text-muted-text text-xs font-mono mb-2">Rising Niches</div>
            <div className="text-3xl font-black text-info">{stats.rising}</div>
          </div>

          <div className="bg-app-surface border border-app-border rounded-xl p-5 hover:border-accent/40 transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
            <div className="text-muted-text text-xs font-mono mb-2">Completed Ideas</div>
            <div className="text-3xl font-black text-primary-text">{stats.saved}</div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Recent Research */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold text-muted-text uppercase tracking-widest">Recent Intelligence Reports</h2>
          <Link href="/history" className="text-xs text-accent hover:text-primary-text transition-colors font-mono">
            VIEW_ALL →
          </Link>
        </div>

        {recentJobs.length > 0 ? (
          <div className="bg-app-surface border border-app-border rounded-xl overflow-hidden">
            <div className="divide-y divide-app-border/50">
              {recentJobs.map((job) => {
                const theme = getScoreTheme(job.score);

                return (
                  <Link href={`/research/${job.id}/overview`} key={job.id} className="flex items-center justify-between p-4 hover:bg-app-surface2 transition-colors group gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-app-bg border border-app-border flex items-center justify-center text-secondary-text group-hover:text-primary-text group-hover:border-accent/50 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-primary-text text-sm capitalize truncate">{job.title}</div>
                        <div className="text-xs text-secondary-text font-mono mt-0.5 truncate">{job.timeAgo}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right hidden md:block shrink-0">
                        <div className="text-xs text-secondary-text">Opportunity</div>
                      </div>
                      <div className={`flex items-center gap-2 border px-2 sm:px-3 py-1.5 rounded-md ${theme.badge} shrink-0`}>
                        <span className="font-black text-sm">{job.score}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">{theme.label}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="py-12 text-center border border-dashed border-app-border rounded-xl bg-app-surface">
            <p className="text-secondary-text font-mono mb-4">No completed intelligence reports found.</p>
            <Link
              href="/research/new"
              className="inline-block bg-app-surface2 border border-app-border hover:border-accent text-primary-text px-4 py-2 rounded-lg transition-colors text-sm font-bold"
            >
              Start Your First Scan
            </Link>
          </div>
        )}
      </section>

    </div>
  );
}