import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  TrendingUp,
  Brain,
  GraduationCap,
  Heart,
  PoundSterling,
  Calendar,
  BookOpen,
  ShieldCheck,
  Car,
  ChevronDown,
  Check,
  ChevronRight,
  ArrowRight,
  UploadCloud,
  Send,
  User,
  Star,
  Search,
} from 'lucide-react'

type Category = 'all' | 'engineering' | 'graduate' | 'support'

const jobs = [
  {
    id: 'job1',
    title: 'Senior Control Systems Engineer',
    category: 'engineering' as Category,
    badge: { label: 'Full-time', color: 'bg-primary/10 text-primary border-primary/20' },
    tags: ['Remote/Hybrid', '£55k–£70k'],
    accentColor: 'text-primary',
    applyBtnClass: 'bg-primary hover:bg-sky-600',
    about:
      "We're seeking an experienced Control Systems Engineer to lead automation projects across multiple industries. You'll be responsible for PLC programming, HMI development, and system commissioning.",
    requirements: [
      { text: '5+ years experience in industrial automation', color: 'text-primary' },
      { text: 'Expert in Rockwell or Siemens PLCs', color: 'text-primary' },
      { text: 'SCADA system design experience', color: 'text-primary' },
      { text: 'Degree in Electrical Engineering or related', color: 'text-primary' },
    ],
    responsibilities: [
      { text: 'Lead automation projects from concept to commissioning', color: 'text-accent' },
      { text: 'Mentor junior engineers', color: 'text-accent' },
      { text: 'Client liaison and technical presentations', color: 'text-accent' },
      { text: 'System testing and FAT/SAT procedures', color: 'text-accent' },
    ],
  },
  {
    id: 'job2',
    title: 'SCADA Engineer',
    category: 'engineering' as Category,
    badge: { label: 'Full-time', color: 'bg-accent/10 text-accent border-accent/20' },
    tags: ['On-site', '£45k–£60k'],
    accentColor: 'text-accent',
    applyBtnClass: 'bg-accent hover:bg-cyan-600',
    about:
      'Specialize in designing and implementing SCADA systems for substation and industrial applications. Work with IEC 61850, DNP3, and Modbus protocols.',
    requirements: [
      { text: '3+ years SCADA development experience', color: 'text-accent' },
      { text: 'Knowledge of communication protocols', color: 'text-accent' },
      { text: 'Experience with Wonderware or Ignition', color: 'text-accent' },
      { text: 'Understanding of substation automation', color: 'text-accent' },
    ],
    responsibilities: [
      { text: 'Design HMI screens and alarm systems', color: 'text-primary' },
      { text: 'Configure RTU and PLC communications', color: 'text-primary' },
      { text: 'Database configuration and historian setup', color: 'text-primary' },
      { text: 'Cybersecurity implementation', color: 'text-primary' },
    ],
  },
  {
    id: 'job3',
    title: 'Graduate Automation Engineer',
    category: 'graduate' as Category,
    badge: { label: 'Full-time', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
    tags: ['Graduate Scheme', '£28k–£32k'],
    accentColor: 'text-purple-400',
    applyBtnClass: 'bg-purple-500 hover:bg-purple-600',
    about:
      'Start your career with our 2-year graduate development program. Rotate through different teams and gain hands-on experience with real projects from day one.',
    requirements: [
      { text: 'Degree in Electrical, Control, or Mechatronics Engineering', color: 'text-purple-400' },
      { text: 'Strong academic record (2:1 or above)', color: 'text-purple-400' },
      { text: 'Passion for automation technology', color: 'text-purple-400' },
      { text: 'Full UK driving license', color: 'text-purple-400' },
    ],
    responsibilities: [
      { text: 'Assigned mentor from senior engineering team', color: 'text-purple-400' },
      { text: 'Rotations: Design, Commissioning, Support', color: 'text-purple-400' },
      { text: 'Paid certifications (PLC, SCADA, Safety)', color: 'text-purple-400' },
      { text: 'Clear path to Junior Engineer role', color: 'text-purple-400' },
    ],
  },
  {
    id: 'job4',
    title: 'Technical Support Engineer',
    category: 'support' as Category,
    badge: { label: 'Full-time', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
    tags: ['Remote', '£35k–£45k'],
    accentColor: 'text-green-400',
    applyBtnClass: 'bg-green-500 hover:bg-green-600',
    about:
      "Provide 24/7 technical support to our clients' automation systems. Troubleshoot PLC, SCADA, and network issues remotely and coordinate on-site visits when necessary.",
    requirements: [
      { text: '2+ years in automation support role', color: 'text-green-400' },
      { text: 'Strong diagnostic and problem-solving skills', color: 'text-green-400' },
      { text: 'Experience with remote access tools', color: 'text-green-400' },
      { text: 'Excellent communication skills', color: 'text-green-400' },
    ],
    responsibilities: [
      { text: 'Respond to client support tickets', color: 'text-green-400' },
      { text: 'Remote system diagnostics and fixes', color: 'text-green-400' },
      { text: 'Coordinate emergency call-outs', color: 'text-green-400' },
      { text: 'Maintain knowledge base and documentation', color: 'text-green-400' },
    ],
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Senior SCADA Engineer',
    color: 'bg-primary/20',
    iconColor: 'text-primary',
    quote:
      'I joined TAYS as a graduate 5 years ago. The mentorship and training opportunities have been incredible. I\'ve worked on major substation projects across the UK and grown into a senior role.',
  },
  {
    name: 'James Chen',
    role: 'Control Systems Engineer',
    color: 'bg-accent/20',
    iconColor: 'text-accent',
    quote:
      "The variety of projects keeps every day interesting. One week I'm programming PLCs for a pharmaceutical plant, the next I'm commissioning a food production line. Great team culture too.",
  },
  {
    name: 'Emma Thompson',
    role: 'Graduate Engineer',
    color: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    quote:
      "The graduate scheme gave me exposure to real projects immediately. My mentor has been fantastic, and I've already earned my first PLC certification. Highly recommend for new graduates.",
  },
]

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState<Category>('all')
  const [openJob, setOpenJob] = useState<string | null>(null)
  const [selectedPosition, setSelectedPosition] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const applyRef = useRef<HTMLElement>(null)

  const visibleJobs = jobs.filter(
    (j) => activeFilter === 'all' || j.category === activeFilter,
  )

  const handleApplyNow = (title: string) => {
    setSelectedPosition(title)
    applyRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
              Careers at TAYS
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Shape the future of industrial automation. We're looking for passionate engineers and
              innovators to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 text-white">
              Why Join TAYS Automation?
            </h2>
            <p className="text-lg text-slate-400">Build your career with a leader in industrial automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-8 h-8 text-primary" />, bg: 'bg-primary/10 group-hover:bg-primary/20', border: 'hover:border-primary/50', title: 'Career Growth', desc: 'Clear progression paths from graduate to senior engineer with mentorship support.' },
              { icon: <Brain className="w-8 h-8 text-accent" />, bg: 'bg-accent/10 group-hover:bg-accent/20', border: 'hover:border-accent/50', title: 'Cutting-Edge Tech', desc: 'Work with the latest PLC, SCADA, and AI technologies from leading manufacturers.' },
              { icon: <GraduationCap className="w-8 h-8 text-purple-400" />, bg: 'bg-purple-500/10 group-hover:bg-purple-500/20', border: 'hover:border-purple-500/50', title: 'Continuous Learning', desc: 'Paid certifications, training budgets, and access to our mentorship program.' },
              { icon: <Heart className="w-8 h-8 text-green-400" />, bg: 'bg-green-500/10 group-hover:bg-green-500/20', border: 'hover:border-green-500/50', title: 'Great Benefits', desc: 'Competitive salary, flexible working, pension, and health insurance.' },
            ].map(({ icon, bg, border, title, desc }) => (
              <div key={title} className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center group ${border} transition-all`}>
                <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors`}>
                  {icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 text-white">Employee Benefits</h2>
              <p className="text-lg text-slate-400 mb-8">
                We take care of our team so they can focus on delivering exceptional results for our
                clients.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <PoundSterling className="w-6 h-6 text-primary" />, bg: 'bg-primary/10', title: 'Competitive Salary', desc: 'Above-market rates with annual performance reviews' },
                  { icon: <Calendar className="w-6 h-6 text-accent" />, bg: 'bg-accent/10', title: 'Flexible Working', desc: 'Hybrid work options and flexible hours' },
                  { icon: <BookOpen className="w-6 h-6 text-purple-400" />, bg: 'bg-purple-500/10', title: 'Training Budget', desc: '£2,000 annual allowance for courses and certifications' },
                  { icon: <ShieldCheck className="w-6 h-6 text-green-400" />, bg: 'bg-green-500/10', title: 'Health & Wellness', desc: 'Private health insurance and mental health support' },
                  { icon: <Car className="w-6 h-6 text-orange-400" />, bg: 'bg-orange-500/10', title: 'Company Car', desc: 'Available for senior roles and field engineers' },
                ].map(({ icon, bg, title, desc }) => (
                  <div key={title} className="flex items-center gap-4 p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{title}</h4>
                      <p className="text-sm text-slate-400">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team Collaboration"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">25+</div>
                    <div className="text-xs text-slate-500">Team Members</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-center">
                    <div className="text-3xl font-bold text-accent mb-1">4.8/5</div>
                    <div className="text-xs text-slate-500">Employee Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-slate-950 relative" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4 text-white">Open Positions</h2>
            <p className="text-lg text-slate-400">Find your next role in automation engineering</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {(['all', 'engineering', 'graduate', 'support'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeFilter === cat
                    ? 'bg-primary text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {visibleJobs.map((job) => {
              const isOpen = openJob === job.id
              return (
                <div
                  key={job.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 text-xs rounded-full border ${job.badge.color}`}>
                          {job.badge.label}
                        </span>
                        {job.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenJob(isOpen ? null : job.id)}
                      className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-medium transition-all flex items-center gap-2"
                    >
                      View Details
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="border-t border-slate-800 pt-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-white mb-3">About the Role</h4>
                          <p className="text-slate-400 text-sm mb-4">{job.about}</p>
                          <h4 className="font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2 text-sm text-slate-400">
                            {job.requirements.map(({ text, color }) => (
                              <li key={text} className="flex items-start gap-2">
                                <Check className={`w-4 h-4 ${color} mt-0.5 flex-shrink-0`} />
                                {text}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            {job.category === 'graduate' ? 'Program Benefits' : 'Responsibilities'}
                          </h4>
                          <ul className="space-y-2 text-sm text-slate-400">
                            {job.responsibilities.map(({ text, color }) => (
                              <li key={text} className="flex items-start gap-2">
                                <ChevronRight className={`w-4 h-4 ${color} mt-0.5 flex-shrink-0`} />
                                {text}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => handleApplyNow(job.title)}
                            className={`inline-flex items-center gap-2 mt-6 px-6 py-3 ${job.applyBtnClass} text-white font-semibold rounded-lg transition-all`}
                          >
                            Apply Now <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {visibleJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-slate-400">Check back later or send us your CV for future opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-slate-900 relative overflow-hidden" id="apply" ref={applyRef}>
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold mb-4 text-white">Apply Now</h2>
              <p className="text-slate-400">Submit your application and we'll get back to you within 5 working days.</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                Thank you for your application! We will review your details and contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                  <input type="text" required placeholder="John" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                  <input type="text" required placeholder="Doe" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                  <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone *</label>
                  <input type="tel" required placeholder="+44 1234 567890" className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Position Applying For *</label>
                <select
                  required
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                >
                  <option value="">Select a position...</option>
                  <option>Senior Control Systems Engineer</option>
                  <option>SCADA Engineer</option>
                  <option>Graduate Automation Engineer</option>
                  <option>Technical Support Engineer</option>
                  <option>Future Opportunities</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Cover Letter / Message *</label>
                <textarea rows={4} required placeholder="Tell us why you're interested in this role and what you can bring to the team..." className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Upload CV *</label>
                <label className="block border-2 border-dashed border-slate-800 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <UploadCloud className="w-10 h-10 text-slate-500 mx-auto mb-3" />
                  <p className="text-slate-400 text-sm mb-2">Drag and drop your CV here, or click to browse</p>
                  <p className="text-slate-600 text-xs">PDF, DOC, DOCX up to 5MB</p>
                  <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="privacy-careers" required className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-primary focus:ring-primary focus:ring-offset-slate-900" />
                <label htmlFor="privacy-careers" className="text-sm text-slate-400">
                  I consent to TAYS Automation processing my personal data for recruitment purposes in accordance with the GDPR policy. *
                </label>
              </div>

              <button type="submit" className="w-full py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25">
                Submit Application <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4 text-white">Employee Stories</h2>
            <p className="text-slate-400">Hear from our team about life at TAYS Automation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, color, iconColor, quote }) => (
              <div key={name} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}>
                    <User className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-sm text-slate-500">{role}</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm italic">"{quote}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">Don't See the Right Role?</h2>
          <p className="text-lg text-slate-400 mb-8">
            Send us your CV anyway — we're always interested in talented engineers and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
