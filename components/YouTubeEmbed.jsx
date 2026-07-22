'use client'
import { useState } from 'react'

// Lightweight, mobile-friendly YouTube embed. Shows the poster image + a play
// button, and only loads the (heavy) YouTube player iframe once the visitor
// taps play — so it doesn't slow the page down, especially on mobile. Uses the
// privacy-friendly youtube-nocookie domain (no cookies set until playback).
export default function YouTubeEmbed({ id, title = 'Video' }) {
  const [play, setPlay] = useState(false)
  if (!id) return null

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-clay shadow-xl shadow-clay/20 ring-1 ring-clay/10">
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-clay/30 transition-colors group-hover:bg-clay/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="#134E4A" className="h-7 w-7 translate-x-0.5" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}
