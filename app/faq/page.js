import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = { title: 'FAQ — Darul Haya' }

export default function FaqPage() {
  return (
    <PagePlaceholder
      eyebrow="Help"
      title="Frequently Asked Questions"
      intro="Answers to the questions families ask most. Still have something on your mind? Reach out through our Contact page."
      sections={[
        {
          heading: 'What is Darul Haya?',
          body: 'An online school for boys and girls in Grades 3 through 8, offering live, teacher-led classes and a complete, structured curriculum — all in one place.',
        },
        {
          heading: 'Are classes live or recorded?',
          body: 'Classes are live and led by a real teacher on a set daily timetable. Recordings are available afterward so students can review a lesson or catch up if they miss one.',
        },
        {
          heading: 'What grades do you serve?',
          body: 'Grades 3 through 8.',
        },
        {
          heading: 'Is the school co-ed?',
          body: 'Yes. Darul Haya welcomes both boys and girls in Grades 3 through 8. In the younger grades (3–5) students learn together, and from Grade 6 onward boys and girls are taught in separate classrooms.',
        },
        {
          heading: 'How are students supervised?',
          body: 'Classes are small, attendance and participation are tracked, and teachers are present throughout every session. To protect your child\'s privacy, classes are audio-only — there are no cameras. There is no unsupervised private messaging between students and teachers — all communication happens in monitored class spaces. Because the environment is small and fully supervised, the social pressures and distractions common in larger settings aren\'t part of your child\'s day.',
        },
        {
          heading: 'Is the curriculum aligned to provincial standards?',
          body: 'Yes. Core academic subjects are aligned to the Ontario curriculum so your child stays on track with provincial expectations.',
        },
        {
          heading: 'What do we need to get started?',
          body: 'A computer or tablet, a reliable internet connection, and a quiet space to learn. That\'s it.',
        },
        {
          heading: 'What does it cost?',
          body: 'Full-Live Schooling is $300/month. A 15% sibling discount applies for additional children enrolled. There is also a $150 material fee and a $100 technology fee at the start of each year.',
        },
        {
          heading: 'Do you offer Arabic classes?',
          body: 'Yes. Arabic language is part of every student\'s weekly schedule from Grade 3 through Grade 8, taught live by a dedicated teacher. Classes progress through reading, writing, and conversational Arabic in a structured, grade-appropriate sequence.',
        },
        {
          heading: 'Do students receive physical books?',
          body: 'Yes. Every enrolled student receives a set of physical books and materials shipped directly to their home — no printing needed.',
        },
        {
          heading: 'How do we enroll?',
          body: "Reach out through our Contact page and we'll walk you through enrollment and answer any questions about fit, schedule, and start dates.",
        },
      ]}
      cta={{ label: 'Still have questions? Contact us', href: '/contact' }}
    />
  )
}
