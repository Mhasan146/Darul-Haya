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
