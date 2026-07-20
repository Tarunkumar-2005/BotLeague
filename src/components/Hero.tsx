export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero_arena.png')" }}
      />
      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      {/* Red glow */}
      <div className="absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-brand-red/20 blur-[100px] pointer-events-none" />

      <div className="relative section-pad !pt-28 !pb-24 max-w-3xl">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 mb-6 bg-brand-red/10 border border-brand-red/40 rounded-full px-4 py-1.5">
          <span className="flex items-center gap-1.5 text-brand-red font-display font-semibold text-xs tracking-widest uppercase">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            Live: Episode 14 · Bengaluru Regionals
          </span>
          <span className="h-3 w-px bg-white/20" />
          <a href="#live" className="text-white/60 hover:text-white transition-colors text-xs font-display font-semibold tracking-widest uppercase">
            Watch Live ▶
          </a>
        </div>

        <h1 className="font-display font-black uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl">
          India's Ultimate <br />
          <span className="text-brand-red">Robotics Arena</span>
        </h1>

        <p className="mt-6 max-w-lg text-white/70 text-lg leading-relaxed">
          <span className="text-white font-semibold">Build. Compete. Rank.</span>{' '}
          The National Ecosystem for Robotics Arena
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="btn-primary !px-8 !py-4 !text-sm !rounded-none">
            Create Account
          </button>
          <button className="btn-outline !px-8 !py-4 !text-sm !rounded-none">
            Explore Events →
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-14 flex gap-10 flex-wrap">
          {[
            { value: '200+', label: 'Registered Teams' },
            { value: '12', label: 'Cities' },
            { value: '₹5L+', label: 'Prize Pool' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-white">{s.value}</p>
              <p className="text-white/40 text-xs font-display uppercase tracking-widest mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
