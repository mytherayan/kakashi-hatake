'use client'

import { motion } from 'framer-motion'
import { Card3D } from './3d-card'

const timelineEvents = [
  {
    title: "Young Prodigy",
    subtitle: "Early Years & Team Minato",
    image: "https://tse1.mm.bing.net/th?id=OIP.4tl-mfTJn6NQmwfFCgQveQHaKd&pid=15.1",
    href: "/timeline/young-kakashi",
    glowColor: "#4f46e5"
  },
  {
    title: "ANBU Captain",
    subtitle: "Black Ops Years",
    image: "https://tse4.mm.bing.net/th?id=OIP.9N4_zTibHBZiEZf3M6iIxQHaGq&pid=15.1",
    href: "/timeline/anbu",
    glowColor: "#dc2626"
  },
  {
    title: "Team 7 Sensei",
    subtitle: "Teaching the Next Generation",
    image: "https://tse3.mm.bing.net/th?id=OIP.WNKfVHSIYqx5gYxGAWTR-wHaKC&pid=15.1",
    href: "/timeline/team-7",
    glowColor: "#2563eb"
  },
  {
    title: "Sixth Hokage",
    subtitle: "Leading the Village",
    image: "https://tse1.mm.bing.net/th?id=OIP.SmnQrozPVg1WdFThnnjqhwHaKQ&pid=15.1",
    href: "/timeline/hokage",
    glowColor: "#16a34a"
  }
]

export function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 bg-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-black mb-16"
        >
          Journey to Hokage
        </motion.h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card3D {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

