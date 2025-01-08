'use client'

import { CloudLightningIcon as Lightning, Eye, Scroll, Users, Brain, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const skills = [
  { name: 'Chidori', level: 95, icon: Lightning },
  { name: 'Sharingan', level: 90, icon: Eye },
  { name: 'Ninjutsu', level: 98, icon: Scroll },
  { name: 'Team Leadership', level: 85, icon: Users },
  { name: 'Strategic Thinking', level: 92, icon: Brain },
  { name: 'Defensive Techniques', level: 88, icon: Shield },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D']

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-black"
        >
          Skills & Abilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ChartContainer
              config={{
                skill: {
                  label: "Skill Level",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skills}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="level"
                  >
                    {skills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center p-4 border rounded-lg shadow-sm bg-white"
              >
                <skill.icon className="w-8 h-8 mr-4 text-gray-700" />
                <div>
                  <span className="text-lg font-semibold text-black">{skill.name}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-black h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

