"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"

export default function Counters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const counterItems = [
    {
      icon: "🚀",
      value: 45000,
      label: "Followers Gained",
      suffix: "+",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: "📈",
      value: 100,
      label: "Social Media Accounts Directed",
      suffix: "+",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "🤝",
      value: 100,
      label: "Clients Served",
      suffix: "+",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: "📊",
      value: 5.2,
      label: "Avg Engagement Rate",
      suffix: "%",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-800 dark:from-purple-950 dark:via-pink-900 dark:to-orange-900">
      <div className="container px-4 mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counterItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="flex items-center justify-center">
                  <CounterAnimation
                    value={item.value}
                    duration={2000}
                    isAnimating={hasAnimated}
                    className="text-4xl md:text-5xl font-bold text-white"
                    decimals={item.value % 1 !== 0 ? 1 : 0}
                  />
                  <span className="text-4xl md:text-5xl font-bold text-white">{item.suffix}</span>
                </div>
                <p className="text-lg text-white/80 mt-2">{item.label}</p>

                {/* Neon glow bar */}
                <div className="mt-4 h-1 w-full rounded-full overflow-hidden">
                  <div className={`h-full w-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface CounterAnimationProps {
  value: number
  duration: number
  isAnimating: boolean
  className?: string
  decimals?: number
}

function CounterAnimation({ value, duration, isAnimating, className, decimals = 0 }: CounterAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isAnimating) return

    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime

      const progressRatio = Math.min(progress / duration, 1)
      const currentCount = progressRatio * value

      setCount(currentCount)

      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration, isAnimating])

  return <span className={className}>{count.toFixed(decimals)}</span>
}
