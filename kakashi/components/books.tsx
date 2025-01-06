'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const books = [
  {
    title: "Icha Icha Paradise",
    author: "Jiraiya",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9309b2f-8a2c-462e-adeb-71f8a7ceac57/d34dfzl-27c6e307-032f-4119-b81f-960639cb57f0.jpg/v1/fit/w_750,h_1100,q_70,strp/icha_icha_paradise__coloration_by_ookamikasumi_d34dfzl-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEwMCIsInBhdGgiOiJcL2ZcL2M5MzA5YjJmLThhMmMtNDYyZS1hZGViLTcxZjhhN2NlYWM1N1wvZDM0ZGZ6bC0yN2M2ZTMwNy0wMzJmLTQxMTktYjgxZi05NjA2MzljYjU3ZjAuanBnIiwid2lkdGgiOiI8PTc1MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FBjdrtM7GB28R9bgFRCHmz9rqtpZhSNL82ozSGSaZuQ"
  },
  {
    title: "Icha Icha Violence",
    author: "Jiraiya",
    image: "https://i.imgur.com/XWWx8il.png"
  },
  {
    title: "Icha Icha Tactics",
    author: "Jiraiya",
    image: "https://i.imgur.com/XWWx8il.png"
  }
]

export function Books() {
  return (
    <section id="books" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center text-black"
        >
          Favorite Books
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

