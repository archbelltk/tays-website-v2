import { Link } from 'react-router-dom'
import {
  Settings,
  CheckCircle,
  ArrowRight,
  Activity,
  ChevronRight,
  ListChecks,
  GraduationCap,
  Users,
  BookOpen,
  Network,
  Award,
  Pill,
  Shield,
  Utensils,
  Zap,
  Mail,
  Briefcase,
} from 'lucide-react'

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your industry needs. From control systems
              to mentorship, we deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Automation & Control Systems */}
      <section id="automation" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                <Settings className="w-4 h-4 mr-2" />
                Core Service
              </div>
              <h2 className="font-display text-4xl font-bold mb-6 text-white">
                Automation & Control Systems Services
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                At Tays Automation, we combine our expertise, industry knowledge, and advanced
                technology to provide comprehensive automation and control systems services. Our
                solutions are designed to optimize your operations, increase efficiency, and reduce
                downtime.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'System Design & Integration',
                    desc: 'Custom control system architecture designed for your specific operational requirements.',
                  },
                  {
                    title: 'PLC Programming',
                    desc: 'Expert programming for Rockwell, Siemens, Mitsubishi, and Schneider Electric platforms.',
                  },
                  {
                    title: 'HMI Development',
                    desc: 'Intuitive human-machine interfaces for seamless operator interaction.',
                  },
                  {
                    title: 'System Commissioning',
                    desc: 'Complete testing, validation, and handover of automated systems.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-slate-400 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Discuss Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1565514020176-db8ab644cf14?w=800&q=80"
                  alt="Control Systems"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Fast</div>
                    <div className="text-xs text-slate-500">Deployment</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">Reliable</div>
                    <div className="text-xs text-slate-500">Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: RTS & SCADA Systems */}
      <section id="scada" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                  alt="SCADA Systems"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="space-y-3">
                  {[
                    { label: 'System Status', value: <span className="text-sm text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />Online</span> },
                    { label: 'Data Points', value: <span className="text-sm text-white">10,000+</span> },
                    { label: 'Response Time', value: <span className="text-sm text-white">&lt; 10ms</span> },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
                      <span className="text-sm text-slate-400">{label}</span>
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
                <Activity className="w-4 h-4 mr-2" />
                Specialized Solution
              </div>
              <h2 className="font-display text-4xl font-bold mb-6 text-white">RTS & SCADA Systems</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                We design, engineer, and commission Real Time Systems (RTS) and Supervisory Control
                and Data Acquisition (SCADA) solutions for substation environments. Our RTS engineers
                are specialists in the design, development, and deployment of systems that exhibit
                deterministic, time-critical behaviour.
              </p>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <ListChecks className="w-5 h-5 text-accent" />
                  Our Capabilities Include:
                </h4>
                <ul className="space-y-3 text-slate-400">
                  {[
                    'Real Time System design, development & deployment',
                    'SCADA system integration & commissioning',
                    'Substation automation & control system engineering',
                    'Deterministic control logic design & validation',
                    'HMI development & visualisation',
                    'Communication network design (IEC 61850, DNP3, Modbus, cellular, fibre)',
                    'Legacy system upgrades & migrations',
                    'FAT/SAT testing & documentation',
                    'Ongoing support & maintenance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get SCADA Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Mentorship Program */}
      <section id="mentorship" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
                <GraduationCap className="w-4 h-4 mr-2" />
                Professional Development
              </div>
              <h2 className="font-display text-4xl font-bold mb-6 text-white">Mentorship Program</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                The program is designed to connect aspiring control systems and automation engineers
                with experienced professionals in the field to provide guidance, support, and
                knowledge sharing. We believe in nurturing the next generation of automation experts.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="w-8 h-8 text-purple-400 mb-3" />, title: '1-on-1 Mentoring', desc: 'Personal guidance from industry veterans with 10+ years experience.' },
                  { icon: <BookOpen className="w-8 h-8 text-purple-400 mb-3" />, title: 'Knowledge Transfer', desc: 'Hands-on training with real-world projects and case studies.' },
                  { icon: <Network className="w-8 h-8 text-purple-400 mb-3" />, title: 'Industry Network', desc: 'Connect with professionals across the automation industry.' },
                  { icon: <Award className="w-8 h-8 text-purple-400 mb-3" />, title: 'Career Growth', desc: 'Accelerate your career path in control systems engineering.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                    {icon}
                    <h4 className="font-semibold text-white mb-2">{title}</h4>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Apply for Mentorship <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Mentorship"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Program Benefits</div>
                      <div className="text-sm text-slate-400">Join 50+ engineers</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm italic">
                    "The mentorship program at Tays Automation accelerated my career by 3 years. The
                    hands-on experience with SCADA systems was invaluable."
                  </p>
                  <div className="mt-4 text-sm text-slate-500">— Former Mentee, now Senior Controls Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-white">Industries We Serve</h2>
            <p className="text-lg text-slate-400">
              From pharmaceutical advancements to cutting-edge security solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Pill className="w-7 h-7 text-primary" />, color: 'primary', title: 'Pharmaceutical', desc: 'Process automation for drug manufacturing and quality control systems.' },
              { icon: <Shield className="w-7 h-7 text-accent" />, color: 'accent', title: 'Security', desc: 'Integrated security systems and access control automation.' },
              { icon: <Utensils className="w-7 h-7 text-purple-400" />, color: 'purple-500', title: 'Food & Beverage', desc: 'Production line automation and food safety monitoring systems.' },
              { icon: <Zap className="w-7 h-7 text-green-400" />, color: 'green-500', title: 'Energy', desc: 'Substation automation and power distribution control systems.' },
            ].map(({ icon, color, title, desc }) => (
              <div
                key={title}
                className={`bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-${color}/50 transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-xl bg-${color}/10 flex items-center justify-center mb-4 group-hover:bg-${color}/20 transition-colors`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">Need a Custom Solution?</h2>
          <p className="text-lg text-slate-400 mb-8">
            Contact our team to discuss your specific automation requirements and discover how we can
            help transform your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Contact Us <Mail className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-slate-700 hover:border-primary text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              View Our Work <Briefcase className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
