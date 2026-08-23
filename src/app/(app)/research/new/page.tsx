"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { researchService } from '@/services/research.service';

export default function NewResearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [country, setCountry] = useState('US');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);

      // Send the request to Django
      const result = await researchService.startResearch({
        query: query.trim(),
        country,
        language
      });

      // Redirect to the overview page which will handle the loading/polling state
      router.push(`/research/${result.id}/overview`);

    } catch (err: unknown) {
      // Catch the 429 Too Many Requests (if they hit the 3 concurrent job limit) or any 400 error
      setError(err instanceof Error ? err.message : 'Failed to start research. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-text mb-2">New Intelligence Report</h1>
        <p className="text-secondary-text">Enter a software niche, product idea, or competitor to begin data extraction.</p>
      </div>

      <div className="bg-app-surface border border-app-border rounded-xl p-6 md:p-8 shadow-xl relative overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent to-info"></div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Query Input */}
          <div className="space-y-2">
            <label htmlFor="query" className="block text-sm font-semibold text-primary-text">
              Target Keyword or Niche
            </label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., ai sales coaching platform"
              className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-primary-text placeholder:text-muted-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-lg"
              required
              disabled={loading}
              autoFocus
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country Dropdown */}
            <div className="space-y-2">
              <label htmlFor="country" className="block text-sm font-semibold text-primary-text">
                Target Country
              </label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                disabled={loading}
              >
                <optgroup label="Popular Global Markets">
                  <option value="US">United States (US)</option>
                  <option value="GB">United Kingdom (UK)</option>
                  <option value="CA">Canada (CA)</option>
                  <option value="AU">Australia (AU)</option>
                  <option value="IN">India (IN)</option>
                  <option value="DE">Germany (DE)</option>
                  <option value="FR">France (FR)</option>
                  <option value="JP">Japan (JP)</option>
                  <option value="BR">Brazil (BR)</option>
                  <option value="SG">Singapore (SG)</option>
                </optgroup>

                <optgroup label="Americas">
                  <option value="AR">Argentina (AR)</option>
                  <option value="CL">Chile (CL)</option>
                  <option value="CO">Colombia (CO)</option>
                  <option value="MX">Mexico (MX)</option>
                  <option value="PE">Peru (PE)</option>
                </optgroup>

                <optgroup label="Europe">
                  <option value="AT">Austria (AT)</option>
                  <option value="BE">Belgium (BE)</option>
                  <option value="CH">Switzerland (CH)</option>
                  <option value="DK">Denmark (DK)</option>
                  <option value="ES">Spain (ES)</option>
                  <option value="FI">Finland (FI)</option>
                  <option value="IE">Ireland (IE)</option>
                  <option value="IT">Italy (IT)</option>
                  <option value="NL">Netherlands (NL)</option>
                  <option value="NO">Norway (NO)</option>
                  <option value="PL">Poland (PL)</option>
                  <option value="PT">Portugal (PT)</option>
                  <option value="SE">Sweden (SE)</option>
                  <option value="TR">Turkey (TR)</option>
                  <option value="UA">Ukraine (UA)</option>
                </optgroup>

                <optgroup label="Asia & Oceania">
                  <option value="BD">Bangladesh (BD)</option>
                  <option value="CN">China (CN)</option>
                  <option value="HK">Hong Kong (HK)</option>
                  <option value="ID">Indonesia (ID)</option>
                  <option value="IL">Israel (IL)</option>
                  <option value="KR">South Korea (KR)</option>
                  <option value="MY">Malaysia (MY)</option>
                  <option value="NZ">New Zealand (NZ)</option>
                  <option value="PH">Philippines (PH)</option>
                  <option value="PK">Pakistan (PK)</option>
                  <option value="SA">Saudi Arabia (SA)</option>
                  <option value="TH">Thailand (TH)</option>
                  <option value="TW">Taiwan (TW)</option>
                  <option value="AE">United Arab Emirates (AE)</option>
                  <option value="VN">Vietnam (VN)</option>
                </optgroup>

                <optgroup label="Africa">
                  <option value="EG">Egypt (EG)</option>
                  <option value="KE">Kenya (KE)</option>
                  <option value="NG">Nigeria (NG)</option>
                  <option value="ZA">South Africa (ZA)</option>
                </optgroup>
              </select>
            </div>

            {/* Language Dropdown */}
            <div className="space-y-2">
              <label htmlFor="language" className="block text-sm font-semibold text-primary-text">
                Language
              </label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                disabled={loading}
              >
                <optgroup label="Major Global Languages">
                  <option value="en">English (en)</option>
                  <option value="es">Spanish (es)</option>
                  <option value="fr">French (fr)</option>
                  <option value="de">German (de)</option>
                  <option value="zh">Chinese (zh)</option>
                  <option value="ja">Japanese (ja)</option>
                  <option value="pt">Portuguese (pt)</option>
                  <option value="ar">Arabic (ar)</option>
                  <option value="hi">Hindi (hi)</option>
                  <option value="bn">Bengali (bn)</option>
                </optgroup>

                <optgroup label="European Languages">
                  <option value="it">Italian (it)</option>
                  <option value="nl">Dutch (nl)</option>
                  <option value="pl">Polish (pl)</option>
                  <option value="ru">Russian (ru)</option>
                  <option value="sv">Swedish (sv)</option>
                  <option value="da">Danish (da)</option>
                  <option value="fi">Finnish (fi)</option>
                  <option value="no">Norwegian (no)</option>
                  <option value="tr">Turkish (tr)</option>
                  <option value="uk">Ukrainian (uk)</option>
                  <option value="el">Greek (el)</option>
                  <option value="cs">Czech (cs)</option>
                  <option value="ro">Romanian (ro)</option>
                  <option value="hu">Hungarian (hu)</option>
                </optgroup>

                <optgroup label="Asian & Middle Eastern Languages">
                  <option value="ko">Korean (ko)</option>
                  <option value="vi">Vietnamese (vi)</option>
                  <option value="id">Indonesian (id)</option>
                  <option value="ms">Malay (ms)</option>
                  <option value="th">Thai (th)</option>
                  <option value="he">Hebrew (he)</option>
                  <option value="ur">Urdu (ur)</option>
                  <option value="fa">Persian (fa)</option>
                </optgroup>

                <optgroup label="African Languages">
                  <option value="sw">Swahili (sw)</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-app-border flex justify-end">
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Initializing Engine...
                </>
              ) : (
                'Start Data Extraction'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}