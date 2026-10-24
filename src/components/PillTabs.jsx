import { useLayoutEffect, useRef, useState } from 'react'

// Segmented control with a sliding highlight. The pill is positioned from the active
// button's measured offset, so it stays correct inside transformed or animating parents.
export default function PillTabs({ items, value, onChange, className = '', pillClass = '' }) {
  const wrap = useRef(null)
  const [pill, setPill] = useState(null)

  useLayoutEffect(() => {
    const measure = () => {
      const el = wrap.current?.querySelector(`[data-key="${CSS.escape(value)}"]`)
      if (el) setPill({ left: el.offsetLeft, top: el.offsetTop, width: el.offsetWidth, height: el.offsetHeight })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrap.current)
    return () => ro.disconnect()
  }, [value, items.length])

  return (
    <div className={`pilltabs ${className}`} ref={wrap} role="tablist">
      {pill && (
        <span
          className={`pilltabs__pill ${pillClass}`}
          style={{ width: pill.width, height: pill.height, transform: `translate(${pill.left}px, ${pill.top}px)` }}
        />
      )}
      {items.map((it) => (
        <button
          key={it.key}
          data-key={it.key}
          role="tab"
          aria-selected={value === it.key}
          className={`pilltabs__btn ${value === it.key ? 'is-active' : ''} ${it.className || ''}`}
          onClick={() => onChange(it.key)}
        >
          {it.label}
        </button>
      ))}
    </div>
  )
}
