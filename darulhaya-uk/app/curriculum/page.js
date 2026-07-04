import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Curriculum — Ontario-Aligned Core Subjects + Arabic',
  description:
    'What students learn at our online school: Ontario-aligned Language Arts, Math, Science, and Social Studies for Grades 3–8, with Arabic in every weekly timetable.',
  alternates: { canonical: '/curriculum' },
}

export default function CurriculumPage() {
  return (
    <PagePlaceholder
      eyebrow="Programs & Classes"
      title="Curriculum"
      intro="Our curriculum pairs strong, provincially-aligned academics with character and values education, delivered in a structured sequence from Grade 3 through Grade 8."
      sections={[
        {
          id: 'grades',
          heading: 'Grade Levels (3–8)',
          body: 'Elementary (Grades 3–5) focuses on building strong foundations — fluent reading and writing, number sense and core math, and curiosity about the world through science and social studies — all at a pace that lets younger students feel secure and supported. At this stage boys and girls learn together.\n\nMiddle School (Grades 6–8) builds on those foundations with more advanced material, greater independence, and stronger study skills, preparing students for the demands of high school while keeping them in a focused, supervised environment. From Grade 6, boys and girls are taught in separate classrooms.',
        },
        {
          id: 'islamic',
          heading: 'Curriculum',
          body: 'Students study a full slate of core academic subjects alongside our character and values program. Academic subjects follow the Ontario curriculum to keep students aligned with provincial standards, while our values education supports each child\'s moral and personal development.',
        },
        {
          heading: 'Core Subjects',
          body: 'Language Arts (reading, writing, grammar, and comprehension), Mathematics, Science, and Social Studies — with additional enrichment and skills woven in across the year.',
        },
        {
          heading: 'Arabic Language',
          body: 'Arabic language classes are part of every student\'s weekly schedule from Grade 3 through Grade 8. Classes are taught live by a dedicated teacher and progress through reading, writing, and conversational Arabic in a structured, grade-appropriate sequence.',
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
