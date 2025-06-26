"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Brush, Globe, PenTool, Share2, Zap, ChevronRight, Pause, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const ref = useRef(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const services = [
    {
      title: "Social Strategy & Growth",
      description: "Crafted campaigns that convert followers into fans.",
      icon: <Zap className="h-10 w-10" />,
      color: "from-purple-500 to-indigo-500",
      emoji: "🧠",
    },
    {
      title: "Content & Visuals",
      description: "Graphics, videos, reels, carousels — tailor-made for platforms.",
      icon: <Brush className="h-10 w-10" />,
      color: "from-pink-500 to-rose-500",
      emoji: "📸",
    },
    {
      title: "Analytics & Reports",
      description: "Track what works. Tweak what doesn't. Repeat.",
      icon: <PenTool className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-500",
      emoji: "📊",
    },
    {
      title: "Paid Campaigns",
      description: "Maximize reach with Meta/Google ads.",
      icon: <Share2 className="h-10 w-10" />,
      color: "from-amber-500 to-orange-500",
      emoji: "📣",
    },
    {
      title: "Influencer & Community",
      description: "Micro-creators, macro impact.",
      icon: <Globe className="h-10 w-10" />,
      color: "from-green-500 to-emerald-500",
      emoji: "🎯",
    },
  ]

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 // Width of each card including margin
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % services.length
    scrollToIndex(nextIndex)
  }

  const toggleAutoScroll = () => {
    setIsPaused(!isPaused)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling && !isPaused && isInView) {
      intervalRef.current = setInterval(() => {
        scrollToNext()
      }, 3000) // Change slide every 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoScrolling, isPaused, isInView, currentIndex])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false)
  }

  const handleMouseLeave = () => {
    if (!isPaused) {
      setIsAutoScrolling(true)
    }
  }

  // Handle manual scroll to update current index
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = 320
      const newIndex = Math.round(scrollLeft / cardWidth)
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < services.length) {
        setCurrentIndex(newIndex)
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            Skills & Services
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Swipe right on these services to boost your social media presence and engagement!
          </p>
        </div>

        <div ref={ref} className="relative overflow-hidden">
          {/* Auto-scroll controls */}
          <div className="flex justify-center mb-4">
            <button
              onClick={toggleAutoScroll}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 transition-all duration-300"
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4" />
                  <span className="text-sm">Resume</span>
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4" />
                  <span className="text-sm">Pause</span>
                </>
              )}
            </button>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] mx-2 snap-center"
                whileHover={{ y: -10 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg relative">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

                  {/* Progress indicator for current card */}
                  {index === currentIndex && (
                    <div className="absolute top-2 left-0 right-0 h-1 bg-gray-200/20 mx-4 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused || !isAutoScrolling ? "0%" : "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        key={`${currentIndex}-${isPaused}-${isAutoScrolling}`}
                      />
                    </div>
                  )}

                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{service.emoji}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-foreground/70">{service.description}</p>

                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-xs uppercase tracking-wider text-foreground/50">
                        {index === currentIndex ? "Current" : "Swipe for more"}
                      </span>
                      <button
                        onClick={scrollToNext}
                        className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        aria-label="Scroll to next service"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
