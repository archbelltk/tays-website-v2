import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Privacy Policy</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How TAYS Automation collects, uses, and protects your personal data.
            </p>
            <p className="text-sm text-slate-500 mt-4">Last updated: April 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-slate max-w-none space-y-12">

            {/* 1 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">1. Who We Are</h2>
              <p className="text-slate-400 leading-relaxed">
                TAYS Automation is a trading name of Tays Engineering Ltd, a company registered in England and Wales.
                Our registered address is 1 Downview Way, Arundel, BN18 0HN, United Kingdom.
              </p>
              <p className="text-slate-400 leading-relaxed mt-3">
                We are the data controller for personal information collected through this website. If you have any
                questions about this policy, please contact us at{' '}
                <a href="mailto:tinashe@taysautomation.com" className="text-primary hover:underline">
                  tinashe@taysautomation.com
                </a>.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">2. What Data We Collect</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                We collect personal data in the following situations:
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li><span className="text-white font-medium">Contact form:</span> first name, last name, email address, phone number, company name, service interest, and your message.</li>
                <li><span className="text-white font-medium">Job applications:</span> first name, last name, email address, phone number, position applied for, cover letter, and CV/résumé.</li>
                <li><span className="text-white font-medium">Website usage:</span> we may collect anonymised analytics data (e.g. pages visited, browser type) to improve our website. This does not identify you personally.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
              <p className="text-slate-400 leading-relaxed mb-3">We use your personal data to:</p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li>Respond to your enquiries and provide the information or services you have requested.</li>
                <li>Process and manage job applications.</li>
                <li>Comply with legal and regulatory obligations.</li>
                <li>Improve our website and services based on anonymised usage data.</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                We will not use your data for unsolicited marketing without your explicit consent.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Under the UK GDPR, we process your data on the following lawful bases:
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li><span className="text-white font-medium">Consent</span> — when you submit a contact or application form and tick the consent checkbox.</li>
                <li><span className="text-white font-medium">Legitimate interests</span> — responding to business enquiries and improving our services.</li>
                <li><span className="text-white font-medium">Legal obligation</span> — where we are required to retain records by law.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">5. Data Retention</h2>
              <p className="text-slate-400 leading-relaxed">
                We retain personal data only for as long as necessary for the purpose it was collected:
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside mt-3">
                <li>Contact enquiries: up to 12 months after the enquiry is resolved.</li>
                <li>Job applications: up to 6 months after the recruitment process concludes, unless you consent to being kept on file for future roles.</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                After these periods, your data is securely deleted.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">6. Sharing Your Data</h2>
              <p className="text-slate-400 leading-relaxed">
                We do not sell, rent, or trade your personal data. We may share it only with:
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside mt-3">
                <li>Internal staff who need access to process your enquiry or application.</li>
                <li>IT service providers (e.g. hosting, email) who process data on our behalf under data processing agreements.</li>
                <li>Law enforcement or regulatory bodies if we are legally required to do so.</li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">7. Cookies</h2>
              <p className="text-slate-400 leading-relaxed">
                Our website may use essential cookies to ensure it functions correctly. We do not currently use tracking
                or advertising cookies. If this changes, we will update this policy and request your consent.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">8. Your Rights</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="space-y-2 text-slate-400 list-disc list-inside">
                <li><span className="text-white font-medium">Access</span> — request a copy of the personal data we hold about you.</li>
                <li><span className="text-white font-medium">Rectification</span> — ask us to correct inaccurate or incomplete data.</li>
                <li><span className="text-white font-medium">Erasure</span> — request deletion of your personal data where there is no lawful reason to retain it.</li>
                <li><span className="text-white font-medium">Restriction</span> — ask us to limit how we process your data in certain circumstances.</li>
                <li><span className="text-white font-medium">Portability</span> — receive your data in a structured, machine-readable format.</li>
                <li><span className="text-white font-medium">Withdraw consent</span> — at any time, where processing is based on consent.</li>
                <li><span className="text-white font-medium">Object</span> — to processing based on legitimate interests.</li>
              </ul>
              <p className="text-slate-400 leading-relaxed mt-3">
                To exercise any of these rights, please email{' '}
                <a href="mailto:tinashe@taysautomation.com" className="text-primary hover:underline">
                  tinashe@taysautomation.com
                </a>. We will respond within 30 days.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">9. Security</h2>
              <p className="text-slate-400 leading-relaxed">
                We take appropriate technical and organisational measures to protect your personal data against
                unauthorised access, loss, or disclosure. All data submitted via our website is transmitted over HTTPS.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We may update this Privacy Policy from time to time. The latest version will always be available on
                this page with the date it was last updated. We encourage you to review it periodically.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">11. Contact & Complaints</h2>
              <p className="text-slate-400 leading-relaxed">
                If you have concerns about how we handle your data, please contact us first at{' '}
                <a href="mailto:tinashe@taysautomation.com" className="text-primary hover:underline">
                  tinashe@taysautomation.com
                </a>. If you remain unsatisfied, you have the right to lodge a complaint with the
                Information Commissioner's Office (ICO) at{' '}
                <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  ico.org.uk
                </a>.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
