import { useEffect } from 'react'
import { X } from 'lucide-react'

interface Props {
  onAccept: () => void
  onClose: () => void
}

export default function PrivacyPolicyModal({ onAccept, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="font-display text-xl font-bold text-white">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto p-6 space-y-6 text-sm text-slate-400 leading-relaxed">
          <div>
            <h3 className="font-semibold text-white mb-2">1. Who We Are</h3>
            <p>TAYS Automation is a trading name of Tays Engineering Ltd, registered in England and Wales. Registered address: 1 Downview Way, Arundel, BN18 0HN, United Kingdom.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">2. What Data We Collect</h3>
            <p>We collect the information you provide when submitting an enquiry or job application: name, email address, phone number, company name, and message content. For applications, we also collect your CV and cover letter.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">3. How We Use Your Data</h3>
            <p>Your data is used solely to respond to your enquiry or process your job application. We will not use your information for unsolicited marketing without your consent.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">4. Legal Basis</h3>
            <p>We process your data on the basis of your consent, which you provide by submitting this form. You may withdraw consent at any time by contacting us at <a href="mailto:tinashe@taysautomation.com" className="text-primary hover:underline">tinashe@taysautomation.com</a>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">5. Data Retention</h3>
            <p>Enquiries are retained for up to 12 months. Job application data is retained for up to 6 months after the recruitment process concludes, then securely deleted.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">6. Your Rights</h3>
            <p>Under UK GDPR you have the right to access, rectify, erase, or restrict your personal data. To exercise these rights, contact us at <a href="mailto:tinashe@taysautomation.com" className="text-primary hover:underline">tinashe@taysautomation.com</a>. You may also lodge a complaint with the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ico.org.uk</a>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">7. Data Sharing</h3>
            <p>We do not sell or rent your data. It is shared only with internal staff and IT service providers who process it on our behalf under appropriate data processing agreements.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all text-sm font-medium"
          >
            Close
          </button>
          <button
            onClick={onAccept}
            className="px-5 py-2.5 rounded-lg bg-primary hover:bg-sky-600 text-white text-sm font-semibold transition-all"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
