"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const processingSteps = [
  "Research initialized",
  "Discovering keywords",
  "Collecting trend data",
  "Analyzing SERP",
  "Inspecting competitors",
  "Auditing websites",
  "Calculating opportunity",
  "Preparing recommendation"
];

export default function ResearchProcessingPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  
  const [activeStep, setActiveStep] = useState(0);

  // Simulate the backend processing engine
  useEffect(() => {
    if (activeStep < processingSteps.length) {
      const timer = setTimeout(() => {
        setActiveStep(prev => prev + 1);
      }, 800); // 800ms per step for the mockup
      return () => clearTimeout(timer);
    } else {
      // Once complete, automatically route to the Overview page
      const redirectTimer = setTimeout(() => {
        router.push(`/research/${id}/overview`);
      }, 1000);
      return () => clearTimeout(redirectTimer);
    }
  }, [activeStep, id, router]);

  const progressPercentage = Math.min(((activeStep) / processingSteps.length) * 100, 100);

  return (
    <div className="flex-grow flex items-center justify-center p-6 min-h-[80vh] relative overflow-hidden">
      
      {/* Background Radar / Scanner Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="w-full max-w-2xl bg-app-surface border border-app-border rounded-2xl p-8 md:p-12 shadow-2xl relative">
        
        {/* Header section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest font-mono">System Active</span>
          </div>
          <h1 className="text-2xl text-secondary-text mb-2">Analyzing Target:</h1>
          <h2 className="text-4xl font-black text-primary-text drop-shadow-[0_0_15px_rgba(248,250,252,0.2)] tracking-tight">
            HEIC Image Tools
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="w-full bg-app-bg h-2 rounded-full overflow-hidden border border-app-border">
            <div 
              className="h-full bg-accent relative transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-[shimmer_1s_infinite] w-full h-full"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3 text-xs font-mono">
            <span className="text-muted-text">STATUS: PROCESSING</span>
            <span className="text-accent font-bold">{Math.round(progressPercentage)}%</span>
          </div>
        </div>

        {/* Terminal / Step List */}
        <div className="bg-app-bg border border-app-border rounded-xl p-6 font-mono text-sm space-y-3 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-success via-accent to-app-bg opacity-50"></div>
          
          {processingSteps.map((step, index) => {
            let statusIcon;
            let textClass;
            
            if (index < activeStep) {
              // Completed Step
              statusIcon = <span className="text-success mr-3">✓</span>;
              textClass = "text-secondary-text";
            } else if (index === activeStep) {
              // Current Active Step
              statusIcon = (
                <span className="relative flex h-3 w-3 mr-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
              );
              textClass = "text-primary-text font-bold animate-pulse";
            } else {
              // Pending Step
              statusIcon = <span className="text-muted-text mr-3">○</span>;
              textClass = "text-muted-text";
            }

            return (
              <div key={index} className={`flex items-center transition-all duration-300 ${textClass}`}>
                <div className="w-6 flex justify-center">{statusIcon}</div>
                <span>{step}</span>
                {index === activeStep && (
                  <span className="ml-2 text-accent font-black animate-pulse">_</span>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}