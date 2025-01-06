'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Card3DProps {
  title: string
  subtitle?: string
  image: string
  href: string
  glowColor?: string
}

export function Card3D({ title, subtitle, image, href, glowColor = "#ffffff" }: Card3DProps) {
  return (
    <Link href={href}>
      <motion.div 
        className="group relative w-[300px] h-[400px] rounded-xl cursor-pointer perspective-1000"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-black/50 to-black/20 z-10 
          transition-opacity duration-500 group-hover:opacity-0" />
        
        <motion.div 
          className="absolute inset-0 rounded-xl preserve-3d group-hover:my-rotate-y-180 duration-1000"
          whileHover={{ rotateY: 15, rotateX: 10 }}
        >
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-xl object-cover transition-all duration-500 
                filter grayscale group-hover:grayscale-0"
            />
          </div>
          
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black via-black/50 to-transparent
            opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {subtitle && (
              <p className="text-gray-200 text-sm">{subtitle}</p>
            )}
          </div>
        </motion.div>
        
        <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 duration-500"
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), 
              ${glowColor}20, transparent 40%)`
          }} />
      </motion.div>
    </Link>
  )
}

