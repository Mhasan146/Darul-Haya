import Image from 'next/image'

// Safety tools shown to reassure parents. To add a tool: drop its logo PNG in
// /public/safety/ and add an entry below (logo path, name, what it does).
const TOOLS = [
  {
    logo: '/safety/classroom-cloud.png',
    name: 'Classroom.cloud',
    body: 'Enterprise integration: real-time live screen monitoring, automated web filtering, and active teacher intervention to prevent online distractions or safety risks.',
  },
]

export default function SafetyTools() {
  return (
    <section id="safety" className="relative overflow-hidden bg-beige border-y border-clay/10 py-20 scroll-mt-24">      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-teal-dark text-sm font-semibold uppercase tracking-widest mb-3">Ironclad Safety</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-clay">Proactive screen monitoring and digital protection</h2>
        <div className="gold-rule mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-amber to-transparent" />
        <p className="text-clay/80 max-w-2xl mx-auto mt-5 mb-10 leading-relaxed">
          We utilize bank-grade educational monitoring tech to ensure your child remains focused, safe, and protected every minute they are online.
        </p>

        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {TOOLS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-beige-dark shadow-sm flex flex-col sm:flex-row items-center gap-6 w-full">
              <div className="shrink-0 h-16 w-40">
                <Image src={t.logo} alt={t.name} width={160} height={64} className="h-full w-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-clay mb-1">{t.name}</h3>
                <p className="text-clay/80 text-sm leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
