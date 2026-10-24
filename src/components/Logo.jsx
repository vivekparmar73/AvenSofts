// Brand assets in /public/brand are generated from the official /public/logo.png.
// logo.png / logo-light.png: full wordmark for light / dark backgrounds.
// logo-mark.png / logo-mark-light.png: the "A" mark on its own.

export function LogoMark({ light = false, className = '', style }) {
  return (
    <img
      src={light ? '/brand/logo-mark-light.png' : '/brand/logo-mark.png'}
      alt=""
      aria-hidden="true"
      className={className}
      style={style}
      draggable="false"
    />
  )
}

export default function Logo({ light = false, height = 30, className = '' }) {
  return (
    <img
      src={light ? '/brand/logo-light.png' : '/brand/logo.png'}
      alt="AvenSofts"
      className={`logo ${className}`}
      style={{ height }}
      draggable="false"
    />
  )
}
