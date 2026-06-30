import PagePlaceholder from '@/components/PagePlaceholder'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contact — Darul Haya' }

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact Us"
      title="Get in Touch"
      intro="We'd love to hear from you — send us a message and we'll get back to you soon."
    >
      <div className="bg-white rounded-2xl border border-beige-dark shadow-sm p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-clay mb-5">Send us a message</h2>
        <ContactForm />
      </div>

      <p className="text-center text-sm text-clay/70">
        Prefer email?{' '}
        <a href="mailto:info@darulhaya.com" className="text-teal font-medium hover:underline">info@darulhaya.com</a>
      </p>
    </PagePlaceholder>
  )
}
