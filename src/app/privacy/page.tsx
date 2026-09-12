import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Crack404 Niche Hunter',
  description: 'Privacy Policy for Crack404 Niche Hunter.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-app-bg py-20 px-6">
      <div className="max-w-4xl mx-auto bg-app-surface border border-app-border rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent via-info to-accent opacity-50"></div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-primary-text mb-2">Privacy Policy</h1>
        <p className="text-muted-text text-sm mb-10">Last Updated: September 12, 2026</p>

        <div className="space-y-6 text-secondary-text leading-relaxed">
          <p>
            Welcome to Niche Hunter, operated by Crack404 ("we", "us", or "our"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website (https://nichehunter.crack404.com).
          </p>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> When you log in using our passwordless system, we collect your email address to send One-Time Passwords (OTPs) and manage your account sessions.</li>
            <li><strong>Usage Data:</strong> We collect information on the queries you search, the resulting telemetry reports, and your interactions with the dashboard to improve our scoring algorithm.</li>
            <li><strong>Technical Data:</strong> We automatically collect your IP address, browser type, operating system, and standard server log information for security and performance diagnostics.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain the Niche Hunter engine.</li>
            <li>To authenticate users via secure OTP emails.</li>
            <li>To track API usage and manage infrastructure limits (e.g., Celery task queues).</li>
            <li>To analyze usage trends and improve the accuracy of our Opportunity Scores.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">3. Third-Party Service Providers</h2>
          <p>
            To generate intelligence reports, your search queries (excluding personally identifiable information) are transmitted to third-party APIs, including Google Trends, Google PageSpeed Insights, and Serper API. These providers have their own privacy policies governing data handling. We do not sell your personal data to any third parties.
          </p>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">4. Data Security & Retention</h2>
          <p>
            We implement industry-standard security measures, including HTTPS encryption and secure database hosting, to protect your data. We retain your email and research history only for as long as your account is active or as needed to provide you with the service.
          </p>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">5. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your location, you may have the right to access, update, or request the deletion of your personal data. If you wish to exercise these rights, please contact us.
          </p>

          <h2 className="text-xl font-bold text-primary-text mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            <strong>Crack404 Team</strong><br />
            Email: contact.support@crack404.com
          </p>
        </div>
      </div>
    </div>
  );
}