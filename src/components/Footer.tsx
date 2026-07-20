const QUICK_LINKS = [
  { label: 'Events', href: '#events' },
  { label: 'Programs', href: '#' },
  { label: 'Community', href: '#community' },
  { label: 'Ranks', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

const SOCIAL = [
  { label: 'YouTube', icon: '▶', href: '#' },
  { label: 'Instagram', icon: '◈', href: '#' },
  { label: 'Facebook', icon: 'f', href: '#' },
  { label: 'X / Twitter', icon: '✕', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="section-pad !py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <a href="#top" className="inline-flex items-center gap-2 font-display font-black text-xl tracking-wide mb-4">
            <span className="text-brand-red">⚡</span>
            BOT<span className="text-brand-red">LEAGUE</span>
          </a>
          <p className="text-white/40 text-xs leading-relaxed max-w-xs">
            India's national robotics arena. Build your team, compete across the country, and rise to the top.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-9 w-9 border border-line rounded-none flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors font-display text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="eyebrow mb-5">Quick Links</p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-xs text-white/50 font-display uppercase tracking-wide hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Disciplines */}
        <div>
          <p className="eyebrow mb-5">Disciplines</p>
          <ul className="flex flex-col gap-3">
            {['Robo Race', 'Line Follower', 'RC Racing', 'FPV Drone', 'Robo Hockey', 'Robo War'].map((d) => (
              <li key={d}>
                <a href="#" className="text-xs text-white/50 font-display uppercase tracking-wide hover:text-white transition-colors">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className="eyebrow mb-5">Stay Updated</p>
          <p className="text-xs text-white/40 mb-4 leading-relaxed">
            Get event alerts, results, and BotLeague news straight to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-panel border border-line rounded-none px-3 py-2.5 text-sm placeholder:text-white/25 focus:border-brand-red outline-none transition-colors"
            />
            <button type="submit" className="btn-primary !rounded-none !py-2.5 !text-xs w-full">
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-white/25 font-display uppercase tracking-widest">
          © 2025 BotLeague India. All rights reserved.
        </p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map((t) => (
            <a key={t} href="#" className="text-[11px] text-white/25 font-display uppercase tracking-widest hover:text-white/60 transition-colors">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
