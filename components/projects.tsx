"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Music } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Music NFT Player",
    description:
      "A cutting-edge Web 3.0 music player application, empowering artists to mint and vend new music NFTs within a marketplace. The artist is entitled to receive 8-10% of all forthcoming sales, thereby enhancing the artist's revenue.",
    image: "https://plus.unsplash.com/premium_photo-1677589330395-4a9e1ae99b10?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    github: "https://github.com/manish2504/Spotify-3.0",
    tags: ["HTML", "CSS", "JavaScript", "ReactJs", "Solidity", "Hardhat", "IPFS", "Chai", "Mocha"],
    icon: <Music className="h-12 w-12 text-primary" />,
    date: "July 2023",
  },
  {
    id: 2,
    title: "GoFood",
    description:
      "A dynamic food ordering platform, allowing users to seamlessly browse and order their favorite meals. Integrated advanced search functionality, enabling users to filter food items by category and name for a smooth and intuitive experience.",
    image: "https://gofood.in/public/assets/images/logo.png",
    link: "#",
    github: "https://github.com/manish2504/GoFood",
    tags: ["HTML", "CSS", "JavaScript", "ReactJs", "Redux", "NodeJS", "MongoDB"],
    icon: <ExternalLink className="h-12 w-12 text-primary" />,
    date: "January 2025",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary">{project.date}</Badge>
                  </div>
                </div>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div>{project.icon}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  
                  <Button asChild variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

