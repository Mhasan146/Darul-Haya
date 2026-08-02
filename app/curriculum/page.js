import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Islamic School Curriculum, Grades 2–12',
  description:
    'What students learn at our online Islamic school: Ontario-aligned Language Arts, Math, Science and Social Studies, Grades 2–12, plus Arabic.',
  alternates: { canonical: '/curriculum' },
}

export default function CurriculumPage() {
  return (
    <PagePlaceholder
      eyebrow="Programs & Classes"
      title="Curriculum"
      intro="Our curriculum pairs strong, provincially-aligned academics with character and values education, delivered in a structured sequence from Grade 2 through Grade 12."
      sections={[
        {
          id: 'grades',
          heading: 'Grade Levels (2–12)',
          body: 'Elementary (Grades 2–5) focuses on building strong foundations — fluent reading and writing, number sense and core math, and curiosity about the world through science and social studies — all at a pace that lets younger students feel secure and supported. At this stage boys and girls learn together.\n\nMiddle School (Grades 6–8) builds on those foundations with more advanced material, greater independence, and stronger study skills, in a focused, supervised environment. From Grade 6, boys and girls are taught in separate classrooms.\n\nHigh School (Grades 9–12) continues with a rigorous, Ontario-aligned program that keeps students on track toward graduation and their next steps, taught in the same small, closely supervised classes.',
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
          body: 'Arabic language classes are part of every student\'s weekly schedule from Grade 2 through Grade 12. Classes are taught live by a dedicated teacher and progress through reading, writing, and conversational Arabic in a structured, grade-appropriate sequence.',
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
