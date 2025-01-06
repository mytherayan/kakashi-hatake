'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const relationships = [
  {
    category: 'Friends',
    people: [
      { name: 'Might Guy', image: 'https://example.com/might-guy.jpg' },
      { name: 'Asuma Sarutobi', image: 'https://example.com/asuma-sarutobi.jpg' },
      { name: 'Kurenai Yūhi', image: 'https://example.com/kurenai-yuhi.jpg' },
    ]
  },
  {
    category: 'Students',
    people: [
      { name: 'Naruto Uzumaki', image: 'https://example.com/naruto-uzumaki.jpg' },
      { name: 'Sasuke Uchiha', image: 'https://example.com/sasuke-uchiha.jpg' },
      { name: 'Sakura Haruno', image: 'https://example.com/sakura-haruno.jpg' },
    ]
  },
  {
    category: 'Family',
    people: [
      { name: 'Sakumo Hatake (Father)', image: 'https://example.com/sakumo-hatake.jpg' },
    ]
  },
  {
    category: 'Sensei',
    people: [
      { name: 'Minato Namikaze', image: 'https://example.com/minato-namikaze.jpg' },
    ]
  },
]

export function Relationships() {
  return (
    <section id="relationships" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-black"
        >
          Relationships
        </motion.h2>
        {relationships.map((category, categoryIndex) => (
          <div key={category.category} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-black">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.people.map((person, personIndex) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (personIndex * 0.1) }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg card-3d"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-black">{person.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

