'use client'

import { motion } from 'framer-motion'
import { Card3D } from './3d-card'

const relationships = {
  family: [
    {
      title: "Sakumo Hatake",
      subtitle: "Father - The White Fang",
      image: "https://tse2.mm.bing.net/th?id=OIP.VMWrTsbrk3Or5YJLelJBAAHaJ4&pid=15.1",
      href: "/relationships/sakumo",
      glowColor: "#ffffff"
    },
     {
      title: "Minato Namikaze",
      subtitle: "Sensei - The Yellow Flash",
      image: "https://tse1.mm.bing.net/th?id=OIP.9SWphQBPHrFJDJN9E4gG7gHaNK&pid=15.1",
      href: "/relationships/minato",
      glowColor: "#ffffff"
    }
  ],
  friends: [
    {
      title: "Might Guy",
      subtitle: "Eternal Rival",
      image: "https://tse2.mm.bing.net/th?id=OIP.l52mWfU5nghArAg2OGLaYAHaJy&pid=15.1",
      href: "/relationships/might-guy",
      glowColor: "#16a34a"
    },
    {
      title: "Obito Uchiha",
      subtitle: "Former Teammate",
      image: "https://tse1.mm.bing.net/th?id=OIP.AdMTrru2AVYgELBYzucgNAHaJ7&pid=15.1",
      href: "/relationships/obito",
      glowColor: "#dc2626"
    },
    {
      title: "Rin Nohara",
      subtitle: "Former Teammate",
      image: "https://tse4.mm.bing.net/th?id=OIP.DLLaxa0dhSD1QYfJtBuJ7gHaKY&pid=15.1",
      href: "/relationships/rin",
      glowColor: "#8b5cf6"
    }
  ],
  students: [
    {
      title: "Naruto Uzumaki",
      subtitle: "Team 7 - Future Hokage",
      image: "https://images6.fanpop.com/image/photos/33500000/NARUTO-uzumaki-naruto-shippuuden-33503555-837-954.png",
      href: "/relationships/naruto",
      glowColor: "#f59e0b"
    },
    {
      title: "Sasuke Uchiha",
      subtitle: "Team 7 - Last Uchiha",
      image: "https://images4.fanpop.com/image/photos/17600000/Sasuke-Uchiha-uchiha-sasuke-17639657-1280-720.jpg",
      href: "/relationships/sasuke",
      glowColor: "#7c3aed"
    },
    {
      title: "Sakura Haruno",
      subtitle: "Team 7 - Medical Ninja",
      image: "https://s2.aminoapps.com/image/c5dpndrfxqylqgojlbipcovo5ispzlps_hq.jpg",
      href: "/relationships/sakura",
      glowColor: "#ec4899"
    }
  ]
}

export function RelationshipsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-black mb-16"
        >
          Important Relationships
        </motion.h2>
        
        {Object.entries(relationships).map(([category, people], categoryIndex) => (
          <div key={category} className="mb-16 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="text-2xl font-bold text-black mb-8 capitalize"
            >
              {category}
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-8">
              {people.map((person, index) => (
                <motion.div
                  key={person.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                >
                  <Card3D {...person} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

