"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Associate Software Engineer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 dark:to-background/80"></div>

      <div className="container px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Manish Kumar Yadav
            </h1>

            <div className="h-8 mt-4">
              <h2 className="text-xl sm:text-2xl font-medium text-primary">
                {typedText}
                <span className="animate-blink">|</span>
              </h2>
            </div>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Passionate software engineer with expertise in web development, Salesforce, and competitive programming.
            </p>

            <div className="mt-8 flex justify-center space-x-4">
              <Button
                asChild
                variant="default"
                size="lg"
                onClick={(e) => {
                  e.preventDefault()
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                onClick={(e) => {
                  e.preventDefault()
                  const projectsSection = document.getElementById("projects")
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.offsetTop - 80,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="mt-10 flex justify-center space-x-6">
              <a
                href="https://github.com/manish2504"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manish-yadav-140506222/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://codeforces.com/profile/manishky_254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Code2 size={24} />
                <span className="sr-only">Codeforces</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDown className="text-primary" size={24} />
        </a>
      </div>
    </section>
  )
}

