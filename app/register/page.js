import { Suspense } from 'react'
import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Apply to Darul Haya: 5-Minute Enrollment Form',
  description:
    'Secure your child\'s seat for September 2026. Quick 5-minute application for live online Islamic schooling (Grades 2-12).',
  alternates: { canonical: '/register' },
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-16">
        <div className="text-center mb-8">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Enrollment</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">Apply to Darul Haya (Takes 5 Minutes)</h1>
          <p className="mt-4 text-clay/80 leading-relaxed">
            Secure your child&rsquo;s seat for Fall 2026. Complete the brief form below and our admissions team will reach out to schedule your strategy call.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-8">
          <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-beige-dark" />}>
            <RegisterForm />
          </Suspense>
        </div>

        {/* Paper route, for families who would rather print or hand it in */}
        <div className="mt-6 bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <span aria-hidden="true" className="shrink-0 grid h-11 w-11 place-items-center rounded-xl bg-beige-dark text-teal-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v2.625a2.625 2.625 0 0 1-2.625 2.625H7.125A2.625 2.625 0 0 1 4.5 16.875V14.25M12 15V4.5m0 10.5-3.75-3.75M12 15l3.75-3.75" />
              </svg>
            </span>
            <div className="min-w-0">
              <h2 className="font-display text-xl font-bold text-clay">Prefer a paper form?</h2>
              <p className="mt-1.5 text-sm text-clay/80 leading-relaxed">
                Download the admission form, type straight into it or print it, then send it back to{' '}
                <a href="mailto:info@darulhaya.com" className="text-teal-dark font-medium hover:underline">info@darulhaya.com</a>{' '}
                or on WhatsApp. One form covers the whole family.
              </p>
              <a
                href="/Darul-Haya-Admission-Form.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold hover:bg-teal-dark transition-colors"
              >
                Download the admission form
                <span className="text-white/80 font-normal">PDF, 78 KB</span>
              </a>
            </div>
          </div>
        </div>

        {process.env.NEXT_PUBLIC_MOODLE_URL && (
          <p className="text-center text-sm text-clay/80 mt-6">
            Already a student?{' '}
            <a
              href={process.env.NEXT_PUBLIC_MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-dark font-medium hover:underline"
            >
              Student Login →
            </a>
          </p>
        )}
      </section>
    </div>
  )
}
