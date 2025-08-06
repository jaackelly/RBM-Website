'use client'

import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-6">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
            THE DEALER'S PLAYBOOK
          </h1>
          <Image 
            src="/images/Dealers_Playbook_Logo.png"
            alt="The Dealer's Playbook Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}

export default Header 