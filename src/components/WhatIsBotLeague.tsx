const FEATURES = [
  {
    n: '01',
    title: 'Structured Events',
    desc: 'From one-off events to a year-round competitive season with official rankings.',
    icon: '🗓️',
  },
  {
    n: '02',
    title: 'Digital Identity',
    desc: 'Your professional robotics legacy, tracked and verified on the national platform.',
    icon: '🪪',
  },
  {
    n: '03',
    title: 'National Ranking',
    desc: 'Benchmark your skills against the best engineers and builders across India.',
    icon: '📊',
  },
  {
    n: '04',
    title: 'Career Pathway',
    desc: 'Turning arena victories into real-world industry opportunities and placements.',
    icon: '🚀',
  },
]

export default function WhatIsBotLeague() {
  return (
    <section className="section-pad !py-20 grid md:grid-cols-2 gap-16 items-center">
      {/* Left: Feature list */}
      <div>
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase mb-10">
          What is BotLeague?
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          {FEATURES.map((f) => (
            <div key={f.n} className="group">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-red font-display font-black text-lg">{f.n}</span>
                <span className="text-xl">{f.icon}</span>
              </div>
              <p className="font-display font-black uppercase text-sm">{f.title}</p>
              <p className="text-white/50 text-xs mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Digital ID card */}
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-brand-blue/10 blur-[60px] rounded-full pointer-events-none" />

        <div className="relative border border-line rounded-none bg-panel2 p-6 overflow-hidden">
          {/* Grid bg */}
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,#2a2a30_0,#2a2a30_1px,transparent_1px,transparent_18px)]" />

          {/* Card header */}
          <div className="relative flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-display uppercase tracking-[0.3em] text-white/30">BotLeague</p>
              <p className="font-display font-black uppercase text-sm">Verified Robotics Profile</p>
            </div>
            <span className="text-brand-red text-2xl">⚡</span>
          </div>

          {/* Avatar */}
          <div className="relative flex flex-col items-center gap-4 py-6">
            <div className="h-24 w-24 rounded-full border-2 border-brand-blue flex items-center justify-center font-display font-black text-3xl bg-brand-blue/10 shadow-[0_0_30px_rgba(43,75,242,0.4)]">
              🤖
            </div>
            <div className="text-center">
              <p className="font-display font-black uppercase">Player Name</p>
              <p className="text-brand-blue text-xs font-display uppercase tracking-widest mt-1">Elite · Rank #01</p>
            </div>

            {/* Stats grid */}
            <div className="w-full grid grid-cols-3 gap-3 mt-2">
              {[
                { label: 'Events', value: '24' },
                { label: 'Points', value: '50.8K' },
                { label: 'Wins', value: '18' },
              ].map((s) => (
                <div key={s.label} className="bg-ink/60 border border-line p-3 text-center">
                  <p className="font-display font-black text-lg text-brand-gold">{s.value}</p>
                  <p className="text-[10px] font-display uppercase tracking-widest text-white/30 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Barcode footer */}
          <div className="relative mt-2 flex items-center gap-3 border-t border-line pt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="w-0.5 bg-white/20"
                  style={{ height: `${8 + Math.random() * 14}px` }}
                />
              ))}
            </div>
            <span className="text-[8px] font-mono text-white/20 ml-auto">BL-IN-2025-001</span>
          </div>
        </div>
      </div>
    </section>
  )
}
