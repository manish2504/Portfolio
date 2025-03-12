"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Star, Medal } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "Qualified for ACM ICPC Regionals 2023",
    description: "Qualified for the ACM ICPC 2023 Amritapuri regionals (AIR 442)",
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
  {
    id: 2,
    title: "Global Rank 51",
    description: "Starters 107 Division 2 (Rated)",
    icon: <Medal className="h-8 w-8 text-primary" />,
  },
  {
    id: 3,
    title: "Specialist at Codeforces",
    description: "Maximum rating 1497",
    icon: <Star className="h-8 w-8 text-primary" />,
  },
  {
    id: 4,
    title: "4 star proficient at Codechef",
    description: "Maximum rating 1844",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    id: 5,
    title: "Among the top 200 coders",
    description: "Selected as the Infosys Campus Ambassador in HackWithinfy",
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Achievements</h2>
          <div className="mt-1 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognitions and accomplishments from my competitive programming journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full">{achievement.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Positions of Responsibility</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Badge className="mt-1">Member</Badge>
                  <div className="ml-4">
                    <h4 className="font-medium">KIET Koders Korner (K3)</h4>
                    <p className="text-muted-foreground">
                      It's a coding club comprising the top 1% of competitive programmers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Badge className="mt-1">Volunteer</Badge>
                  <div className="ml-4">
                    <h4 className="font-medium">LITFEST Organised by Odyssey</h4>
                    <p className="text-muted-foreground">Coordinated a literary fest for aficionados of literature.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

