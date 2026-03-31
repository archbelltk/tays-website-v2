import { useState } from 'react'
import { MapPin, Mail, Clock, Phone, Send, HelpCircle } from 'lucide-react'
import { SiX, SiYoutube } from '@icons-pack/react-simple-icons'

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

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
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Get in Touch</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Ready to automate your future? Contact us to discuss your next project and discover how
              we can transform your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <p className="text-slate-400 mb-8">
                  Reach out to us for enquiries about our automation services, project consultations,
                  or mentorship programs.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-primary" />,
                    title: 'Location',
                    lines: ['United Kingdom', 'Headquarters'],
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-primary" />,
                    title: 'Email',
                    lines: ['info@taysautomation.co.uk', 'sales@taysautomation.co.uk'],
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-primary" />,
                    title: 'Working Hours',
                    lines: ['Monday - Friday', '9:00 AM - 5:00 PM GMT'],
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-primary" />,
                    title: 'Phone',
                    lines: ['+44 (0) 1234 567890', '24/7 Emergency Support'],
                  },
                ].map(({ icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <div className="w-12 h-12 bg-slate-950 rounded-lg flex items-center justify-center border border-slate-800 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-slate-400 text-sm">
                        {lines.map((line, i) => (
                          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-slate-800">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: <LinkedInIcon />, label: 'LinkedIn' },
                    { icon: <SiX className="w-5 h-5" />, label: 'X (Twitter)' },
                    { icon: <SiYoutube className="w-5 h-5" />, label: 'YouTube' },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10">
                <h3 className="font-display text-2xl font-bold mb-2 text-white">Send us a Message</h3>
                <p className="text-slate-400 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    Thank you for your message. We will get back to you soon!
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="+44 1234 567890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest *</label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white transition-colors"
                      >
                        <option value="">Select a service...</option>
                        <option value="automation">Automation & Control Systems</option>
                        <option value="scada">RTS & SCADA Systems</option>
                        <option value="mentorship">Mentorship Program</option>
                        <option value="consulting">General Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Project Details *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                      placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-primary focus:ring-primary focus:ring-offset-slate-900"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-400">
                      I agree to the{' '}
                      <a href="#" className="text-primary hover:underline">Privacy Policy</a>{' '}
                      and consent to having my data processed for the purpose of this enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-2">
            <div className="bg-slate-900 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 circuit-pattern opacity-30" />
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">United Kingdom</h3>
                <p className="text-slate-400">Serving clients nationwide</p>
                <a
                  href="mailto:info@taysautomation.co.uk"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  info@taysautomation.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">Quick answers to common questions about our services.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What industries do you serve?',
                a: 'We serve a wide range of industries including pharmaceutical, food & beverage, energy, security, manufacturing, and water treatment. Our solutions are tailored to meet the specific regulatory and operational requirements of each sector.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on scope and complexity. A simple PLC upgrade might take 2–4 weeks, while a full SCADA implementation could take 6–12 months. We provide detailed timelines during our initial consultation.',
              },
              {
                q: 'Do you provide ongoing support?',
                a: 'Yes, we offer comprehensive maintenance contracts and 24/7 emergency support for all our installations. Our support team can provide remote assistance or on-site visits as required.',
              },
              {
                q: 'What PLC brands do you work with?',
                a: 'We are certified partners and have extensive experience with Rockwell Automation (Allen-Bradley), Siemens, Mitsubishi Electric, and Schneider Electric. We can also support legacy systems and other brands.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {q}
                </h4>
                <p className="text-slate-400 text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
