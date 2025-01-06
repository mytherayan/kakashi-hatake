import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const timelinePeriods = {
  'young-kakashi': {
    title: 'Young Prodigy',
    subtitle: 'The Early Years',
    description: `Kakashi Hatake graduated from the Academy at age 5, became a Chunin at age 6, and achieved Jonin rank by age 12. 
    Under the guidance of the Fourth Hokage, Minato Namikaze, young Kakashi developed his exceptional skills and earned recognition as a prodigy.`,
    key_events: [
      'Graduated Academy at age 5',
      'Became Chunin at age 6',
      'Joined Team Minato',
      'Received Sharingan from Obito',
      'Developed Chidori'
    ],
    image: 'https://example.com/young-kakashi-full.jpg'
  },
  'anbu-kakashi': {
    title: 'ANBU Captain',
    subtitle: 'The Dark Years',
    description: `Following the deaths of his teammates and sensei, Kakashi joined the ANBU Black Ops. 
    As an ANBU captain, he carried out numerous high-risk missions and earned the reputation as a cold-blooded assassin.`,
    key_events: [
      'Joined ANBU Black Ops',
      'Became ANBU Captain',
      'Protected the Third Hokage',
      'Trained future ANBU members',
      'Left ANBU to become a Jonin instructor'
    ],
    image: 'https://example.com/anbu-kakashi-full.jpg'
  },
  'team-7-sensei': {
    title: 'Team 7 Sensei',
    subtitle: 'The Teaching Years',
    description: `Kakashi was assigned as the leader of Team 7, consisting of Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. 
    His teaching methods and philosophy helped shape the future generation of ninja.`,
    key_events: [
      'Became Team 7\'s leader',
      'Taught the bell test',
      'Trained Sasuke for Chunin exams',
      'Fought Zabuza and Haku',
      'Protected his students during various missions'
    ],
    image: 'https://example.com/team-7-kakashi-full.jpg'
  },
  'hokage': {
    title: 'Sixth Hokage',
    subtitle: 'The Leadership Years',
    description: `After the Fourth Great Ninja War, Kakashi was appointed as the Sixth Hokage. 
    He led the Hidden Leaf Village through a period of peace and technological advancement.`,
    key_events: [
      'Appointed as Sixth Hokage',
      'Modernized the village',
      'Strengthened international relations',
      'Oversaw technological advancement',
      'Trained the next generation of ninja'
    ],
    image: 'https://example.com/hokage-kakashi-full.jpg'
  }
}

export default function TimelinePeriod({ params }: { params: { period: string } }) {
  const period = timelinePeriods[params.period as keyof typeof timelinePeriods]
  
  if (!period) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto text-white">
      <Link 
        href="/" 
        className="inline-block mb-8 text-blue-400 hover:text-blue-300 transition-colors"
      >
        ← Back to Timeline
      </Link>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="relative h-[400px]">
          <Image
            src={period.image}
            alt={period.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-800/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold mb-2">{period.title}</h1>
            <p className="text-xl text-gray-300">{period.subtitle}</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">{period.description}</p>
            
            <h2 className="text-2xl font-bold mb-4">Key Events</h2>
            <ul className="space-y-2">
              {period.key_events.map((event, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full" />
                  {event}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

