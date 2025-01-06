'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-8"
    >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kakashi Hatake. All rights reserved.</p>
        <p className="mt-2">Hidden Leaf Village, Land of Fire</p>
      </div>
    </motion.footer>
  )
}

