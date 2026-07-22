import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'About Us — A Smaller, Safer Online School',
  description:
    'Why we founded Darul Haya: an online school for boys and girls in Grades 2–9 with small live classes, Arabic, and an Ontario-aligned curriculum.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="About Darul Haya"
      intro="Darul Haya is an online school for boys and girls in Grades 2 through 9, built around live, teacher-led classes and a complete, carefully chosen curriculum. It was founded by a teacher with more than fifteen years in the classroom — and a conviction that every child deserves small classes, real attention, and truly focused learning."
      sections={[
        {
          heading: 'Our Story',
          body: 'Darul Haya was founded by a teacher who spent over fifteen years in the classroom. Year after year, the same pattern appeared: capable, curious children who weren\'t truly learning — not because they couldn\'t, but because crowded classrooms made focused learning nearly impossible. Overstretched teachers had no time to give each child real attention, distractions pulled students off course, and bullying too often went unaddressed. Bright kids were coming home discouraged instead of growing.\n\nAfter fifteen years of watching children slip through the cracks of a system that was supposed to serve them, the answer became clear: build something different. Darul Haya is that answer — a small, structured online school where every student is known personally, every lesson is taught live by a real teacher, and the entire day is designed around the one thing crowded classrooms can\'t offer: focus.',
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
