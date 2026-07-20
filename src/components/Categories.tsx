import { GearPersonIcon, BuildingIcon, GroupIcon, CoinIcon } from './icons'

const CATEGORIES = [
  {
    icon: GearPersonIcon,
    title: 'Mini Makers',
    age: 'Ages 6–10',
    desc: 'Where Creativity Meets Logic. Intro-level builds and simple challenges.',
    accent: 'border-brand-gold',
    iconColor: 'text-brand-gold',
    bg: 'bg-brand-gold/5',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80',
  },
  {
    icon: BuildingIcon,
    title: 'Junior Innovators',
    age: 'Ages 11–14',
    desc: 'Engineering & Strategy Fundamentals. Sensors, logic, and competition formats.',
    accent: 'border-brand-blue',
    iconColor: 'text-brand-blue',
    bg: 'bg-brand-blue/5',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80',
  },
  {
    icon: GroupIcon,
    title: 'Young Engineers',
    age: 'Ages 15–18',
    desc: 'Advanced Wireless & Autonomous Control. Ready for the national circuit.',
    accent: 'border-white/30',
    iconColor: 'text-white',
    bg: 'bg-white/5',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
  },
  {
    icon: CoinIcon,
    title: 'Robo Minds',
    age: 'Open / 18+',
    desc: 'Elite Professional Sports & Robotics. The pinnacle of the BotLeague circuit.',
    accent: 'border-brand-red',
    iconColor: 'text-brand-red',
    bg: 'bg-brand-red/5',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&q=80',
  },
]

export default function Categories() {
  return (
    <section className="section-pad !py-16 bg-panel border-y border-line">
      <h2 className="font-display font-black text-3xl md:text-4xl uppercase mb-10">Categories</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CATEGORIES.map(({ icon: Icon, title, age, desc, accent, iconColor, bg, image }) => (
          <div
            key={title}
            className={`group relative overflow-hidden border ${accent} rounded-none ${bg} hover:brightness-110 transition-all duration-300 flex flex-col`}
          >
            {/* Image */}
            <div className="h-40 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                loading="lazy"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className={`h-11 w-11 rounded-full border ${accent} flex items-center justify-center mb-4 ${iconColor}`}>
                <Icon className="h-5 w-5" />
              </div>

              <p className="font-display font-black uppercase text-sm">{title}</p>
              <p className={`text-[10px] font-display uppercase tracking-widest mt-1 ${iconColor} opacity-80`}>{age}</p>
              <p className="text-white/50 text-xs mt-3 leading-relaxed flex-1">{desc}</p>

              <a
                href="#"
                className={`inline-block mt-4 text-[11px] font-display font-bold uppercase tracking-widest ${iconColor} hover:opacity-80 transition-opacity`}
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
