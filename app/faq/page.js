import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers about our online school for Grades 3–8 — live classes and homeschooling from home, supervision, tuition, Arabic, and how to enroll.',
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
          body: 'Classes are small, attendance and participation are tracked, and teachers are present throughout every session. There is no unsupervised private messaging between students and teachers — all communication happens in monitored class spaces. Because the environment is small and fully supervised, the social pressures and distractions common in larger settings aren\'t part of your child\'s day.',
        },
        {
          heading: 'Is online school really as effective as in-person?',
          body: 'For many children, it can be more effective. Classes are live and small, so teachers give each student real attention and notice right away when someone needs help — something that is hard to do in a crowded classroom. Participation and attendance are tracked every day, and every lesson is recorded so nothing is missed.',
        },
        {
          heading: 'Will my child be socially isolated?',
          body: 'No. Your child learns alongside classmates every day in a live, moderated setting — seeing and speaking with their teacher and peers throughout each class. It is a calmer, kinder social circle than many larger schools, without the bullying, cliques, and pressures that worry so many families.',
        },
        {
          heading: 'Will my child be at a disadvantage compared to children in regular school?',
          body: 'Just the opposite. Because our curriculum is fully Ontario-aligned, your child stays on grade level and can transition to any school at any time — no doors close. And in a small, focused class they get attention a crowded classroom simply can\'t match. A grounded, focused child isn\'t behind; they\'re ahead.',
        },
        {
          heading: 'Why should we trust a brand-new school with our child?',
          body: 'It\'s a fair question, and we\'d rather earn it than argue it. Darul Haya is led by Principal Mohammad Haaris Siddiqui; classes are small and closely supervised; and the whole day is built to be transparent, so you always see what\'s taught and how your child is doing. The best way to judge us is to meet us — join a free open house, ask us anything, and decide with your own eyes.',
        },
        {
          heading: 'Isn\'t this too much screen time?',
          body: 'It is more balanced than parents expect, and the screen time that remains is purposeful. Guided, active online learning builds the mental pathways for using a screen to focus, think, and create — the opposite of the passive, endless scrolling that hooks so many children elsewhere. And much of the work happens off-screen entirely: every enrolled student receives physical books and materials shipped to their home, so reading, writing, and assignments happen on paper, not only on a device.',
        },
        {
          heading: 'Can my child return to a regular school later?',
          body: 'Yes. Core academic subjects are aligned to the Ontario curriculum, so your child stays on track with provincial expectations and can transition to any Ontario school at their grade level.',
        },
        {
          heading: 'What if it\'s not the right fit for us?',
          body: 'Reach out before you enrol — we are glad to talk through whether Darul Haya suits your child, answer your questions, and walk you through a typical school day, so you can decide with confidence.',
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
          body: 'Tuition is a flat $300/month — one program, everything included. A 15% sibling discount applies for additional children enrolled, and there is a one-time $150 material fee and $100 technology fee at the start of each year.',
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
