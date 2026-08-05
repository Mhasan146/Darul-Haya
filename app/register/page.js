import { Suspense } from 'react'
import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Apply: Islamic School, Ontario Curriculum',
  description:
    'Apply to Darul Haya, an online Islamic school for Grades 2-12 following the Ontario curriculum. A five-minute application.',
  alternates: { canonical: '/register' },
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-16">
        <div className="text-center mb-8">
          <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Admissions</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">Apply to Darul Haya</h1>
          <p className="mt-4 text-clay/80 leading-relaxed">
            Tell us about your family and we&rsquo;ll follow up by email to help you get enrolled. It only takes a minute.
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
