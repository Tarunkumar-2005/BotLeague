import { MedalIcon, GavelIcon, BriefcaseIcon, BoltIcon } from './icons'

const ADVANTAGES = [
  {
    icon: MedalIcon,
    title: 'National Recognition',
    desc: 'Compete on a verified national platform. Your victories count, everywhere.',
  },
  {
    icon: GavelIcon,
    title: 'Fair Judging',
    desc: 'Standardised scoring, certified judges, and transparent results across all events.',
  },
  {
    icon: BriefcaseIcon,
    title: 'Career Ops',
    desc: 'Bridge the gap between arena victories and top-tier tech placements.',
  },
  {
    icon: BoltIcon,
    title: 'High-Energy Eco',
    desc: 'Join a nationwide community of innovators and robotics athletes.',
  },
]

const LEADERBOARD = [
  { rank: '02', name: 'Arjun Mehta', score: '22,020', flag: '🔵' },
  { rank: '03', name: 'Priya Nair', score: '20,030', flag: '🟣' },
  { rank: '04', name: 'Rohan Das', score: '19,520', flag: '🟢' },
  { rank: '05', name: 'Sneha Rao', score: '15,060', flag: '🔴' },
  { rank: '06', name: 'Karan Singh', score: '13,655', flag: '🟡' },
  { rank: '07', name: 'Divya Shah', score: '10,954', flag: '🔵' },
  { rank: '08', name: 'Amit Kumar', score: '9,057',  flag: '🟠' },
]

export default function WhyRegister() {
  return (
    <section className="section-pad !py-20 grid lg:grid-cols-2 gap-14 items-start bg-panel border-y border-line relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-brand-red/10 blur-[80px] pointer-events-none" />

      {/* Left: advantages */}
      <div>
        <p className="eyebrow">Why Register?</p>
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase mt-2 mb-10">
          The League Advantage
        </h2>

        <div className="flex flex-col gap-7">
          {ADVANTAGES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start group">
              <div className="h-10 w-10 shrink-0 rounded-full bg-brand-red/15 border border-brand-red/30 text-brand-red flex items-center justify-center group-hover:bg-brand-red/25 transition-colors">
                <Icon className="h-[18px] w-[18px]" />
              </div>
              <div>
                <p className="font-display font-black uppercase text-sm">{title}</p>
                <p className="text-white/50 text-xs mt-1.5 leading-relaxed max-w-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Leaderboard */}
      <div className="bg-panel2 border border-line rounded-none p-5">
        <div className="flex items-center justify-between mb-5">
          <p className="font-display font-black uppercase tracking-wide text-sm">Leaderboard</p>
          <span className="text-[10px] font-display uppercase tracking-widest text-white/30 border border-line px-2 py-0.5">
            Season 2025
          </span>
        </div>

        {/* Rank #1 */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-brand-gold/15 to-transparent border border-brand-gold/40 rounded-none p-4 mb-4">
          <div className="h-11 w-11 rounded-full bg-brand-gold text-ink flex items-center justify-center font-display font-black text-sm shrink-0 shadow-[0_0_20px_rgba(242,183,5,0.4)]">
            01
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-display font-black text-sm">Vikram Reddy</p>
            <p className="text-white/40 text-xs mt-0.5">Bengaluru · Elite Division</p>
          </div>
          <div className="text-right">
            <p className="font-display font-black text-brand-gold">508,754</p>
            <p className="text-[10px] text-white/30 font-display uppercase tracking-widest">pts</p>
          </div>
        </div>

        {/* Rest */}
        <div className="flex flex-col gap-2">
          {LEADERBOARD.map((row) => (
            <div
              key={row.rank}
              className="flex items-center gap-3 text-xs bg-ink/40 border border-line/50 px-3 py-2.5 hover:border-white/20 transition-colors group"
            >
              <span className="text-white/30 font-display font-bold w-5 shrink-0">{row.rank}</span>
              <span className="text-base">{row.flag}</span>
              <span className="text-white/70 font-display flex-1 group-hover:text-white transition-colors">
                {row.name}
              </span>
              <span className="text-white/40 font-display font-semibold">{row.score}</span>
            </div>
          ))}
        </div>

        <button className="btn-primary w-full mt-5 !py-2.5 !text-xs !rounded-none">
          View Full Rankings →
        </button>
      </div>
    </section>
  )
}
