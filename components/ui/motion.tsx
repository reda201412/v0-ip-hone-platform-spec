"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

export function Reveal({
  children,
  y = 20,
  delay = 0,
  duration = 700,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
}: {
  children: ReactNode
  y?: number
  delay?: number
  duration?: number
  easing?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0"}`}
      style={{
        transform: visible ? "translateY(0px)" : `translateY(${y}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function Parallax({ children, strength = 20 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handle = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)))
      setOffset((progress - 0.5) * strength)
    }
    handle()
    window.addEventListener("scroll", handle, { passive: true })
    window.addEventListener("resize", handle)
    return () => {
      window.removeEventListener("scroll", handle)
      window.removeEventListener("resize", handle)
    }
  }, [strength])

  return (
    <div ref={ref} style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}>
      {children}
    </div>
  )
}

export function Tilt({ children, max = 6, scale = 1.02 }: { children: ReactNode; max?: number; scale?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -max
      const rotateY = ((x - centerX) / centerX) * max
      el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`
    }
    const onLeave = () => {
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [max, scale])

  return (
    <div ref={ref} style={{ transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)", willChange: "transform" }}>
      {children}
    </div>
  )
}


