import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  duration?: number
}

/** Anima el número contenido en `value` de 0 a su total, conservando prefijo/sufijo ("+500", "10+"). */
export default function CountUp({ value, duration = 1600 }: CountUpProps) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/)
  const target = match ? parseInt(match[2], 10) : 0
  const prefix = match ? match[1] : ''
  const suffix = match ? match[3] : ''

  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !match) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        obs.disconnect()
        const t0 = performance.now()
        const step = (t: number) => {
          const p = Math.min((t - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration])

  if (!match) return <span>{value}</span>
  return <span ref={ref}>{prefix}{n}{suffix}</span>
}
