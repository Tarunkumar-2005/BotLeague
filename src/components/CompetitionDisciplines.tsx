const DISCIPLINES = [
  {
    title: 'Robo Race',
    image: '/images/robo_race.png',
    tag: 'Speed',
  },
  {
    title: 'Line Follower',
    image: '/images/line_follower.png',
    tag: 'Precision',
  },
  {
    title: 'RC Racing',
    image: '/images/rc_racing.png',
    tag: 'Control',
  },
  {
    title: 'FPV Drone Racing & Aeromodelling',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=600&q=80',
    tag: 'Aerial',
  },
  {
    title: 'Robo Hockey',
    image: '/images/robo_hockey.png',
    tag: 'Team Sport',
  },
  {
    title: 'Robo War',
    image: '/images/robo_war.png',
    tag: 'Combat',
  },
]

export default function CompetitionDisciplines() {
  return (
    <section id="events" className="section-pad !py-16 relative overflow-hidden">
      {/* Dot grid bg */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <p className="eyebrow relative">Sports</p>
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase mt-2 mb-10 relative">
        Competition Disciplines
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {DISCIPLINES.map((d) => (
          <div
            key={d.title}
            className="group relative rounded-none overflow-hidden border border-line hover:border-brand-red/60 transition-all duration-300 cursor-pointer"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

            {/* Tag */}
            <span className="absolute top-3 right-3 text-[10px] font-display font-semibold uppercase tracking-widest bg-brand-red text-white px-2 py-0.5">
              {d.tag}
            </span>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-display font-bold uppercase text-sm text-white leading-tight">
                {d.title}
              </p>
              <p className="mt-1.5 text-xs text-white/50 font-display uppercase tracking-widest group-hover:text-brand-red transition-colors">
                Learn More →
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
