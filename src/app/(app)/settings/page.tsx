export default function SettingsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-8 space-y-8">
      
      {/* SECTION 1: Header */}
      <section className="relative pb-6 border-b border-app-border/50">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-accent"></span>
          <span className="text-secondary-text text-xs font-bold uppercase tracking-widest font-mono">System Configuration</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-primary-text tracking-tight">
          Settings
        </h1>
        <p className="text-secondary-text mt-3 text-sm">
          Manage your account security and default parameters for the global discovery engine.
        </p>
      </section>

      {/* SECTION 2: Configuration Modules */}
      <section className="space-y-6">
        
        {/* Module: Profile */}
        <div className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[60px] pointer-events-none -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
          
          <div className="p-6 md:p-8 border-b border-app-border/50 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-app-bg border border-app-border flex items-center justify-center text-accent">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-text">Profile</h2>
              <p className="text-xs text-secondary-text font-mono mt-1">Personal identification and contact details</p>
            </div>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="John Doe"
                  className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="john@example.com"
                  className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all opacity-70 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-app-bg border border-app-border text-primary-text hover:text-accent hover:border-accent/50 transition-colors px-6 py-2 rounded-lg text-sm font-bold">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* Module: Security */}
        <div className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg relative group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-danger/5 rounded-full blur-[60px] pointer-events-none -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
          
          <div className="p-6 md:p-8 border-b border-app-border/50 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-app-bg border border-app-border flex items-center justify-center text-danger">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-text">Security</h2>
              <p className="text-xs text-secondary-text font-mono mt-1">Authentication credentials and access control</p>
            </div>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">Current Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-danger focus:ring-1 focus:ring-danger/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">New Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-danger focus:ring-1 focus:ring-danger/50 transition-all"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-danger/10 border border-danger/30 text-danger hover:bg-danger/20 transition-colors px-6 py-2 rounded-lg text-sm font-bold">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Module: Research Preferences */}
        <div className="bg-app-surface border border-app-border rounded-2xl overflow-hidden shadow-lg relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-info/5 rounded-full blur-[60px] pointer-events-none -z-10 transition-opacity opacity-50 group-hover:opacity-100"></div>
          
          <div className="p-6 md:p-8 border-b border-app-border/50 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-app-bg border border-app-border flex items-center justify-center text-info">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-text">Research Preferences</h2>
              <p className="text-xs text-secondary-text font-mono mt-1">Default targeting parameters for new reports</p>
            </div>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">Default Country</label>
                <select className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-info focus:ring-1 focus:ring-info/50 transition-all appearance-none cursor-pointer">
                  <option value="US">🇺🇸 United States</option>
                  <option value="UK">🇬🇧 United Kingdom</option>
                  <option value="CA">🇨🇦 Canada</option>
                  <option value="AU">🇦🇺 Australia</option>
                  <option value="GLOBAL">🌐 Global (Aggregated)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-secondary-text uppercase tracking-widest font-mono">Default Language</label>
                <select className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-sm text-primary-text focus:outline-none focus:border-info focus:ring-1 focus:ring-info/50 transition-all appearance-none cursor-pointer">
                  <option value="EN">English (EN)</option>
                  <option value="ES">Spanish (ES)</option>
                  <option value="FR">French (FR)</option>
                  <option value="DE">German (DE)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 p-4 bg-app-bg/50 border border-app-border/50 rounded-lg">
              <svg className="w-5 h-5 text-muted-text shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-xs text-secondary-text font-mono">These settings will be automatically applied to all new research initializations. You can override them per-report.</p>
            </div>
            <div className="flex justify-end pt-2">
              <button className="bg-app-bg border border-app-border text-primary-text hover:text-info hover:border-info/50 transition-colors px-6 py-2 rounded-lg text-sm font-bold">
                Save Preferences
              </button>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}