"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { authService } from '@/services/auth.service';
import { useAuth } from '@/context/AuthContext';

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (res: { credential: string }) => void }) => void;
          renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
          prompt: () => void;
        };
      };
    };
  }
}

export default function LoginPage() {
  const { loginWithTokens } = useAuth();
  const [step, setStep] = useState<'EMAIL' | 'OTP'>('EMAIL');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);

  // Resend Countdown Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Handle Google Token Callback
  const handleGoogleCallback = useCallback(async (response: { credential: string }) => {
    try {
      setLoading(true);
      setError(null);
      const data = await authService.googleLogin(response.credential);
      loginWithTokens(data.access, data.refresh);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Google authentication failed');
    } finally {
      setLoading(false);
    }
  }, [loginWithTokens]);

  const initGoogleAuth = useCallback(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (window.google && clientId) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCallback,
      });

      const btnContainer = document.getElementById('google-btn-container');
      if (btnContainer) {
        window.google.accounts.id.renderButton(btnContainer, {
          theme: 'outline',
          size: 'large',
          width: 380,
          text: 'continue_with',
          shape: 'pill',
        });
      }
    }
  }, [handleGoogleCallback]);

  // Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      setError(null);
      await authService.requestOtp(email);
      setStep('OTP');
      setTimer(60); // 60-second cooldown
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP. Try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setError('Please enter a valid 6-digit code');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await authService.verifyOtp(email, otp);
      loginWithTokens(data.access, data.refresh);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Invalid code or expired.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={initGoogleAuth}
      />

      <div className="w-full flex-grow flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-app-surface border border-app-border flex items-center justify-center shadow-lg">
              <Image 
                src="/logo.png" 
                alt="Crack404 Logo" 
                width={24} 
                height={24} 
                className="object-contain"
              />
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-app-surface/80 backdrop-blur-xl border border-app-border rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

            <h1 className="text-2xl font-bold text-primary-text mb-1">
              {step === 'EMAIL' ? 'Welcome to Niche Hunter.' : 'Check your inbox.'}
            </h1>
            <p className="text-sm text-secondary-text mb-8">
              {step === 'EMAIL'
                ? 'Sign in or create your account using your email.'
                : `We sent a 6-digit verification code to ${email}`}
            </p>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                {error}
              </div>
            )}

            {step === 'EMAIL' ? (
              /* STEP 1: EMAIL INPUT */
              <form onSubmit={handleRequestOtp} className="space-y-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-text">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="developer@example.com"
                    className="w-full bg-app-bg border border-app-border rounded-lg px-4 py-2.5 text-primary-text placeholder:text-muted-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all font-mono text-sm"
                    required
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] disabled:opacity-50"
                >
                  {loading ? 'Sending code...' : 'Continue with Email'}
                </button>
              </form>
            ) : (
              /* STEP 2: OTP VERIFICATION */
              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="otp" className="block text-sm font-medium text-secondary-text">
                      Verification Code
                    </label>
                    <button
                      type="button"
                      onClick={() => setStep('EMAIL')}
                      className="text-xs text-accent hover:underline"
                    >
                      Change email
                    </button>
                  </div>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    maxLength={6}
                    onChange={(e) => setOtp(e.target.value.trim())}
                    placeholder="123456"
                    className="w-full text-center tracking-[0.5em] text-2xl font-mono bg-app-bg border border-app-border rounded-lg px-4 py-3 text-primary-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    required
                    disabled={loading}
                    autoFocus
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || otp.length !== 6}
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] disabled:opacity-50"
                >
                  {loading ? 'Verifying...' : 'Verify & Continue'}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    disabled={timer > 0 || loading}
                    onClick={handleRequestOtp}
                    className="text-xs text-secondary-text hover:text-primary-text disabled:opacity-40"
                  >
                    {timer > 0 ? `Resend code in ${timer}s` : 'Did not receive code? Resend'}
                  </button>
                </div>
              </form>
            )}

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-app-border"></div>
              <span className="px-4 text-xs font-mono text-muted-text uppercase tracking-widest">OR</span>
              <div className="flex-grow h-px bg-app-border"></div>
            </div>

            {/* Google SSO Container */}
            <div className="flex justify-center w-full">
              <div id="google-btn-container" className="w-full flex justify-center"></div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-text mt-8">
            By signing in, you agree to our Terms of Service & Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
}