import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'Accredited Ontario Curriculum + Live Arabic',
  description:
    'Complete Grades 2-12 Ontario academic curriculum combined with daily live Arabic instruction. Learn how we keep your child on track.',
  alternates: { canonical: '/curriculum' },
}

export default function CurriculumPage() {
  return (
    <PagePlaceholder
      eyebrow="Academic Standards"
      title="Ontario Academic Excellence + Islamic Values"
      intro="Our academic program pairs complete provincial curriculum benchmarks with structured values education and daily live Arabic, guiding students seamlessly from Grade 2 through Grade 12 graduation."
      sections={[
        {
          id: 'grades',
          heading: 'Grade Levels (2-12)',
          body: 'Elementary (Grades 2-5): Focuses on core mastery: fluent reading comprehension, logical mathematical reasoning, and scientific inquiry in a warm, encouraging atmosphere. Boys and girls study together in small, friendly live cohorts.\n\nMiddle School (Grades 6-8): Transitioning into advanced study habits, critical analysis, and independent research. To respect developmental stages, boys and girls are educated in separate, focused online classrooms starting in Grade 6.\n\nHigh School (Grades 9-12): A rigorous university-preparatory track adhering strictly to Ontario secondary requirements, equipping students for top post-secondary admissions while safeguarding their values.',
        },
        {
          id: 'islamic',
          heading: 'Curriculum',
          body: 'Students follow a full academic schedule alongside character education. All core subjects strictly mirror official Ontario learning objectives, guaranteeing full academic credit recognition.',
        },
        {
          heading: 'Core Subjects',
          body: 'Language Arts (reading, writing, analysis, grammar), Mathematics, Science & Technology, and Social Studies/History.',
        },
        {
          heading: 'Arabic Language',
          body: "Arabic language instruction is fully integrated into every student's weekly timetable from Grade 2 through Grade 12. Taught live by specialized instructors, students progress systematically through reading, writing, and conversational mastery.",
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
