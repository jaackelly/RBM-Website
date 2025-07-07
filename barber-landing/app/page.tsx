import React from 'react'
import Header from './components/Header'
import VideoSection from './components/VideoSection'
import CalendarSection from './components/CalendarSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-black">FREE TRAINING:</span>
            <br />
            The Easiest & Fastest Way To Scale
            <br />
            Your Barber Business to{' '}
            <span className="text-green-600">$20k+ Per Month</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies that successful barbers use to transform their 
            businesses and achieve financial freedom in just 2 simple steps.
          </p>
        </div>

        {/* Video Section */}
        <div id="video" className="scroll-mt-8">
          <VideoSection />
        </div>

        {/* Calendar Section */}
        <div id="calendar" className="scroll-mt-8">
          <CalendarSection />
        </div>
      </div>

      <Footer />
    </main>
  )
}
