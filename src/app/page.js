'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LandingPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 5000) // Redirect after 5 seconds

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Vasitum</h1>
        <p className="text-xl mb-8">Your HR Management Dashboard is loading...</p>
        <div className="animate-pulse bg-white bg-opacity-30 rounded-lg p-4 mb-8">
          <p className="text-lg">You will be redirected to the dashboard in 5 seconds.</p>
        </div>
        <Link 
          href="/dashboard" 
          className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
        >
          Go to Dashboard Now
        </Link>
      </div>
      <footer className="absolute bottom-4 text-center">
        <p className="mb-2">&copy; 2024 Mehul Kumar. All rights reserved.</p>
        <Link 
          href="https://github.com/WonderSTK" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          GitHub: @WonderSTK
        </Link>
      </footer>
    </div>
  )
}

