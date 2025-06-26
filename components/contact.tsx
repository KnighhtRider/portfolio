"use client"

import { motion, useInView } from "framer-motion"
import { Mail, Linkedin } from "lucide-react"
import { useRef } from "react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  return (
    <footer
      id="contact"
      className="py-16 bg-gradient-to-br from-purple-900 via-pink-800 to-orange-800 dark:from-purple-950 dark:via-pink-900 dark:to-orange-900"
    >
      <div className="container px-4 mx-auto">
        <div ref={ref} className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            Let's Connect!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            <a
              href="mailto:maitriruppu2001@gmail.com"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">maitriruppu2001@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/maitri-vatsh-860a9a24a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">LinkedIn Profile</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/20 pt-8"
          >
            <p className="text-white/80 text-sm">© 2024 Maitri Vatsh. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
