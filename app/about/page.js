import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'About Us — A Smaller, Safer Online School',
  description:
    'Why we founded Darul Haya: an online school for boys and girls in Grades 3–8 with small live classes, Arabic, and an Ontario-aligned curriculum.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="About Darul Haya"
      intro="Darul Haya is an online school for boys and girls in Grades 3 through 8, built around live, teacher-led classes and a complete, carefully chosen curriculum. It was founded by an educator who wanted a smaller, safer, more attentive alternative to crowded conventional classrooms — a place where students are known by name, lessons are taught in real time, and parents always know what their children are learning and who they're learning alongside."
      sections={[
        {
          heading: 'Our Story',
          body: 'Darul Haya began with a simple observation: many capable, motivated children were getting lost in large classrooms — overlooked by overstretched teachers, pulled off course by distractions, and in too many cases, held back by bullying that went unaddressed. Children who were bright, curious, and eager to learn were arriving home discouraged, anxious, and dreading the next day. We set out to build something different: a small, structured online school where every student is known personally, every lesson is delivered live by a real teacher, and the environment is close enough that bullying simply has nowhere to take root. Parents stay closely connected to their child\'s day, and students can focus on learning without fear of what the hallways hold. What started with a handful of families has grown into a community that shares the same priorities — strong academics, a wholesome environment, and an education parents can trust.',
        },
        {
          heading: 'Our Mission',
          body: 'Our mission is to give every student a strong academic foundation inside an environment that is safe, supervised, and focused. We want children to finish each year more confident, more capable, and more grounded — and we want parents to feel certain, every single day, that their child is in good hands and learning the right things.',
        },
        {
          heading: 'Our Approach',
          body: 'We teach in small, live classes led by dedicated teachers — not pre-recorded videos or busywork. Lessons are interactive, attendance and participation are tracked, and progress stays visible to parents throughout. Because classes are small and closely supervised, students get attention they\'d never receive in a crowded room, and the social pressures, distractions, and negative influences that worry so many families simply aren\'t part of the day. The result is a calm setting where children can concentrate, ask questions freely, and grow at their own best pace.',
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
