type EventCard = {
  title: string
  date: string
  location: string
  category: string
}

const UPCOMING: EventCard[] = [
  { title: 'Event in Mumbai', date: '11 Nov 2025', location: 'BKC, Mumbai', category: 'Junior' },
  { title: 'Event in Delhi', date: '18 Nov 2025', location: 'Connaught Place', category: 'Senior' },
]

const PAST_RESULTS = [
  { title: 'Bengaluru Regionals', date: 'Oct 2025', winner: 'Team Volt' },
  { title: 'Bengaluru Regionals', date: 'Sep 2025', winner: 'RoboKings' },
  { title: 'Bengaluru Regionals', date: 'Aug 2025', winner: 'Circuit Breakers' },
]

function BracketNode({ highlight = false }: { highlight?: boolean }) {
  return (
    <div
      className={`h-7 w-20 rounded-sm border flex items-center px-2 ${
        highlight
          ? 'border-brand-red/70 bg-brand-red/20 text-brand-red'
          : 'border-white/10 bg-white/5 text-white/30'
      } text-[10px] font-display uppercase tracking-wide`}
    >
      {highlight ? 'WINNER' : 'Team'}
    </div>
  )
}

function Bracket() {
  return (
    <div className="flex items-center gap-5 py-3">
      <div className="flex flex-col gap-5">
        <BracketNode />
        <BracketNode />
        <BracketNode />
        <BracketNode />
      </div>
      <div className="flex flex-col gap-14">
        <BracketNode />
        <BracketNode />
      </div>
      <div>
        <BracketNode highlight />
      </div>
    </div>
  )
}

function EventRow({ event }: { event: EventCard }) {
  return (
    <div className="bg-panel2 border border-line rounded-none p-4 hover:border-brand-red/40 transition-colors group">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display font-bold uppercase text-sm">{event.title}</p>
        <span className="shrink-0 text-[10px] font-display uppercase tracking-wide bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded-sm">
          Upcoming
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-3 text-[11px] text-white/40 font-display uppercase tracking-wide">
        <span>
          Date<br />
          <span className="text-white/75 normal-case font-semibold">{event.date}</span>
        </span>
        <span>
          Location<br />
          <span className="text-white/75 normal-case font-semibold">{event.location}</span>
        </span>
        <span>
          Category<br />
          <span className="text-white/75 normal-case font-semibold">{event.category}</span>
        </span>
      </div>
      <button className="btn-primary w-full mt-4 !py-2 !text-xs !rounded-none group-hover:bg-brand-redDark">
        Register Now
      </button>
    </div>
  )
}

export default function CompetitionsEvents() {
  return (
    <section id="events" className="section-pad !py-16 bg-panel border-y border-line">
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase mb-10">
        Competitions &amp; Events
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Live Now */}
        <div>
          <p className="eyebrow mb-4">Live Now</p>
          <div className="bg-panel2 border border-line rounded-none p-4">
            <div className="flex items-center justify-between mb-1">
              <p className="font-display font-bold uppercase text-sm">Bengaluru Regionals</p>
              <span className="flex items-center gap-1.5 text-[10px] font-display uppercase tracking-wide text-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                Ongoing
              </span>
            </div>
            <p className="text-xs text-white/40 mb-4">Episode 14 · Bracket Stage</p>
            <div className="overflow-x-auto">
              <Bracket />
            </div>
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <p className="eyebrow mb-4">Upcoming</p>
          <div className="flex flex-col gap-4">
            {UPCOMING.map((event) => (
              <EventRow key={event.title} event={event} />
            ))}
          </div>
        </div>

        {/* Past Results */}
        <div>
          <p className="eyebrow mb-4">Past Results</p>
          <div className="flex flex-col gap-3">
            {PAST_RESULTS.map((r, i) => (
              <div key={i} className="bg-panel2 border border-line rounded-none p-4 hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold uppercase text-sm">{r.title}</p>
                  <span className="text-[10px] text-white/30 font-display">{r.date}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-brand-gold/80 flex items-center justify-center text-[8px] text-ink font-bold">1</span>
                  <p className="text-xs text-white/60 font-display">{r.winner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
