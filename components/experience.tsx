"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8 overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-muted p-6 flex items-center justify-center md:w-1/4">
                    <Briefcase className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">Associate Software Engineer</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge variant="outline">September 2024 - Present</Badge>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">Accenture</h4>
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                      <li>
                        Completed a 3-month intensive training in Salesforce development, focusing on platform features
                        such as Apex, Visualforce, and Lightning components.
                      </li>
                      <li>
                        Gained hands-on experience in configuring and customizing Salesforce to meet client
                        requirements.
                      </li>
                      <li>
                        Collaborated with peers and mentors to troubleshoot and resolve complex technical challenges in
                        the Salesforce environment.
                      </li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge>Salesforce</Badge>
                      <Badge>Apex</Badge>
                      <Badge>Visualforce</Badge>
                      <Badge>Lightning Components</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

