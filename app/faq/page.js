import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'FAQ: Islamic School, Ontario Curriculum',
  description:
    'Answers about our online Islamic school for Grades 2-12: the Ontario curriculum, live classes, supervision, tuition, and how to enrol.',
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
          body: 'An online school for boys and girls in Grades 2 through 12, offering live, teacher-led classes and a complete, structured curriculum, all in one place.',
        },
        {
          heading: 'Are classes live or recorded?',
          body: 'Classes are live and led by a real teacher on a set daily timetable. Recordings are available afterward so students can review a lesson or catch up if they miss one.',
        },
        {
          heading: 'What grades do you serve?',
          body: 'Grades 2 through 12.',
        },
        {
          heading: 'Is the school co-ed?',
          body: 'Yes. Darul Haya welcomes both boys and girls in Grades 2 through 12. In the younger grades (2-5) students learn together, and from Grade 6 onward boys and girls are taught in separate classrooms.',
        },
        {
          heading: 'How are students supervised?',
          body: 'Classes are small, attendance and participation are tracked, and teachers are present throughout every session. There is no unsupervised private messaging between students and teachers. All communication happens in monitored class spaces. Because the environment is small and fully supervised, the social pressures and distractions common in larger settings aren\'t part of your child\'s day.',
        },
        {
          heading: 'Is online school really as effective as in-person?',
          body: 'For a lot of children it works better. Classes are live and small, so a teacher notices right away when someone is stuck. That is hard to do in a room of thirty. We take attendance daily, track participation, and record every lesson so nothing gets missed.',
        },
        {
          heading: 'Will my child be socially isolated?',
          body: 'No. Your child is in class with the same group every day, seeing and speaking with their teacher and classmates throughout the lesson. The circle is smaller and calmer than a big school, without the cliques and bullying that worry most parents.',
        },
        {
          heading: 'Will my child be at a disadvantage compared to children in regular school?',
          body: 'We think it is the other way around. Our program is accredited and follows the Ontario curriculum, so your child stays on grade level and can move to another school whenever you choose. In a class this small they also get far more of the teacher\'s time than they would in a full classroom.',
        },
        {
          heading: 'Why should we trust a brand-new school with our child?',
          body: 'That is a fair thing to ask. Our program is accredited and follows the Ontario curriculum, and the teachers here have a track record: their students finish their work and go on to high school ready. Classes are small and closely supervised, and the whole day is open to you, so you can see what is being taught and how your child is doing. Come to a free open house and ask us whatever you want.',
        },
        {
          heading: 'Isn\'t this too much screen time?',
          body: 'Less than parents expect, and the time on screen is spent working rather than scrolling. Lessons are guided and active, so your child is using the screen to think and produce something. A good part of the day is off the screen anyway. Every student gets physical books and materials shipped home, so reading, writing, and assignments happen on paper.',
        },
        {
          heading: 'Can my child return to a regular school later?',
          body: 'Yes. Core academic subjects are aligned to the Ontario curriculum, so your child stays on track with provincial expectations and can transition to any Ontario school at their grade level.',
        },
        {
          heading: 'What if it\'s not the right fit for us?',
          body: 'Talk to us before you enrol. We are happy to go through whether Darul Haya suits your child, answer your questions, and walk you through a normal school day so you can decide properly.',
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
          body: 'Tuition is $225/month for Grades 2-8 and $250/month for Grades 9-12. Everything is included. A 15% sibling discount applies for additional children enrolled, and there is a one-time $150 material fee and $100 technology fee at the start of each year.',
        },
        {
          heading: 'Do you offer Arabic classes?',
          body: 'Yes. Arabic language is part of every student\'s weekly schedule from Grade 2 through Grade 12, taught live by a dedicated teacher. Classes progress through reading, writing, and conversational Arabic in a structured, grade-appropriate sequence.',
        },
        {
          heading: 'Do students receive physical books?',
          body: 'Yes. Every enrolled student receives a set of physical books and materials shipped directly to their home, so there is no printing to do.',
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
