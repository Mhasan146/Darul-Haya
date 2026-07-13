import { Suspense } from 'react'
import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Apply Now — Enrolling for September 2026',
  description:
    'Apply to Darul Haya online school for Grades 3–8. A five-minute application — tell us about your family and we will personally help you enroll.',
  alternates: { canonical: '/register' },
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-16">
        <div className="text-center mb-8">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Admissions</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">Apply to Darul Haya</h1>
          <p className="mt-4 text-clay/60 leading-relaxed">
            Tell us about your family and we&rsquo;ll follow up by email to help you get enrolled. It only takes a minute.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-8">
          <Suspense fallback={<div className="h-80 animate-pulse rounded-xl bg-beige-dark" />}>
            <RegisterForm />
          </Suspense>
        </div>

        {process.env.NEXT_PUBLIC_MOODLE_URL && (
          <p className="text-center text-sm text-clay/70 mt-6">
            Already a student?{' '}
            <a
              href={process.env.NEXT_PUBLIC_MOODLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal font-medium hover:underline"
            >
              Student Login →
            </a>
          </p>
        )}
      </section>
    </div>
  )
}
