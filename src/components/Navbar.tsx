import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cpu, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b border-slate-800 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 shadow-lg' : 'bg-slate-950/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              TAYS<span className="text-primary">AUTOMATION</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={label}
                  to={to}
                  className={`font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-slate-300 hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to
              return (
                <Link
                  key={label}
                  to={to}
                  className={`block px-3 py-2 rounded-md hover:bg-slate-800 ${
                    isActive ? 'text-primary' : 'text-slate-300 hover:text-primary'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
