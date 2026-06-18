import RegisterForm from '@/components/RegisterForm'

export const metadata = {
  title: 'Apply — Darul Haya',
  description: 'Apply to Darul Haya. Tell us about your family and we will follow up to help you enroll.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-beige">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-16">
        <div className="text-center mb-8">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Admissions</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-clay leading-tight">Apply to Darul Haya</h1>
          <p className="mt-4 text-clay/60 leading-relaxed">
            Tell us about your family and we'll follow up by email to help you get enrolled. It only takes a minute.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-8">
          <RegisterForm />
        </div>

        <p className="text-center text-sm text-clay/50 mt-6">
          Already a student?{' '}
          <a
            href={process.env.NEXT_PUBLIC_MOODLE_URL || 'https://learn.darulhaya.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal font-medium hover:underline"
          >
            Student Login →
          </a>
        </p>
      </section>
    </div>
  )
}
