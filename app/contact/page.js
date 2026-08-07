import PagePlaceholder from '@/components/PagePlaceholder'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Darul Haya: Speak with Admissions',
  description:
    'Have questions about enrollment? Email info@darulhaya.com, send a message, or chat directly with our admissions team on WhatsApp.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Direct Support"
      title="Get in Touch with Our Admissions Team"
      intro="Have a question before applying? We are here to help. Send a message below for a quick response."
    >
      <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-clay mb-5">Send Us a Message</h2>
        <ContactForm />
      </div>

      <p className="text-center text-sm text-clay/80">
        Prefer direct email?{' '}
        <a href="mailto:info@darulhaya.com" className="text-teal-dark font-medium hover:underline">info@darulhaya.com</a>
      </p>
    </PagePlaceholder>
  )
}
