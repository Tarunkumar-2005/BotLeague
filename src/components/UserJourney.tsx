import { WrenchIcon, BuildingIcon, PersonIcon, GroupIcon } from './icons'

const STEPS = [
  { icon: WrenchIcon, step: 'Step 1', title: 'Build Your Team', desc: 'Register and form your squad of innovators.' },
  { icon: BuildingIcon, step: 'Step 2', title: 'Compete Across India', desc: 'Participate in regional events across the country.' },
  { icon: PersonIcon, step: 'Step 3', title: 'Earn National Ranking & Value', desc: 'Accumulate points and rise in the national index.' },
  { icon: GroupIcon, step: 'Step 4', title: 'Join The League', desc: 'Qualify for the BotLeague Elite Championship.' },
]

export default function UserJourney() {
  return (
    <section className="section-pad !py-20 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none" />

      <p className="eyebrow relative">User Journey</p>
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase mt-2 relative">
        Your Path To The League
      </h2>
      <p className="text-white/40 text-sm mt-3 relative">
        From first build to national glory — four steps to the top.
      </p>

      <div className="mt-16 relative flex flex-col md:flex-row items-start justify-center gap-8 md:gap-0">
        {/* Connector line */}
        <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" aria-hidden />

        {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
          <div key={step} className="relative flex flex-col items-center w-56 shrink-0 px-4">
            {/* Number badge */}
            <div className="absolute -top-3 -right-1 h-5 w-5 rounded-full bg-brand-red text-white font-display font-black text-[10px] flex items-center justify-center z-20">
              {i + 1}
            </div>
            {/* Icon circle */}
            <div className="h-20 w-20 rounded-full border-2 border-brand-red/60 flex items-center justify-center bg-panel2 relative z-10 shadow-[0_0_30px_rgba(239,51,64,0.2)]">
              <Icon className="h-7 w-7 text-brand-red" />
            </div>

            <p className="mt-4 text-brand-red text-[10px] font-display font-bold tracking-[0.25em] uppercase">
              {step}
            </p>
            <p className="mt-1.5 font-display font-black uppercase text-sm leading-tight">{title}</p>
            <p className="mt-2 text-white/40 text-xs leading-relaxed max-w-[160px]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
