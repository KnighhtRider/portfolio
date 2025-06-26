"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const expertise = [
    { name: "Social Media Strategy", icon: "🧠" },
    { name: "Content Creation & Calendars", icon: "📅" },
    { name: "Influencer Marketing", icon: "🌟" },
    { name: "Campaign Planning", icon: "📝" },
    { name: "Graphic Content Design", icon: "🎨" },
    { name: "Performance Analysis", icon: "📊" },
    { name: "Trend Integration", icon: "🔥" },
    { name: "Brand Management", icon: "🏢" },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
              Who Is Maitri?
            </h2>

            <div className="relative w-40 h-40 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 animate-spin-slow blur-xl opacity-70"></div>
              <div className="relative rounded-full overflow-hidden w-full h-full border-4 border-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                <Image
                  src="/images/maitri-profile-cropped.jpeg"
                  alt="Maitri Vatsh"
                  fill
                  className="object-cover object-center scale-105"
                />
              </div>
            </div>

            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              I'm Maitri Vatsh, a spirited social media manager and digital storyteller. My zone is creating bold,
              thumb-stopping content, building brand presence, and growing online communities with creative spark and
              data-driven strategy.
            </p>
          </motion.div>

          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-8 text-center">
            My Expertise
          </motion.h3>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20 transition-all duration-300 text-center group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <div className="font-medium text-foreground/90">{skill.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
