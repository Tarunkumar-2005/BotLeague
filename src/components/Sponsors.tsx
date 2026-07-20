const SPONSORS = [
  { name: 'NIT Delhi',    abbr: 'NITD',  color: '#2b4bf2' },
  { name: 'Indian Bit',   abbr: 'IB',    color: '#ef3340' },
  { name: 'NIT Silchar',  abbr: 'NITS',  color: '#f2b705' },
  { name: 'Robo Company', abbr: 'RC',    color: '#2b4bf2' },
  { name: 'IIT Bombay',   abbr: 'IITB',  color: '#ef3340' },
  { name: 'Robo Company', abbr: 'RC²',   color: '#f2b705' },
]

export default function Sponsors() {
  return (
    <section className="section-pad !py-16 border-t border-line bg-panel">
      <p className="eyebrow mb-10">Sponsors &amp; Partners</p>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
        {SPONSORS.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="group flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            {/* Logo placeholder circle with initials */}
            <div
              className="h-14 w-14 rounded-full border-2 flex items-center justify-center font-display font-black text-xs"
              style={{ borderColor: s.color, color: s.color, backgroundColor: `${s.color}15` }}
            >
              {s.abbr}
            </div>
            <p className="text-[10px] text-white/40 font-display tracking-wide uppercase text-center leading-tight group-hover:text-white/70 transition-colors">
              {s.name}
            </p>
          </div>
        ))}
      </div>

      {/* Ticker marquee */}
      <div className="mt-12 border-t border-line pt-8 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...SPONSORS, ...SPONSORS].map((s, i) => (
            <span
              key={i}
              className="font-display font-black uppercase tracking-widest text-white/10 text-lg"
            >
              {s.name} ·
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
