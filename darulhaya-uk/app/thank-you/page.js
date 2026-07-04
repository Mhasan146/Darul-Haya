import Link from 'next/link'

export const metadata = { title: 'Application received — Darul Haya' }

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-beige flex items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <div className="text-5xl mb-4">🌙</div>
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Application received</p>
        <h1 className="text-4xl font-bold text-clay">Thank you!</h1>
        <p className="mt-4 text-clay/60 leading-relaxed">
          We've received your application for Darul Haya. Our team will review it and reach out by
          email within a few days with the next steps to get your child enrolled.
        </p>
        <p className="mt-2 text-clay/60 leading-relaxed">
          In the meantime, feel free to explore our programs or reach out with any questions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link href="/" className="bg-teal text-white px-7 py-3 rounded-full font-semibold hover:bg-teal-dark transition-colors">
            Back to Home
          </Link>
          <Link href="/contact" className="text-clay font-medium hover:text-teal transition-colors">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  )
}
