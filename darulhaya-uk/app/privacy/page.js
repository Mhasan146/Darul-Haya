import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Privacy Policy — Darul Haya',
  description: 'How Darul Haya collects, uses, and protects your personal information.',
}

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: `We collect information you provide directly when you register, contact us, or use our learning platform — including your name, email address, your child's name and year group, and communication preferences.`,
  },
  {
    heading: 'How We Use Your Information',
    body: `We use your information solely to manage enrolment, communicate about your child's education, provide access to our learning platform (learn.darulhaya.org), and respond to support requests. We do not sell or share your personal information with third parties for marketing purposes.`,
  },
  {
    heading: 'Data Storage & Security',
    body: `Your data is stored securely using industry-standard practices. Our learning platform is hosted on trusted infrastructure. We retain enrolment records for the duration of your child's enrolment and for up to two years thereafter for administrative purposes.`,
  },
  {
    heading: "Children's Privacy",
    body: `Darul Haya UK serves students in Years 4–9. We collect only the minimum information required to provide educational services to your child. We do not share student data with advertisers or unrelated third parties.`,
  },
  {
    heading: 'Your Rights',
    body: `You may request access to, correction of, or deletion of your personal information at any time by contacting us at info@darulhaya.org. UK residents have rights under the UK GDPR and the Data Protection Act 2018, including the right to access, rectify, erase, and restrict the processing of their personal data, and the right to complain to the Information Commissioner's Office (ICO).`,
  },
  {
    heading: 'Contact',
    body: `For any privacy questions or concerns, please email info@darulhaya.org or use the contact form at darulhaya.org/contact. We will respond within five business days.`,
  },
]

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how Darul Haya collects, uses, and protects the information you provide when enrolling or contacting us."
      sections={SECTIONS}
      cta={{ href: '/contact', label: 'Questions? Contact Us' }}
    />
  )
}
