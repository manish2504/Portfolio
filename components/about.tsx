"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                <p className="text-muted-foreground mb-4">
                  I'm an Associate Software Engineer at Accenture with a passion for building innovative web
                  applications and solving complex problems. With a strong foundation in computer science and a knack
                  for competitive programming, I bring both theoretical knowledge and practical skills to every project
                  I undertake.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey in technology began during my undergraduate studies at KIET Group of Institutions, where I
                  developed a deep interest in data structures, algorithms, and web development. This foundation has
                  enabled me to excel in competitive programming contests and build robust web applications.
                </p>
                <p className="text-muted-foreground">
                  Currently, I'm focused on expanding my expertise in Salesforce development while continuing to explore
                  new technologies in the web development ecosystem.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Algorithms</Badge>
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">Salesforce</Badge>
                  <Badge variant="secondary">OOPs</Badge>
                  <Badge variant="secondary">Competitive Programming</Badge>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-4">Education</h3>
                <p className="text-muted-foreground">
                  <strong>B.Tech in Computer Science and IT</strong>
                  <br />
                  KIET Group of Institutions
                  <br />
                  2020 - 2024
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-4">Location</h3>
                <p className="text-muted-foreground">Sector-110, Noida, Uttar Pradesh</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

