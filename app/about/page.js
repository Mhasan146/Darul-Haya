import PagePlaceholder from '@/components/PagePlaceholder'

export const metadata = {
  title: 'About Darul Haya: Safe, Live Online Islamic School',
  description:
    'Founded by veteran educators to solve crowded classroom failure. Discover our live, Ontario-aligned online Islamic school for Grades 2-12.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="Our Background"
      title="About Darul Haya: Restoring Purpose to Education"
      intro="Darul Haya is a structured online school for boys and girls in Grades 2 through 12. Built on small live classes and rigorous Ontario academic standards, we were established by veteran educators to provide the high-touch instruction that crowded physical classrooms can no longer deliver."
      sections={[
        {
          heading: 'Our Story',
          body: "Darul Haya was born out of frustration. After spending over fifteen years in traditional classrooms, our founder witnessed a heartbreaking, recurring pattern: talented, bright students falling behind simply because physical classrooms were too crowded, chaotic, and distracted. Overwhelmed teachers were forced to teach to the middle, leaving struggling students behind and advanced students bored, all while peer pressure and bullying eroded confidence.\n\nThe solution was clear: eliminate the classroom chaos and focus entirely on learning. Darul Haya was built from the ground up as a small, highly structured online environment where every student is known by name, every lesson is taught live by an expert, and moral safety is unconditionally protected.",
        },
        {
          heading: 'Our Mission',
          body: 'Our mission is to equip students with an unshakeable academic foundation and exemplary moral character inside a secure, focused learning environment. We measure our success by the confidence of our students and the peace of mind experienced by their parents.',
        },
        {
          heading: 'Our Approach',
          body: 'We reject passive, pre-recorded video learning. Every class at Darul Haya is taught live by real certified educators who track attendance, encourage live dialogue, and assess comprehension in real time. By maintaining small group sizes and deploying proactive screen supervision, we eliminate negative social pressures and technical distractions, allowing students to focus, ask questions, and excel.',
        },
      ]}
      cta={{ label: 'View Plans', href: '/#pricing' }}
    />
  )
}
