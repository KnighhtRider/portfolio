"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import TypewriterComponent from "@/components/typewriter"
import { motion } from "framer-motion"
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  TrendingUp,
  BarChart2,
  PieChart,
  Share2,
  MessageCircle,
  Heart,
} from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 dark:from-purple-900 dark:via-pink-800 dark:to-orange-700" />

        {/* Particle effect */}
        <div className="absolute inset-0 z-10">
          <ParticleBackground />
        </div>

        {/* Floating Social Icons */}
        <FloatingSocialIcons />
      </div>

      {/* Content */}
      <div className="container relative z-30 text-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] bg-clip-text bg-gradient-to-r from-white via-white to-white/90">
            Maitri Vatsh
          </h1>
          <div className="h-20 md:h-24 mb-8">
            <div className="text-xl md:text-2xl text-white/90 mb-2">
              A possibility seeker & Social Media Manager passionate about creating
            </div>
            <div className="text-xl md:text-2xl font-medium text-white">
              <TypewriterComponent
                phrases={[
                  "scroll-stopping strategies!",
                  "Trend Hacker",
                  "Content Alchemist",
                  "Engagement Expert",
                  "Brand Storyteller",
                  "Social Strategist",
                ]}
              />
            </div>
          </div>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="mt-8 bg-white text-purple-600 hover:bg-white/90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl group relative overflow-hidden"
          >
            <span className="relative z-10">Peek My Work</span>
            <ChevronDown className="ml-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></span>
            <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 group-active:duration-100 bg-gradient-to-r from-purple-500 to-pink-500 blur-md group-active:blur-xl"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        const colors = [
          "rgba(255, 105, 180, 0.7)",
          "rgba(147, 112, 219, 0.7)",
          "rgba(0, 255, 255, 0.7)",
          "rgba(255, 255, 0, 0.7)",
          "rgba(0, 255, 127, 0.7)",
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}

function FloatingSocialIcons() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])

  const icons = [
    { icon: <Instagram className="h-full w-full" />, color: "from-purple-500 to-pink-500" },
    { icon: <Facebook className="h-full w-full" />, color: "from-blue-500 to-blue-600" },
    { icon: <Youtube className="h-full w-full" />, color: "from-red-500 to-red-600" },
    { icon: <Twitter className="h-full w-full" />, color: "from-sky-400 to-sky-500" },
    { icon: <MessageCircle className="h-full w-full" />, color: "from-green-500 to-green-600" },
    { icon: <TrendingUp className="h-full w-full" />, color: "from-orange-500 to-amber-500" },
    { icon: <BarChart2 className="h-full w-full" />, color: "from-purple-500 to-indigo-500" },
    { icon: <PieChart className="h-full w-full" />, color: "from-pink-500 to-rose-500" },
    { icon: <Share2 className="h-full w-full" />, color: "from-cyan-500 to-blue-500" },
    { icon: <Heart className="h-full w-full" />, color: "from-pink-500 to-red-500" },
  ]

  useEffect(() => {
    if (typeof window !== "undefined") {
      const generated = icons.map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
      setPositions(generated)
    }
  }, [])

  if (positions.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute w-10 h-10 md:w-12 md:h-12"
          initial={{
            x: positions[index].x,
            y: positions[index].y,
            opacity: 0.8,
          }}
          animate={{
            y: [
              positions[index].y,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              positions[index].x,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm p-2 shadow-lg relative group">
            <div className="text-white w-full h-full">{icon.icon}</div>
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${icon.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${icon.color} opacity-0 blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
