import { useState, type FormEvent, type ChangeEvent } from 'react'

type Role = 'judge' | 'volunteer' | 'member'

type FormState = { name: string; location: string; email: string }
const EMPTY: FormState = { name: '', location: '', email: '' }

const ROLES: { id: Role; title: string; icon: string; desc: string }[] = [
  {
    id: 'judge',
    title: 'Become a Judge',
    icon: '⚖️',
    desc: 'Certified judging across regional events. Domain expertise required.',
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    icon: '🤝',
    desc: 'Power the events behind the scenes. Open to all enthusiasts.',
  },
  {
    id: 'member',
    title: 'Community Member',
    icon: '🌐',
    desc: 'Access forums, resources, and live match coverage from anywhere.',
  },
]

function SignupForm({ title, icon, desc }: { title: string; icon: string; desc: string }) {
  const [values, setValues] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  const handleChange =
    (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputCls =
    'w-full bg-ink border border-line rounded-none px-3 py-2.5 text-sm placeholder:text-white/25 focus:border-brand-red outline-none transition-colors'

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-panel2 border border-line rounded-none p-6 flex flex-col gap-4 hover:border-white/20 transition-colors"
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-1">
        <span className="text-2xl">{icon}</span>
        <div>
          <p className="font-display font-black uppercase text-sm">{title}</p>
          <p className="text-white/40 text-xs mt-1 leading-relaxed">{desc}</p>
        </div>
      </div>

      <div className="h-px bg-line" />

      <input
        type="text"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange('name')}
        required
        className={inputCls}
      />
      <input
        type="text"
        placeholder="City / Location"
        value={values.location}
        onChange={handleChange('location')}
        required
        className={inputCls}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={values.email}
        onChange={handleChange('email')}
        required
        className={inputCls}
      />

      {submitted ? (
        <div className="bg-brand-red/10 border border-brand-red/30 p-3 text-center">
          <p className="text-xs text-brand-red font-display font-semibold uppercase tracking-wide">
            ✓ You're on the list!
          </p>
        </div>
      ) : (
        <button type="submit" className="btn-primary !rounded-none w-full">
          Sign Up
        </button>
      )}
    </form>
  )
}

export default function JoinEcosystem() {
  return (
    <section id="community" className="section-pad !py-20 relative overflow-hidden">
      {/* bg glow */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-[80px] pointer-events-none" />

      <div className="relative">
        <p className="eyebrow">Ecosystem</p>
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase mt-2 mb-3">
          Join The Ecosystem
        </h2>
        <p className="text-white/40 text-sm mb-12 max-w-lg">
          Whether you build, judge, cheer, or connect — there's a place for you in BotLeague.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((r) => (
            <SignupForm key={r.id} title={r.title} icon={r.icon} desc={r.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
