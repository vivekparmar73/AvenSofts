const PATH = 'M14 52 L32 13 L50 52 H28'

export function LogoMark({ size = 32, color = 'var(--green)', className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path d={PATH} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// The "A" cropped exactly to its stroke bounds, so it can sit flush against the wordmark
// text like the official logo. Sized in em: height matches the font's cap height.
export function LogoMarkTight({ color = 'var(--green)', className = '' }) {
  return (
    <svg className={`logo-mark-tight ${className}`} viewBox="10 9 44 47" aria-hidden="true">
      <path d={PATH} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Logo({ light = false, size = 30 }) {
  return (
    <span className={`logo ${light ? 'logo--light' : ''}`} aria-label="AvenSofts" style={{ fontSize: size * 0.8 }}>
      <LogoMarkTight color={light ? '#3fb893' : 'var(--green)'} />
      <span className="logo__text">venSofts</span>
    </span>
  )
}
