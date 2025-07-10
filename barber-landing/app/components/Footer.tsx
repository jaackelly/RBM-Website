'use client'

import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">RISING BARBER MENTORSHIP</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering barbers to build successful, profitable businesses through proven strategies and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#video" className="text-gray-300 hover:text-white transition-colors">
                  Watch Training
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-gray-300 hover:text-white transition-colors">
                  Book Strategy Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Rising Barber Mentorship. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 