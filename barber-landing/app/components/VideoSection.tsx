'use client'

import React from 'react'

const VideoSection: React.FC = () => {

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
          Step 1 of 2
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
          Watch Video
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the proven strategies that successful barbers use to scale their businesses to $10k-$20k+ per month.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="video-container">
          {/* Loom Video Embed */}
          <iframe 
            src="https://www.loom.com/embed/baaf7295421540e6a5198ce0623b1faa?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&hide_speed=true"
            frameBorder="0"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
        
        {/* Video description */}
        <div className="mt-6 text-center">
          <p className="text-gray-300 text-lg">
            In this exclusive training, you&apos;ll learn the exact system that has helped hundreds of barbers 
            transform their businesses and achieve financial freedom.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VideoSection 