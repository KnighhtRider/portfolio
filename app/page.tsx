import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Counters from "@/components/counters"
import Arsenal from "@/components/arsenal"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Counters />
      <Arsenal />
      <Contact />
    </main>
  )
}
