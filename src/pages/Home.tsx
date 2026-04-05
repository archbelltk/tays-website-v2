import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ChevronDown,
  Bot,
  Activity,
  Cpu,
  Settings,
  Users,
  Calendar,
  MapPin,
} from 'lucide-react'
import featureProject1 from '../img/featured-project-4.jpg'
import featureProject2 from '../img/featured-project-5.jpg'
import rockwellLogo from '../img/rockwell-automation.png'
import siemensLogo from '../img/siemens.png'
import mitsubhishiLogo from '../img/Mitsubishi.png'
import schindlerLogo from '../img/schneider-electric.png'
import industriesImg from '../img/industries.jpg'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80"
            alt="Industrial Automation Background"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />
        </div>

        <div className="absolute inset-0 circuit-pattern opacity-20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 border border-primary/30 text-primary mb-8 animate-pulse-slow backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium">Engineering Excellence Since 2010</span>
              </div> */}

              <h1 className="font-display font-bold text-5xl md:text-6xl mb-6 mt-[20px] sm:mt-4 leading-[1.15] md:leading-tight">
                <span className="inline text-white">Bespoke </span>
                <span className="gradient-text">Automation</span>
                <span className="block text-white">Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto lg:mx-0 mb-8 font-[500]">
               For a Smarter Future
              </p>

              {/* <p className="text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed text-lg">
               TAYS Automation, a UK-based automation engineering company delivering comprehensive EPC solutions across the automation industry for over a decade.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#services"
                  className="px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-primary/25"
                >
                  Explore Services
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-slate-600 hover:border-primary bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get in Touch
                  {/* <Mail className="w-5 h-5" /> */}
                </Link>
              </div>

              {/* Stats Row */}
              <div className="mt-5 grid grid-cols-3 gap-8 border-t border-slate-800/50 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-slate-500">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-slate-500">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-500">Technical Support</div>
                </div>
              </div>
            </div>

            {/* Right side - Decorative Elements */}
            <div className="hidden lg:block relative h-full min-h-[600px]">
              <div className="absolute top-20 right-0 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-2xl animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">AI Control</div>
                    <div className="text-xs text-slate-400">Active Monitoring</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  <div className="h-1 w-8 bg-primary rounded-full" />
                  <div className="h-1 w-6 bg-primary/60 rounded-full" />
                  <div className="h-1 w-10 bg-primary/40 rounded-full" />
                </div>
              </div>

              <div
                className="absolute bottom-40 left-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-2xl animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">SCADA System</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-xl p-4 shadow-2xl animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="w-6 h-6 text-purple-400" />
                  <span className="text-sm font-semibold text-white">PLC Network</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Efficiency</span>
                    <span className="text-white">98.7%</span>
                  </div>
                  <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-[98.7%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-slate-800 rounded-full opacity-30" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-slate-700 rounded-full opacity-40" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/30 rounded-full opacity-50" />
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <a href="#services"><ChevronDown className="w-6 h-6 text-slate-400" /></a>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">What We Do</h2>
            <p className="text-xl text-slate-400">Streamlining Success: Powering Industries with Automation Solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-primary/50 transition-colors">
                <Settings className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Automation & Control Systems</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We deliver end-to-end automation and control systems using advanced technology and deep industry expertise.
              </p>
              <Link
                to="/services#automation"
                className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-accent/50 transition-colors">
                <Activity className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">RTS & SCADA Systems</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                We design, engineer, and commission Real Time Systems (RTS) and SCADA solutions for
                substation environments with deterministic, time-critical behavior.
              </p>
              {/* <ul className="text-slate-500 text-sm mb-6 space-y-1">
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> IEC 61850 & DNP3 Protocols</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> HMI Development</li>
                <li className="flex items-center gap-2"><Check className="w-3 h-3 text-primary" /> Legacy System Migrations</li>
              </ul> */}
              <Link
                to="/services#scada"
                className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 card-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all" />
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-800 group-hover:border-purple-500/50 transition-colors">
                <Users className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Mentorship Program</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Connecting aspiring control systems and automation engineers with experienced
                professionals for guidance, support, and knowledge sharing in the industry.
              </p>
              <Link
                to="/services#mentorship"
                className="text-purple-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Industries We Support
              </h2>
              <div className="text-lg text-slate-400 mb-8 leading-relaxed">
                {/* <p className='text-slate-300'>
                  Discover how our unwavering support and expertise uplifts industries across the
                spectrum. 
                </p> */}
                <p className="mt-4">
                     Discover how our unwavering support and expertise uplifts industries across the
                spectrum. 
                </p>
                <p className='mt-3'>
From pharmaceutical advancements that enhance lives to cutting-edge
                security solutions that safeguard businesses, and innovative food initiatives that
                satisfy diverse palates.
                </p>
              </div>
              {/* <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Pill className="w-5 h-5 text-primary" />, label: 'Pharmaceutical' },
                  { icon: <Shield className="w-5 h-5 text-primary" />, label: 'Security' },
                  { icon: <Utensils className="w-5 h-5 text-primary" />, label: 'Food & Beverage' },
                  { icon: <Zap className="w-5 h-5 text-primary" />, label: 'Energy' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-slate-300">
                    {icon}
                    <span>{label}</span>
                  </div>
                ))}
              </div> */}
              <Link
                to="/services"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 border border-slate-700 w-fit"
              >
                Explore Industries 
                {/* <ArrowRight className="w-4 h-4" /> */}
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={industriesImg}
                alt="Industries we support"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl opacity-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
              Revolutionising Industries
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Harnessing the Power of Rockwell Automation, Siemens, Mitsubishi, and Schneider Electric
            </p>
            <div className="flex flex-wrap justify-center mt-[40px] gap-10 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { brand: 'Rockwell', src: rockwellLogo },
                { brand: 'Siemens', src: siemensLogo },
                { brand: 'Mitsubishi', src: mitsubhishiLogo },
                { brand: 'Schneider', src: schindlerLogo },
              ].map(({ brand, src }) => (
                <img
                  key={brand}
                  src={src}
                  alt={brand}
                  className="w-[200px] object-contain"
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 mt-[80px]">
            <div className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 card-hover">
              <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <Cpu className="w-24 h-24 text-slate-800 group-hover:text-primary/20 transition-all duration-500 group-hover:scale-110" /> */}
                  <img src={featureProject1} alt="feature project" className="w-full h-full object-cover object-center" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">Controls</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700">PLC</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  Control Automation Systems
                </h3>
                <p className="text-slate-400 mb-4">
                  Advanced PLC programming and control system integration for industrial manufacturing processes.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2025</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> UK</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 card-hover">
              <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <RotateCw className="w-24 h-24 text-slate-800 group-hover:text-accent/20 transition-all duration-500 group-hover:scale-110" /> */}
                  <img src={featureProject2} alt="feature project" className="w-full h-full object-cover object-center" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20">Motion</span>
                  <span className="px-3 py-1 bg-slate-800 text-slate-400 text-sm rounded-full border border-slate-700">Development</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                  Motion Control Systems
                </h3>
                <p className="text-slate-400 mb-4">
                  Precision motion control system development and implementation for automated manufacturing lines.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 2025</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> UK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-700"
            >
              View All Projects 
              {/* <ArrowRight className="w-5 h-5" /> */}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Automate Your Future?
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            Contact us today to discuss your next project and discover how we can transform your
            operations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Get in Touch 
            {/* <Mail className="w-5 h-5" /> */}
          </Link>
        </div>
      </section>
    </>
  )
}
