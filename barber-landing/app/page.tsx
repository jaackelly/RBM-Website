import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import CalendarSection from './components/CalendarSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <div className="container-custom py-12 md:py-16 lg:py-20">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Want to take home <span className="text-orange-500">multiple 6 figures a year</span> in sales commissions… without grinding 12+ hours a day, chasing the next shiny offer, or relying on some cookie-cutter script?
          </h1>
        </div>

        {/* Calendar Section */}
        <div id="calendar" className="scroll-mt-8">
          <CalendarSection />
        </div>

        {/* Wins Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="text-orange-500">Wins</span> from our Students
            </h2>
          </div>
          
          {/* Student Win Images */}
          <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
            {/* Macy Image */}
            <div className="w-full max-w-2xl animate-fade-in-up opacity-0 animation-delay-200">
              <Image
                src="/images/Macy.jpg"
                alt="Macy's Success Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Dylan Image */}
            <div className="w-full max-w-2xl animate-fade-in-up opacity-0 animation-delay-400">
              <Image
                src="/images/Dylan.jpg"
                alt="Dylan's Success Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Rob Cortez Image */}
            <div className="w-full max-w-2xl animate-fade-in-up opacity-0 animation-delay-600">
              <Image
                src="/images/RobCortez.jpg"
                alt="Rob Cortez's Success Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>

            {/* Michael Image */}
            <div className="w-full max-w-2xl animate-fade-in-up opacity-0 animation-delay-800">
              <Image
                src="/images/Michael.jpg"
                alt="Michael's Success Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <section className="bg-black text-white py-16">
        <div className="container-custom">
          {/* Logo and Email Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/images/Dealers_Playbook_Logo.png"
                alt="The Dealers Playbook Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            
            <p className="text-gray-300 text-lg mb-4">
              Joey@highticketdealers.com
            </p>
            
            <p className="text-gray-400 text-sm">
              © High Ticket Dealers, 2025 / All Rights Reserved
            </p>
          </div>

          {/* Disclaimer Text */}
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              <strong>Disclaimer:</strong> We do not guarantee any results or earnings. Your success depends on your own effort, skills, and circumstances. By using our services, programs, or materials, you acknowledge and agree that High Ticket Dealers LLC is not responsible for your personal or business outcomes. You assume full responsibility for applying the strategies provided and for any decisions you make based on the information we share.
            </p>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              High Ticket Dealers LLC provides professional sales training and coaching services designed to help closers and online entrepreneurs improve their communication, sales strategies, and business systems. Our programs focus on developing real-world skills in high-ticket sales, objection handling, and client relationship management.
            </p>
            
            <div className="text-gray-400 text-sm leading-relaxed">
              <p className="mb-2">We deliver our services through:</p>
              <ul className="list-none space-y-1">
                <li>• Live Coaching Sessions (group and 1:1 training)</li>
                <li>• Video Modules & Curriculum (on-demand education)</li>
                <li>• Sales Frameworks & Resources (worksheets, scripts, and trackers)</li>
                <li>• Community Support (private online community for ongoing mentorship)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
