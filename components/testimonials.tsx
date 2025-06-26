"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.5 })

  const testimonials = [
    {
      id: 1,
      name: "Arjun Kapoor",
      role: "Founder, Swastik Global Realty",
      content:
        "Working with Maitri felt like plugging our brand into social electricity. From IG reels to campaign targeting, she made every post count. Her creativity isn't just trendy — it drives results.",
      avatar: "/placeholder.svg?height=100&width=100",
      emoji: "🌟",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Director, Archi Group",
      content:
        "Maitri's social strategy transformed our online presence. Our engagement rates skyrocketed and we've seen a direct impact on lead generation. She doesn't just post content - she builds communities.",
      avatar: "/placeholder.svg?height=100&width=100",
      emoji: "🚀",
    },
    {
      id: 3,
      name: "Alex Johnson",
      role: "CEO, Elmestro",
      content:
        "The viral reel series Maitri created put our brand on the map! Her finger is always on the pulse of what's trending, but she never sacrifices our brand voice. A true creative partner.",
      avatar: "/placeholder.svg?height=100&width=100",
      emoji: "✨",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay && isInView) {
      intervalRef.current = setInterval(nextTestimonial, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, isInView])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  const clientLogos = [
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
    "/placeholder.svg?height=60&width=120",
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            Testimonials & Clients
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say!
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto mb-16"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-card rounded-2xl shadow-lg p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 h-40 w-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-2xl"></div>

            <Quote className="absolute text-purple-200 dark:text-purple-900 h-24 w-24 -top-6 -left-6 opacity-50" />

            <div className="relative z-10 min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-6">{testimonials[currentIndex].emoji}</div>
                  <p className="text-lg md:text-xl text-foreground/90 italic mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                      <Image
                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-foreground/70">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Trusted by</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-12"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
