import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Events', href: '#events' },
  { label: 'Programs', href: '#' },
  { label: 'Community', href: '#community' },
  { label: 'Ranks', href: '#' },
] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-black text-lg tracking-wide shrink-0"
        >
          <span className="text-brand-red text-xl">⚡</span>
          BOT<span className="text-brand-red">LEAGUE</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-display font-semibold text-sm tracking-wide text-white/70">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-red group-hover:w-full transition-all duration-200" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button className="font-display font-semibold text-xs tracking-widest uppercase px-4 py-2 border border-white/20 hover:border-white/50 transition-colors text-white/70 hover:text-white">
            Login
          </button>
          <button className="btn-primary !px-5 !py-2 !text-xs !rounded-none">
            Register Now
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-bold uppercase tracking-widest text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-2">
            <button className="flex-1 font-display font-semibold text-xs tracking-widest uppercase px-4 py-2.5 border border-white/20 text-white/70">
              Login
            </button>
            <button className="flex-1 btn-primary !text-xs !rounded-none">
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
