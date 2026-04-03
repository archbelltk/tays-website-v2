import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import Navbar from './Navbar'
import Footer from './Footer'

const WHATSAPP_NUMBER = '00447594057017' // replace with real number

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25D366]/40 hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <SiWhatsapp className="w-7 h-7" />
      </a>
    </div>
  )
}
