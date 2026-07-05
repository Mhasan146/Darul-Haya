import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers about our online school for Years 4–9 — live classes and home education, supervision, fees, Arabic, and how to enrol.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <PagePlaceholder
      eyebrow="Help"
      title="Frequently Asked Questions"
      intro="Answers to the questions families ask most. Still have something on your mind? Reach out through our Contact page."
      sections={[
        {
          heading: 'What is Darul Haya UK?',
          body: 'An online school for boys and girls in Years 4 through 9, offering live, teacher-led classes and a complete, structured curriculum — all in one place.',
        },
        {
          heading: 'Are classes live or recorded?',
          body: 'Classes are live and led by a real teacher on a set daily timetable. Recordings are available afterward so students can review a lesson or catch up if they miss one.',
        },
        {
          heading: 'What year groups do you serve?',
          body: 'Years 4 through 9.',
        },
        {
          heading: 'Is the school co-ed?',
          body: 'Yes. Darul Haya UK welcomes both boys and girls in Years 4 through 9. In the younger years (4–6) students learn together, and from Year 7 onward boys and girls are taught in separate classrooms.',
        },
        {
          heading: 'How are students supervised?',
          body: 'Classes are small, attendance and participation are tracked, and teachers are present throughout every session. There is no unsupervised private messaging between students and teachers — all communication happens in monitored class spaces. Because the environment is small and fully supervised, the social pressures and distractions common in larger settings aren\'t part of your child\'s day.',
        },
        {
          heading: 'Is the curriculum aligned to the National Curriculum?',
          body: 'Yes. Core academic subjects are aligned to the National Curriculum for England so your child stays on track with their year group.',
        },
        {
          heading: 'What do we need to get started?',
          body: 'A computer or tablet, a reliable internet connection, and a quiet space to learn. That\'s it.',
        },
        {
          heading: 'What does it cost?',
          body: 'Tuition is a flat £300/month — one programme, everything included. A 15% sibling discount applies for additional children enrolled, and there is a one-time £150 material fee and £100 technology fee at the start of each year.',
        },
        {
          heading: 'Do you offer Arabic classes?',
          body: 'Yes. Arabic language is part of every student\'s weekly schedule from Year 4 through Year 9, taught live by a dedicated teacher. Classes progress through reading, writing, and conversational Arabic in a structured, year-appropriate sequence.',
        },
        {
          heading: 'Do students receive physical books?',
          body: 'Yes. Every enrolled student receives a set of physical books and materials shipped directly to their home — no printing needed.',
        },
        {
          heading: 'How do we enrol?',
          body: "Reach out through our Contact page and we'll walk you through enrolment and answer any questions about fit, timetable, and start dates.",
        },
      ]}
      cta={{ label: 'Still have questions? Contact us', href: '/contact' }}
    />
  )
}
