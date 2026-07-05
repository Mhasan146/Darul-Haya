import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Curriculum — National Curriculum Core Subjects + Arabic',
  description:
    'What students learn at our online school: National Curriculum–aligned English, Maths, Science, and Humanities for Years 4–9, with Arabic in every weekly timetable.',
  alternates: { canonical: '/curriculum' },
}

export default function CurriculumPage() {
  return (
    <PagePlaceholder
      eyebrow="Programmes & Classes"
      title="Curriculum"
      intro="Our curriculum pairs strong, National Curriculum–aligned academics with character and values education, delivered in a structured sequence from Year 4 through Year 9."
      sections={[
        {
          id: 'grades',
          heading: 'Year Groups (Years 4–9)',
          body: 'Primary (Years 4–6) focuses on building strong foundations — fluent reading and writing, number sense and core maths, and curiosity about the world through science and the humanities — all at a pace that lets younger students feel secure and supported. At this stage boys and girls learn together.\n\nLower Secondary (Years 7–9, Key Stage 3) builds on those foundations with more advanced material, greater independence, and stronger study skills, preparing students for the demands of GCSEs while keeping them in a focused, supervised environment. From Year 7, boys and girls are taught in separate classrooms.',
        },
        {
          id: 'islamic',
          heading: 'Curriculum',
          body: 'Students study a full slate of core academic subjects alongside our character and values programme. Academic subjects follow the National Curriculum for England to keep students on track with their year group, while our values education supports each child\'s moral and personal development.',
        },
        {
          heading: 'Core Subjects',
          body: 'English (reading, writing, grammar, and comprehension), Mathematics, Science, and Humanities (history, geography, and citizenship) — with additional enrichment and skills woven in across the year.',
        },
        {
          heading: 'Arabic Language',
          body: 'Arabic language classes are part of every student\'s weekly schedule from Year 4 through Year 9. Classes are taught live by a dedicated teacher and progress through reading, writing, and conversational Arabic in a structured, year-appropriate sequence.',
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
