// Safety tools shown to reassure parents. To add a tool: drop its logo PNG in
// /public/safety/ and add an entry below (logo path, name, what it does).
const TOOLS = [
  {
    logo: '/safety/classroom-cloud.png',
    name: 'Classroom.cloud',
    body: 'Lets teachers see and guide student screens in real time, with built-in safeguarding and content monitoring throughout every class.',
  },
]

export default function SafetyTools() {
  return (
    <section id="safety" className="bg-beige-dark/40 border-y border-clay/10 py-16 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Safety First</p>
        <h2 className="text-3xl font-bold text-clay mb-3">Tools we use to keep your child safe</h2>
        <p className="text-clay/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Every class is actively supervised with trusted, education-grade safety technology — so you can have peace of mind about what your child sees and does online.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {TOOLS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-beige-dark shadow-sm flex flex-col items-center text-center w-full sm:w-72">
              <div className="mb-4 mx-auto h-16 w-40">
                <img src={t.logo} alt={t.name} className="h-full w-full object-contain" />
              </div>
              <h3 className="font-bold text-clay mb-1">{t.name}</h3>
              <p className="text-clay/50 text-sm leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
