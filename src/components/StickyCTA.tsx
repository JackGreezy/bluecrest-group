"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function StickyCTA() {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Desktop Sticky CTA */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        {isMinimized ? (
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-[var(--color-brand-gold)] to-[var(--color-gold-dark)] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            aria-label="Open contact options"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-72 relative">
            <button
              onClick={() => setIsMinimized(true)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Minimize"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-5">
              <p className="font-bold text-[var(--color-brand-navy)]">Ready to talk?</p>
              <p className="text-sm text-gray-500">Schedule your free consultation</p>
            </div>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[var(--color-brand-gold)] to-[var(--color-gold-dark)] text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all"
              >
                Get a Free Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center w-full px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-sm hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sticky Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg safe-area-inset-bottom">
        <div className="grid grid-cols-2 divide-x divide-gray-200">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center justify-center gap-2 py-4 text-[var(--color-brand-navy)] font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 py-4 bg-[var(--color-brand-gold)] text-white font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
