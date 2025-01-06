'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="bg-white py-24">
  <div className="container mx-auto flex items-center justify-center space-x-12">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-lg text-center sm:text-left"
    >
      <h1 className="text-5xl font-extrabold  mb-4 leading-tight">
        Kakashi Hatake
      </h1>
      <p className="text-xl  opacity-80 mb-6">
        Copy Ninja | Jonin | Former ANBU | Former Hokage
      </p>
      <div className="text-left">
        <p className="mb-8  opacity-90">
          Known for my Sharingan eye and mastery of over a thousand jutsu.
        </p>
        <p className="mb-8  opacity-90">
          I'm a skilled ninja committed to protecting the Hidden Leaf Village and mentoring the next generation.
        </p>
      </div>
      <motion.a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-white hover:text-black border-2 border-black transition duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="w-1/3 md:w-1/4 lg:w-1/4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="https://tse1.mm.bing.net/th?id=OIP.gL2KHpKozcIJplYe7Ms7dQHaKS&pid=15.1"
          alt="Kakashi Hatake"
          width={400}
          height={500}
          className="rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:grayscale-0"
        />
      </motion.div>
    </motion.div>
  </div>
</section>

  )
}

