'use client'

import React, { useEffect } from 'react'

declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendarSection: React.FC = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Load Calendly script if not already loaded
      if (!window.Calendly) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          // Initialize Calendly widget after script loads
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/joeycmilewski/sales-coaching-consultation?hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ff6900',
              parentElement: document.getElementById('calendly-container'),
              resize: true
            });
          }
        };
        document.head.appendChild(script);
      } else {
        // Calendly already loaded, initialize widget
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/joeycmilewski/sales-coaching-consultation?hide_event_type_details=1&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=ff6900',
          parentElement: document.getElementById('calendly-container'),
          resize: true
        });
      }
    }
  }, []);

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Book Your Call
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Calendly Embed Widget */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden calendly-container">
          {/* Custom Event Title */}
          <div className="bg-white px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Sales Coaching Consultation
            </h3>
          </div>
          
          <div 
            id="calendly-container"
            style={{ minWidth: "320px", height: "640px" }}
          ></div>
        </div>
      </div>

      {/* Enhanced CSS to hide Calendly branding and header */}
      <style jsx>{`
        .calendly-container :global([data-testid="powered-by-calendly"]) {
          display: none !important;
        }
        .calendly-container :global(.calendly-powered-by) {
          display: none !important;
        }
        .calendly-container :global([class*="powered-by"]) {
          display: none !important;
        }
        .calendly-container :global(a[href*="calendly.com"]) {
          display: none !important;
        }
        .calendly-container :global(.calendly-badge-widget) {
          display: none !important;
        }
        .calendly-container :global([class*="branding"]) {
          display: none !important;
        }
        .calendly-container :global([data-testid="event-type-header"]) {
          display: none !important;
        }
        .calendly-container :global([class*="event-type-header"]) {
          display: none !important;
        }
        .calendly-container :global(.calendly-inline-widget iframe) {
          border-top: none !important;
        }
      `}</style>
    </section>
  )
}

export default CalendarSection 