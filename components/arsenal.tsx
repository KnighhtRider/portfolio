"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Palette, Video, BarChart2, Award, TrendingUp, Layers, MessageSquare, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Arsenal() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const tools = [
    {
      name: "Canva",
      icon: <Palette className="h-5 w-5" />,
      category: "Design",
      color: "from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400",
    },
    {
      name: "Meta Business Suite",
      icon: <Layers className="h-5 w-5" />,
      category: "Marketing",
      color: "from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400",
    },
    {
      name: "Hootsuite",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "Social",
      color: "from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400",
    },
    {
      name: "Buffer",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "Social",
      color: "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400",
    },
    {
      name: "CapCut",
      icon: <Video className="h-5 w-5" />,
      category: "Video",
      color: "from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400",
    },
    {
      name: "InVideo",
      icon: <Video className="h-5 w-5" />,
      category: "Video",
      color: "from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400",
    },
    {
      name: "Lumen5",
      icon: <Video className="h-5 w-5" />,
      category: "Video",
      color: "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400",
    },
    {
      name: "ChatGPT",
      icon: <MessageSquare className="h-5 w-5" />,
      category: "AI",
      color: "from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400",
    },
  ]

  const certifications = [
    {
      name: "Graphic Design",
      issuer: "Canva",
      icon: <Palette className="h-5 w-5" />,
      color: "from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400",
    },
    {
      name: "Content Writing",
      issuer: "HubSpot",
      icon: <FileText className="h-5 w-5" />,
      color: "from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400",
    },
    {
      name: "Digital Marketing",
      issuer: "Google",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400",
    },
  ]

  const achievements = [
    {
      title: "Managed 100+ client brands at Digital Rubix",
      icon: <Layers className="h-5 w-5" />,
      color: "from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400",
    },
    {
      title: "Achieved 5791 job submissions in a month",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400",
    },
    {
      title: "Boosted LinkedIn followers organically by 100+",
      icon: <BarChart2 className="h-5 w-5" />,
      color: "from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400",
    },
    {
      title: "Ranked ESI's LinkedIn page 6th industry-wide",
      icon: <Award className="h-5 w-5" />,
      color: "from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="arsenal" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-400/5 dark:to-amber-400/5 rounded-full blur-3xl"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 dark:from-purple-400 dark:via-pink-300 dark:to-orange-300"
          >
            My Creative Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            The tools, certifications, and achievements that power my social media magic
          </motion.p>
        </div>

        <div ref={ref}>
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="tools"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 dark:data-[state=active]:from-purple-400/20 dark:data-[state=active]:to-pink-400/20"
              >
                <Palette className="h-4 w-4 mr-2" />
                Tools I Use
              </TabsTrigger>
              <TabsTrigger
                value="certifications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 dark:data-[state=active]:from-purple-400/20 dark:data-[state=active]:to-pink-400/20"
              >
                <FileText className="h-4 w-4 mr-2" />
                Certifications
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/20 data-[state=active]:to-pink-500/20 dark:data-[state=active]:from-purple-400/20 dark:data-[state=active]:to-pink-400/20"
              >
                <Award className="h-4 w-4 mr-2" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tools">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-card rounded-xl p-4 border border-border hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className={`h-10 w-10 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center text-white`}
                      >
                        {tool.icon}
                      </div>
                      <div className="ml-3">
                        <h3 className="font-medium">{tool.name}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 rounded-full"></div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="certifications">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-card rounded-xl p-6 border border-border hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 group"
                  >
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white mb-4`}
                    >
                      {cert.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{cert.name}</h3>
                    <p className="text-foreground/70 text-sm">Issued by {cert.issuer}</p>
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 rounded-full"></div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="achievements">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-card rounded-xl p-6 border border-border hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5 rounded-full -mr-10 -mt-10 blur-xl group-hover:from-purple-500/10 group-hover:to-pink-500/10 dark:group-hover:from-purple-400/10 dark:group-hover:to-pink-400/10 transition-all duration-300"></div>

                    <div className="flex items-center">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}
                      >
                        {achievement.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      </div>
                    </div>

                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 rounded-full"></div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
