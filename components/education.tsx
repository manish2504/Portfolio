"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Education</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-muted p-6 flex items-center justify-center md:w-1/4">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge variant="outline">2020 - 2024</Badge>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-muted-foreground mb-2">KIET Group of Institutions</h4>
                    <p className="text-muted-foreground mb-4">Computer Science and Information Technology</p>
                    <div className="flex items-center">
                      <span className="font-medium">CGPA:</span>
                      <Badge variant="secondary" className="ml-2">
                        7.3
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-muted p-6 flex items-center justify-center md:w-1/4">
                    <School className="h-12 w-12 text-primary" />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Higher Secondary Education</h3>
                      <div className="mt-2 md:mt-0">
                        <Badge variant="outline">2020</Badge>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-muted-foreground mb-4">Ryan International School</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="font-medium">Class XII:</span>
                        <Badge variant="secondary" className="ml-2">
                          96.2%
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">Class X:</span>
                        <Badge variant="secondary" className="ml-2">
                          88.2%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <Badge className="justify-center py-2">Data Structures</Badge>
                <Badge className="justify-center py-2">Software Methodology</Badge>
                <Badge className="justify-center py-2">Algorithms Analysis</Badge>
                <Badge className="justify-center py-2">Database Management</Badge>
                <Badge className="justify-center py-2">OOPs</Badge>
                <Badge className="justify-center py-2">Computer Networks</Badge>
                <Badge className="justify-center py-2">Operating System</Badge>
                <Badge className="justify-center py-2">Artificial Intelligence</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

