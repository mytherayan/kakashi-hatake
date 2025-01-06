'use client'

import Link from 'next/link'
import { Scroll, User, Briefcase, BookOpen, PieChart, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
className="bg-white text-black py-4 sticky top-0 z-10 backdrop-blur-lg bg-opacity-30"

    >
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Kakashi Hatake</Link>
        <ul className="flex space-x-6">
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#about" className="flex items-center hover:text-gray-300">
              <User className="w-4 h-4 mr-1" />
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#skills" className="flex items-center hover:text-gray-300">
              <PieChart className="w-4 h-4 mr-1" />
              Skills
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#missions" className="flex items-center hover:text-gray-300">
              <Briefcase className="w-4 h-4 mr-1" />
              Missions
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#relationships" className="flex items-center hover:text-gray-300">
              <Users className="w-4 h-4 mr-1" />
              Relationships
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="#books" className="flex items-center hover:text-gray-300">
              <BookOpen className="w-4 h-4 mr-1" />
              Books
            </Link>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}

