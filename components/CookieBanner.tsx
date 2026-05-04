"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("sv_cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = (type: "all" | "necessary") => {
    localStorage.setItem("sv_cookie_consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] px-4 pb-4 md:px-8 md:pb-6">
      <div className="max-w-5xl mx-auto glass rounded-2xl border border-white/[0.10] shadow-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-5">

          {/* Icon + text */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0a6 6 0 0 1 6 6" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="8"  cy="10" r="1"   fill="currentColor" stroke="none" />
                <circle cx="15" cy="16" r="1"   fill="currentColor" stroke="none" />
                <circle cx="9"  cy="15" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="16" cy="10" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">We Value Your Privacy</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                We use cookies to enhance your browsing experience, analyse site traffic, and provide personalised content.
                By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies. Read our{" "}
                <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => accept("all")}
              className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-semibold transition-all hover:scale-105 cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={() => accept("necessary")}
              className="px-5 py-2.5 rounded-xl glass border border-white/20 hover:bg-white/10 text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Necessary Only
            </button>
            <button
              onClick={() => accept("necessary")}
              className="px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
