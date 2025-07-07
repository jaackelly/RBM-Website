'use client'

import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            RISING BARBER MENTORSHIP
          </h1>
          <Image 
            src="/images/rbmIcon.png"
            alt="Rising Barber Mentorship Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
        <div className="mt-2 h-1 w-24 bg-white mx-auto"></div>
      </div>
    </header>
  )
}

export default Header 