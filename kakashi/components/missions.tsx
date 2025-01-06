'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const missions = [
  { 
    name: 'Bell Test',
    rank: 'D-rank',
    outcome: 'Successful',
    image: 'https://th.bing.com/th/id/OIP.2kBWPyIEKjR2S5s1DcZIYQHaEL?w=300&h=180&c=7&r=0&o=5&pid=1.7'
  },
  { 
    name: 'Protect the Bridge Builder', 
    rank: 'C-rank (later A-rank)', 
    outcome: 'Successful',
    image: 'https://th.bing.com/th?id=OIP.S80RWR1JbPrtJ_gpVlkIjAHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
  },
  { 
    name: 'Chunin Exam Supervision', 
    rank: 'B-rank', 
    outcome: 'Successful',
    image: 'https://th.bing.com/th/id/OIP.EsuI7odQi45jUOE2pR_ZlgHaEH?w=306&h=180&c=7&r=0&o=5&pid=1.7'
  },
  { 
    name: 'Sasuke Recovery', 
    rank: 'A-rank', 
    outcome: 'Partial Success',
    image: 'data:image/jpeg;base64,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'
  },
  { 
    name: 'Rescue the Kazekage', 
    rank: 'S-rank', 
    outcome: 'Successful',
    image: 'https://th.bing.com/th/id/OIP.r-7vg2WF9M5bge3qBs1InQHaDJ?w=339&h=148&c=7&r=0&o=5&pid=1.7'
  },
  { 
    name: 'Defeat Akatsuki', 
    rank: 'S-rank', 
    outcome: 'Successful',
    image: 'https://th.bing.com/th/id/OIP.Dj-luODInyoZtOZyQQKOAgHaEK?w=322&h=181&c=7&r=0&o=5&pid=1.7'
  },
  {
    name: 'Fourth Great Ninja War',
    rank: 'S-rank',
    outcome: 'Successful',
    image: 'https://th.bing.com/th/id/OIP.ej24SCZgpfN7iJfTbgR0PAHaEk?w=265&h=180&c=7&r=0&o=5&pid=1.7'
  },
  {
    name: 'Hokage Duties',
    rank: 'S-rank',
    outcome: 'Ongoing',
    image: 'https://th.bing.com/th?id=OIP.uM1sO8dACavgEKxBy3t5fAHaEK&w=312&h=200&c=12&rs=1&qlt=99&o=6&pid=23.1'
  }
]

export function Missions() {
  return (
    <section id="missions" className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-black"
        >
          Notable Missions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg card-3d"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={mission.image}
                  alt={mission.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{mission.name}</h3>
                <p className="text-gray-600 mb-2">Rank: {mission.rank}</p>
                <p className="text-gray-600">Outcome: {mission.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

