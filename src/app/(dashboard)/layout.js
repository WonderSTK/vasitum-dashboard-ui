import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      <div className="w-[0%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-[#fbfbfa] lg:p-8">
        {/* Logo Link */}
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          {/* Large Logo for larger screens */}
          <Image src="/logo.png" alt="logo" width={150} height={40} className='hidden lg:flex' />
          {/* Small Logo for smaller screens */}
          <Image src="/logo-small.png" alt="logo" width={30} height={30} className='lg:hidden pt-4' />
        </Link>
        {/* Menu Component */}
        <Menu />
      </div>
      
      {/* MAIN CONTENT AREA */}
      <div className="w-[100%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-white overflow-y-auto flex flex-col">
        {/* Navbar Component */}
        <Navbar />
        {/* Children Components */}
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout