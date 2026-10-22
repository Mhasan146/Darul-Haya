'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

// The hero crest on a small perspective stage. It leans a few degrees toward
// the pointer, with the cream halo on a deeper plane so the two separate in
// space. Deliberately restrained: six degrees at most, eased back to rest when
// the pointer leaves. Only fine pointers that can hover get it, and reduced
// motion turns it off; everyone else sees the crest standing still.
const MAX_TILT = 6

export default function HeroCrest() {
  const stage = useRef(null)
  const tilt = useRef(null)

  useEffect(() => {
    const el = stage.current
    const t = tilt.current
    if (!el || !t) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || calm) return

    // Track across the whole hero so the crest responds before the cursor is
    // right on top of it, which reads as presence rather than a hover trick.
    const area = el.closest('section') || el
    let frame = 0

    const move = (e) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2)
        const y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2)
        const clamp = (v) => Math.max(-1, Math.min(1, v))
        t.classList.add('is-tracking')
        t.style.setProperty('--ry', `${(clamp(x) * MAX_TILT).toFixed(2)}deg`)
        t.style.setProperty('--rx', `${(-clamp(y) * MAX_TILT).toFixed(2)}deg`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      t.classList.remove('is-tracking')
      t.style.setProperty('--rx', '0deg')
      t.style.setProperty('--ry', '0deg')
    }

    area.addEventListener('pointermove', move)
    area.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      area.removeEventListener('pointermove', move)
      area.removeEventListener('pointerleave', leave)
    }
  }, [])

  return (
    <div ref={stage} className="crest-stage relative mx-auto w-56 sm:w-72">
      <div ref={tilt} className="crest-tilt relative">
        <div
          aria-hidden
          className="crest-halo absolute inset-0 -m-10 rounded-full bg-[radial-gradient(closest-side,rgba(252,249,244,0.96),rgba(252,249,244,0.75)_55%,rgba(252,249,244,0))]"
        />
        <Image
          src="/hero-logo-v2.png"
          alt="Darul Haya Academy of Learning"
          width={512}
          height={512}
          priority
          className="crest-art relative w-full h-auto"
        />
      </div>
    </div>
  )
}
