"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  phrases: string[]
}

export default function TypewriterComponent({ phrases }: TypewriterProps) {
  const [currentPhrase, setCurrentPhrase] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current phrase to display
        const phrase = phrases[currentIndex % phrases.length]

        if (!isDeleting) {
          // Typing
          setCurrentPhrase(phrase.substring(0, currentPhrase.length + 1))

          // If we've typed the full phrase
          if (currentPhrase === phrase) {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          // Deleting
          setCurrentPhrase(phrase.substring(0, currentPhrase.length - 1))

          // If we've deleted the full phrase
          if (currentPhrase === "") {
            setIsDeleting(false)
            setCurrentIndex(currentIndex + 1)
          }
        }
      },
      isDeleting ? 50 : 100,
    ) // Typing is slower than deleting

    return () => clearTimeout(timeout)
  }, [currentPhrase, currentIndex, isDeleting, phrases])

  return (
    <span className="font-medium text-white">
      {currentPhrase}
      <span className="animate-blink">|</span>
    </span>
  )
}
