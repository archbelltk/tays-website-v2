import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Search } from 'lucide-react'
import taysLogo from '../img/tays-logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

const searchIndex = [
  { label: 'Home', to: '/', keywords: 'home welcome about tays automation' },
  { label: 'Automation & Control Systems', to: '/services#automation', keywords: 'automation control systems plc hmi commissioning services' },
  { label: 'RTS & SCADA Systems', to: '/services#scada', keywords: 'scada rts real time substation iec dnp3 modbus services' },
  { label: 'Mentorship Program', to: '/services#mentorship', keywords: 'mentorship graduate training career development services' },
  { label: 'Services', to: '/services', keywords: 'services automation scada mentorship consulting' },
  { label: 'Control Automation Project', to: '/projects', keywords: 'projects plc rockwell controllogix hmi fat sat' },
  { label: 'Motion Control Project', to: '/projects', keywords: 'projects motion siemens servo axis manufacturing' },
  { label: 'SCADA Substation Project', to: '/projects', keywords: 'projects scada substation wonderware iec 61850' },
  { label: 'Careers', to: '/careers', keywords: 'careers jobs vacancies engineer graduate support' },
  { label: 'Senior Control Systems Engineer', to: '/careers', keywords: 'job senior control systems engineer rockwell siemens' },
  { label: 'SCADA Engineer', to: '/careers', keywords: 'job scada engineer wonderware ignition substation' },
  { label: 'Graduate Automation Engineer', to: '/careers', keywords: 'job graduate automation engineer scheme entry level' },
  { label: 'Contact', to: '/contact', keywords: 'contact get in touch email phone location uk' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
    setQuery('')
  }, [location.pathname])

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  // Close search on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const results = query.trim().length > 1
    ? searchIndex.filter(({ label, keywords }) =>
        `${label} ${keywords}`.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSelect = (to: string) => {
    setSearchOpen(false)
    setQuery('')
    navigate(to)
  }

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-md border-b border-slate-800/40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 shadow-lg' : 'bg-slate-950/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">

          {/* Logo — left */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={taysLogo} alt="TAYS Automation" className="w-[120px]" />
          </Link>

          {/* Nav links — centered */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
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

          {/* Search — right */}
          <div className="hidden md:flex items-center flex-shrink-0" ref={searchRef}>
            {searchOpen ? (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { setSearchOpen(false); setQuery('') }
                    if (e.key === 'Enter' && results.length > 0) handleSelect(results[0].to)
                  }}
                  placeholder="Search..."
                  className="w-56 pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 focus:border-primary rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
                {results.length > 0 && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-xl overflow-hidden z-50">
                    {results.map(({ label, to }) => (
                      <button
                        key={`${label}-${to}`}
                        onClick={() => handleSelect(to)}
                        className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        {label}
                      </button>
                    ))}
                  </div>
                )}
                {query.trim().length > 1 && results.length === 0 && (
                  <div className="absolute top-full right-0 mt-2 w-72 bg-slate-900 border border-slate-700 rounded-xl shadow-xl px-4 py-3 text-sm text-slate-500">
                    No results for "{query}"
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-slate-800"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden ml-auto text-slate-300 hover:text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {/* Mobile search */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && results.length > 0) handleSelect(results[0].to)
                }}
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 focus:border-primary rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              {results.length > 0 && (
                <div className="mt-1 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
                  {results.map(({ label, to }) => (
                    <button
                      key={`${label}-${to}`}
                      onClick={() => handleSelect(to)}
                      className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Search className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
