// 'use client'

// import { Card3D } from './3d-card'

// const timelineCards = [
//   {
//     id: 'young-kakashi',
//     coverImage: 'https://example.com/young-kakashi-cover.jpg',
//     titleImage: 'https://example.com/young-kakashi-title.png',
//     characterImage: 'https://example.com/young-kakashi-character.png',
//     href: '/timeline/young-kakashi',
//     title: 'Young Prodigy'
//   },
//   {
//     id: 'anbu-kakashi',
//     coverImage: 'https://example.com/anbu-kakashi-cover.jpg',
//     titleImage: 'https://example.com/anbu-kakashi-title.png',
//     characterImage: 'https://example.com/anbu-kakashi-character.png',
//     href: '/timeline/anbu-kakashi',
//     title: 'ANBU Captain'
//   },
//   {
//     id: 'team-7-kakashi',
//     coverImage: 'https://example.com/team-7-kakashi-cover.jpg',
//     titleImage: 'https://example.com/team-7-kakashi-title.png',
//     characterImage: 'https://example.com/team-7-kakashi-character.png',
//     href: '/timeline/team-7-sensei',
//     title: 'Team 7 Sensei'
//   },
//   {
//     id: 'hokage-kakashi',
//     coverImage: 'https://example.com/hokage-kakashi-cover.jpg',
//     titleImage: 'https://example.com/hokage-kakashi-title.png',
//     characterImage: 'https://example.com/hokage-kakashi-character.png',
//     href: '/timeline/hokage',
//     title: 'Sixth Hokage'
//   }
// ]

// export function Timeline() {
//   return (
//     <section className="py-20 bg-gray-900">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center text-white mb-16">Journey to Hokage</h2>
//         <div className="flex flex-wrap justify-center gap-8">
//           {timelineCards.map((card) => (
//             <Card3D
//               key={card.id}
//               coverImage={card.coverImage}
//               titleImage={card.titleImage}
//               characterImage={card.characterImage}
//               href={card.href}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

