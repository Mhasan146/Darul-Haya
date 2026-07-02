import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Daily Live School — Online Classes for Grades 3–8',
  description:
    'A complete online school: live, teacher-led classes every school day for Grades 3–8, with recordings, Arabic, Ontario-aligned curriculum, and books shipped to your door. $300/month.',
  alternates: { canonical: '/programs/full-live' },
}

export default function FullLivePage() {
  return (
    <PagePlaceholder
      eyebrow="Programs & Classes"
      title="Full-Live Schooling"
      intro="Full-Live Schooling is our complete online program: your child joins live, teacher-led classes every school day, following a structured timetable across all their subjects. It's a full education delivered in real time — the structure and accountability of a traditional school, with the safety and focus of a small, supervised online classroom."
      sections={[
        {
          heading: 'Daily Live Classes',
          body: 'Each day follows a clear, predictable timetable. Students log in to live classes led by their teachers, move through their subjects on a set schedule, and have built-in breaks between sessions. Teachers take attendance, teach the lesson directly, answer questions in the moment, and assign and review work — just like a classroom, only smaller and calmer. Because everything happens live and on schedule, students stay in a steady routine, and parents always know where their child should be and what they\'re working on.',
        },
        {
          heading: 'The Curriculum',
          body: 'The program covers a full course load: language arts, mathematics, science, and social studies, alongside our character and values education and additional enrichment. Academic subjects are aligned to the Ontario curriculum so students stay on track with provincial expectations, while our broader program supports each child\'s growth into a thoughtful, well-rounded young person.',
        },
        {
          heading: "What's Included",
          body: "Everything your child needs for the full school year:\n\n• Access to our LMS — your child's online classroom where all lessons, assignments, and resources live in one place\n• Daily live classes across all core subjects\n• Full lesson recordings to review or catch up on missed sessions\n• A complete, structured daily timetable\n• All learning materials and worksheets, available through the LMS\n• Assignment submission and grading through the platform\n• Regular assessments and progress reports\n• A parent-facing dashboard so you always know where your child stands\n• Direct teacher support\n\nTuition is $300/month. A 15% sibling discount applies for additional children enrolled. There is also a $150 material fee and a $100 technology fee at the start of each year.",
        },
        {
          heading: "Who It's For",
          body: "Full-Live Schooling is for families who want the structure and accountability of a real school day, delivered in a small, safe, closely supervised online setting. It's ideal for parents who want to know exactly what their child is learning, who want them kept clear of the distractions and pressures of larger environments, and who value steady routine, strong academics, and a calm place to grow.",
        },
      ]}
      cta={{ label: 'Apply Now', href: '/register' }}
    />
  )
}
