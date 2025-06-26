"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  type Project = {
    id: number
    title: string
    client: string
    description: string
    image: string
    category: string
    details: string
    stats: { label: string; value: string }[]
    link?: string
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Instagram Revamp",
      client: "Archi’s Group of Udaipur",
      description: "Boosted IG & FB visibility with localized content → +35% reach",
      image: "images/project1.jpg",
      category: "Real Estate",
      details:
        "As the Social Media Manager for Archi’s Group of Udaipur, I handled their Instagram and Facebook presence to enhance brand awareness and engagement. I created visually engaging content, managed monthly calendars, and executed localized strategies using reels and trending formats. Timely community interaction helped build a loyal following and positioned the brand strongly in Udaipur’s competitive space.",
      stats: [
        { label: "Reach Growth", value: "+35%" },
        { label: "Engagement Rate", value: "5.2%" },
        { label: "New Followers", value: "2.5K" },
      ],
      link: "https://www.instagram.com/archigroup_udaipur",
    },
    {
      id: 2,
      title: "Product‑Focused Strategy",
      client: "KG Plast",
      description: "Elevated IG & FB presence with B2B product‑centric content",
      image: "images/project2.JPG",
      category: "Manufacturing",
      details:
        "Managed Instagram and Facebook for KG Plast, an ISO-certified manufacturer, to showcase their diverse product range including polycarbonate sheets and office supplies. Created clean, B2B-focused content, promotional reels, and educational carousels. With structured content calendars and targeted messaging, the strategy boosted engagement and reinforced KG Plast’s reputation in the plastic and office supply industry.",
      stats: [
        { label: "Engagement Growth", value: "+40%" },
        { label: "Average Reach", value: "3.8K/post" },
        { label: "B2B Inquiries", value: "120+" },
      ],
      link: "https://www.instagram.com/kgplast",
    },
    {
  id: 3,
  title: "Luxury Real Estate Presence",
  client: "Raajdeep and Company",
  description: "Curated premium IG identity for high-end second home buyers",
  image: "images/project3.JPG",
  category: "Real Estate",
  details:
    "Led the social media strategy for Raajdeep and Company, a luxury real estate brand in Kasauli, Mashobra, and beyond. Through cinematic reels, rich visuals, and aspirational storytelling, I showcased their bespoke villas and scenic developments to attract premium buyers. Each post was crafted to reflect elegance, inspire aspiration, and build trust among high-net-worth individuals and second-home investors. The digital presence successfully positioned Raajdeep as a top-tier name in high-altitude luxury living.",
  stats: [
    { label: "Engagement Spike", value: "+65%" },
    { label: "Luxury Inquiries", value: "90+" },
    { label: "Reel Views", value: "45K+" },
  ],
  link: "https://www.instagram.com/rajdeepandcompany",
},
{
  id: 4,
  title: "Coworking Brand Growth",
  client: "Work Spaces by Innova (In-house)",
  description: "Built vibrant digital identity across IG, FB & LinkedIn",
  image: "images/project4.JPG",
  category: "Co-Working",
  details:
    "As Social Media Manager for Work Spaces by Innova (an in-house brand), I built a vibrant and professional presence across Instagram, Facebook, and LinkedIn to attract freelancers, startups, and remote teams. I highlighted modern coworking spaces, flexible solutions, and client testimonials through engaging visuals and reels. Lifestyle-driven content and community-focused posts helped position the brand as a go-to destination for smart, stylish, and collaborative workspaces.",
  stats: [
    { label: "Engagement Growth", value: "+55%" },
    { label: "Inquiries", value: "150+" },
    { label: "Reel Views", value: "30K+" },
  ],
  link: "https://www.instagram.com/workspacesbyinnova",
},

{
  id: 5,
  title: "Marketing Agency Presence",
  client: "Digital Rubix (In-house)",
  description: "Crafted bold IG presence showcasing campaigns & expertise",
  image: "images/project5.JPG",
  category: "Marketing",
  details:
    "Managed social media for Digital Rubix (an in-house marketing agency) to create a bold, dynamic online presence that reflected its creative edge and result-driven mindset. I designed content around campaign launches, client success stories, and performance marketing highlights to showcase the agency’s expertise in digital strategy, branding, and advertising.",
  stats: [
    { label: "Engagement Lift", value: "+60%" },
    { label: "Campaign Features", value: "20+" },
    { label: "New Leads", value: "100+" },
  ],
  link: "https://www.instagram.com/digitalrubix",
}


  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
            Client Success Stories
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Transforming brands across Real Estate, Education, Home & Decor, and more with data-driven social media
            strategies that deliver measurable results!
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md bg-card">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">Client: {project.client}</p>
                      <p className="text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white font-medium">
                  Tap to view
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-gradient-to-br from-background to-background/95 backdrop-blur-sm border-purple-500/20">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription>Client: {selectedProject.client}</DialogDescription>
                {selectedProject.link && (
                  <a
  href={selectedProject.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-3 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-md hover:from-purple-700 hover:to-pink-600 transition-all duration-300 w-fit"
>
  Visit Platform
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>
                )}
              </DialogHeader>
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">{selectedProject.category}</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg">Project Overview</h4>
                  <p className="text-foreground/80">{selectedProject.details}</p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-3">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 text-center"
                      >
                        <div className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                          {stat.value}
                        </div>
                        <div className="text-sm text-foreground/70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
