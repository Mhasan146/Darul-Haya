import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = { title: 'Homeschooling Portal — Darul Haya' }

export default function HomeschoolPage() {
  return (
    <PagePlaceholder
      eyebrow="Programs & Classes"
      title="Homeschooling Portal"
      intro="The Homeschooling Portal is for families who want to lead their child's education at home while drawing on our full curriculum, materials, and structure. You set the pace; we provide the roadmap, the resources, and the support to make home learning organized and effective."
      sections={[
        {
          heading: 'How It Works',
          body: "Families access our complete curriculum and materials through the portal and work through them on their own schedule. Lessons, worksheets, and assignments are laid out clearly so you always know what comes next, and you can track your child's progress as they complete each unit. It gives homeschooling families the convenience of a ready-made, well-structured program without giving up the flexibility of learning at home.",
        },
        {
          heading: 'Curriculum & Materials',
          body: 'The portal provides a complete set of materials across all core subjects — lesson plans, readings, worksheets, assignments, and assessments — aligned to the Ontario curriculum, alongside our character and values content. Everything is organized by grade and subject so families can move through the year with structure and confidence.',
        },
        {
          heading: "What's Included",
          body: "Everything you need to run a structured, confident school year at home:\n\n• Access to our LMS — the portal where all curriculum, materials, and assignments are organized by grade and subject\n• Full curriculum across all core subjects\n• Lesson plans, readings, worksheets, and assignments — all downloadable\n• Assessments and answer keys\n• Progress tracking so you can see what's been completed\n• Step-by-step guidance on how to use the portal day to day\n• Email support",
        },
        {
          heading: "Who It's For",
          body: "The portal is for families who have chosen to homeschool and want a complete, well-organized curriculum to build their days around — parents who value flexibility and being directly involved in their child's learning, but who don't want to assemble a program from scratch or wonder whether they're covering the right things.",
        },
      ]}
      cta={{ label: 'Apply Now', href: '/register' }}
    />
  )
}
