"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Terminal, Layers, PenTool } from "lucide-react"

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    skills: [
      { name: "C/C++", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "Apex", level: 70 },
    ],
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [
      { name: "ReactJS", level: 85 },
      { name: "ExpressJS", level: 80 },
      { name: "NodeJS", level: 80 },
      { name: "Redux", level: 75 },
      { name: "Lightning Web Components", level: 70 },
    ],
  },
  {
    id: 3,
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    id: 4,
    title: "Developer Tools",
    icon: <Terminal className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 85 },
      { name: "Salesforce Lightning Platform", level: 75 },
    ],
  },
  {
    id: 5,
    title: "Other Skills",
    icon: <PenTool className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 90 },
      { name: "OOPs", level: 85 },
      { name: "Problem Solving", level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Technical Skills</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-bold ml-2">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

