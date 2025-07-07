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
              url: 'https://calendly.com/jm4041381/jorge-1-1-zoom-call?hide_event_type_details=1&hide_gdpr_banner=1',
              parentElement: document.getElementById('calendly-container'),
              resize: true
            });
          }
        };
        document.head.appendChild(script);
      } else {
        // Calendly already loaded, initialize widget
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/jm4041381/jorge-1-1-zoom-call?hide_event_type_details=1&hide_gdpr_banner=1',
          parentElement: document.getElementById('calendly-container'),
          resize: true
        });
      }
    }
  }, []);

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
          Step 2 of 2
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Book Your Call
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Calendly Embed Widget */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div 
            id="calendly-container"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Still have questions? Email us at{' '}
            <a href="mailto:info@risingbarbermentorship.com" className="text-blue-600 hover:underline">
              info@risingbarbermentorship.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default CalendarSection 