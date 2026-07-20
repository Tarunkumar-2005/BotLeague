import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const WrenchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
  </svg>
)

export const BuildingIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 21V8l8-5 8 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 12h.01M15 12h.01M9 8h.01M15 8h.01" />
  </svg>
)

export const PersonIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 21c0-4 3.1-6.5 7-6.5s7 2.5 7 6.5" />
  </svg>
)

export const GroupIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="8" r="2.6" />
    <circle cx="16" cy="9" r="2.2" />
    <path d="M3.5 20c.4-3.2 2.7-5 5.5-5s5.1 1.8 5.5 5" />
    <path d="M14.7 15.4c2.3.2 4 1.8 4.3 4.6" />
  </svg>
)

export const MedalIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="15" r="5" />
    <path d="M9 4h6l-2.2 6.4M9 4l2.2 6.4M15 4l-2.2 6.4" />
    <path d="M12 12.5v5" />
  </svg>
)

export const GavelIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 7l4 4-8.5 8.5-4-4L13 7z" />
    <path d="M17.5 2.5l4 4M9 15l-6 6M2 21h7" />
  </svg>
)

export const BriefcaseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="8" width="18" height="12" rx="1.5" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </svg>
)

export const BoltIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

export const CoinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v10M9.5 9.3c0-1.3 1.1-2 2.5-2s2.5.8 2.5 2-1.1 1.7-2.5 1.7-2.5.5-2.5 1.9 1.1 2 2.5 2 2.5-.7 2.5-2" />
  </svg>
)

export const GearPersonIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="3" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    <path d="M18.5 4.5l1 .6M19.5 3l.9.9" />
  </svg>
)

export const ChipIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="7" y="7" width="10" height="10" rx="1" />
    <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
  </svg>
)

export const PlayIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" stroke="none" />
  </svg>
)
