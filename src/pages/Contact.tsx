import { useState } from 'react'
import { Mail, Phone, HelpCircle, MapPin } from 'lucide-react'
import { SiWhatsapp } from '@icons-pack/react-simple-icons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    company: '', service: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message)
      setSubmitted(true)
      setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
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
                    lines: ['1 Downview Way, Arundel, BN18 0HN'],
                  },
                  {
                    icon: <Mail className="w-6 h-6 text-primary" />,
                    title: 'Email',
                    lines: ['tinashe@taysautomation.com'],
                  },
                  // {
                  //   icon: <Clock className="w-6 h-6 text-primary" />,
                  //   title: 'Working Hours',
                  //   lines: ['Monday - Friday', '9:00 AM - 5:00 PM GMT'],
                  // },
                  {
                    icon: <Phone className="w-6 h-6 text-primary" />,
                    title: 'Phone',
                    lines: ['+44 330 133 5282'],
                  },

                     {
                    icon: <SiWhatsapp className="w-6 h-6 text-primary" />,
                    title: 'WhatsApp',
                    lines: ['+44 7594 057017'],
                  }
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
              {/* <div className="pt-6 border-t border-slate-800">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: <LinkedInIcon />, label: 'LinkedIn' },
                    { icon: <SiX className="w-5 h-5" />, label: 'X (Twitter)' },
                    { icon: <SiYoutube className="w-5 h-5" />, label: 'YouTube' },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="https://www.linkedin.com/in/tays-engineering-consultancy-ta-tays-solar-tays-automation-16182b13a/"
                      aria-label={label}
                      className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div> */}
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
                {error && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name *</label>
                      <input
                        type="text" name="firstName" required value={form.firstName} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name *</label>
                      <input
                        type="text" name="lastName" required value={form.lastName} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="+44 1234 567890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-600 transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest *</label>
                      <select
                        name="service" required value={form.service} onChange={handleChange}
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
                      name="message" rows={5} required value={form.message} onChange={handleChange}
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
                      <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>{' '}
                      and consent to having my data processed for the purpose of this enquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-primary hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* <section className="py-24 bg-slate-900 relative overflow-hidden">
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
      </section> */}

      {/* FAQ Section */}
      <section className="py-24 bg-[#0e172a]">
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
