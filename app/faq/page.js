import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Darul Haya FAQ: Tuition, Curriculum & Daily Schedule',
  description:
    'Got questions about online Islamic schooling? Learn about our Ontario curriculum standards, daily live schedules, and tuition rates.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <PagePlaceholder
      eyebrow="Help Center"
      title="Everything You Need to Know"
      intro="Clear answers about admissions, technology, curriculum, and daily student life. Need direct assistance? Contact our team anytime."
      sections={[
        {
          heading: 'What is Darul Haya?',
          body: 'A structured, live online school for boys and girls in Grades 2-12 offering complete Ontario curriculum instruction, live Arabic classes, and small group attention.',
        },
        {
          heading: 'Are classes live or pre-recorded?',
          body: 'All core classes are 100 percent live and interactive. Class recordings are archived afterwards so students can review lessons before tests or catch up after an illness.',
        },
        {
          heading: 'What grades do you accept?',
          body: 'We accept students in Grades 2 through 12.',
        },
        {
          heading: 'Is the school co-educational?',
          body: 'Yes. In Grades 2-5, boys and girls learn together in small cohorts. Starting in Grade 6 through Grade 12, boys and girls are taught in separate, dedicated live classrooms.',
        },
        {
          heading: 'How are students monitored and supervised online?',
          body: 'Classes are kept small and actively moderated by teachers. We utilize Classroom.cloud software to monitor screen activity and prevent improper internet browsing. Private unmonitored messaging between students is strictly disabled.',
        },
        {
          heading: 'Is online school really as effective as in-person?',
          body: 'It is often vastly more effective. In a 30-student brick-and-mortar room, quiet kids get ignored and distracted kids fall behind. Our live classes are kept small so teachers actively engage every student. With daily attendance, live monitoring, and full recordings, zero learning gaps occur.',
        },
        {
          heading: 'Will my child lose social development?',
          body: 'They actually gain better social skills. Your child interacts live with teachers and peers daily in a controlled, respectful space free from toxic cliques, swearing, or bullying. They form healthy friendships based on shared values.',
        },
        {
          heading: 'Will my child be at an academic disadvantage?',
          body: 'No, they gain an academic edge. Our curriculum follows Ontario standards strictly, allowing seamless transitions to any university or high school. Plus, the smaller class sizes yield far more direct teacher interaction than traditional schools offer.',
        },
        {
          heading: 'Why should we trust a newer online school?',
          body: 'Our founders bring over 15 years of Ontario classroom experience. We combine accredited provincial learning standards, active screen monitoring (Classroom.cloud), and complete parent portal access so you can inspect learning in real time.',
        },
        {
          heading: 'Is this going to cause screen fatigue?',
          body: 'No. We intentionally balance screen time. Lessons are interactive discussions, and students complete their actual reading, problem solving, and writing on physical printed workbooks that we ship to your home.',
        },
        {
          heading: 'Can my child return to a regular brick-and-mortar school later?',
          body: 'Yes. Because our academic courses follow the official Ontario curriculum, your child can seamlessly transfer back to any public or private school at their current grade level.',
        },
        {
          heading: 'Is the curriculum accredited to provincial standards?',
          body: 'Yes. All core subjects align directly with Ontario Ministry of Education standards.',
        },
        {
          heading: 'What computer equipment do we need?',
          body: 'A desktop, laptop, or tablet with a working webcam, a reliable internet connection, and a quiet learning space. Textbooks are shipped directly to you.',
        },
        {
          heading: 'What is the complete cost?',
          body: 'Tuition is $225/month for Grades 2-8 and $250/month for Grades 9-12. Sibling discount is 15%. Annual flat $150 material fee (covers shipped books) and $100 tech fee per child.',
        },
        {
          heading: 'Do you teach Arabic?',
          body: "Yes. Daily and weekly live Arabic instruction is built into every grade level's schedule at no extra charge.",
        },
        {
          heading: 'Do we have to print workbooks at home?',
          body: 'No. We ship physical, printed books and workbooks directly to your home before the school year begins.',
        },
        {
          heading: 'What if we enroll and decide it is not the right fit?',
          body: "Speak with us. We offer thorough consultation calls prior to start dates to ensure Darul Haya fits your family's exact needs before you commit long term.",
        },
        {
          heading: 'How do we apply?',
          body: 'Click "Apply Now" on our website to fill out our quick 5-minute form. Our admissions team will contact you to finalize enrollment.',
        },
      ]}
      cta={{ label: 'Still have questions? Contact us', href: '/contact' }}
    />
  )
}
