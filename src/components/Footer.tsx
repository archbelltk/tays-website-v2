import { Link } from 'react-router-dom'
import { Cpu } from 'lucide-react'
import { SiX } from '@icons-pack/react-simple-icons'

// LinkedIn removed from Simple Icons due to trademark — using inline SVG
const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                TAYS<span className="text-primary">AUTOMATION</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Tays Engineering Ltd, trading as Tays Automation. Comprehensive EPC-based automation
              solutions for a smarter future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/services#automation" className="hover:text-primary transition-colors">Control Systems</Link></li>
              <li><Link to="/services#scada" className="hover:text-primary transition-colors">SCADA Solutions</Link></li>
              <li><Link to="/services#mentorship" className="hover:text-primary transition-colors">Mentorship</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Consulting</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2024 Tays Engineering Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
            >
              <SiX className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
