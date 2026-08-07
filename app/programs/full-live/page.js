import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Live Islamic School: Ontario Curriculum from $225/mo',
  description:
    'Daily teacher-led live classes, shipped physical books, and small class sizes for Grades 2-12. Save thousands over traditional private school.',
  alternates: { canonical: '/programs/full-live' },
}

export default function FullLivePage() {
  return (
    <PagePlaceholder
      eyebrow="Daily Experience"
      title="A Real School Day: Live, Structured, and Safe"
      intro="Darul Haya is a complete alternative to traditional school. Your child attends live, teacher-led classes every weekday on a set timetable, experiencing real classroom accountability from the comfort and safety of home."
      sections={[
        {
          heading: 'Daily Live Classes',
          body: 'Every morning begins with a structured schedule. Students log into live video sessions, participate in real-time discussions, and complete hands-on exercises with scheduled breaks throughout the day. Teachers take roll call, answer questions live, and assign work in real time. It offers all the discipline of top private schools without the commute or social toxicity.',
        },
        {
          heading: 'The Curriculum',
          body: 'Complete curriculum coverage across Language Arts, Mathematics, Science, Social Studies, Arabic, and Character Development. Every course complies with provincial expectations, giving your child an accredited, seamless path forward.',
        },
        {
          heading: "What's Included",
          body: "Everything required for a successful academic year:\n\n• Full access to our secure Learning Management System (LMS)\n• Daily live interactive classes with certified teachers\n• On-demand access to full class recordings for easy revision\n• Physical textbooks and workbooks shipped directly to your door\n• Real-time Parent Portal for tracking grades, attendance, and work\n• Built-in live Arabic language curriculum\n• Direct email and messaging support with your child's teachers\n\nTransparent Tuition: $225/month (Grades 2-8) or $250/month (Grades 9-12). Automatic 15% discount for additional siblings. Annual flat $150 material fee and $100 technology fee per student.",
        },
        {
          heading: "Who It's For",
          body: 'Ideal for families who demand academic excellence, structured routines, and moral protection for their children. Whether you want to escape overcrowded public schools, avoid expensive private school tuition, or eliminate dangerous peer pressure, Darul Haya provides the ultimate solution.',
        },
      ]}
      cta={{ label: 'Apply Now', href: '/register' }}
    />
  )
}
