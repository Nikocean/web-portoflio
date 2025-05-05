'use client'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function GlowDiv() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Gunakan spring agar gerakan smooth
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 500 })
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 500 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150) // 150 agar blur center di cursor
      mouseY.set(e.clientY - 150)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 w-[400px] h-[400px] rounded-full bg-sky-400/20 blur-3xl"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  )
}
