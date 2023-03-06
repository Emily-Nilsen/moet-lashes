import Image from 'next/image'

const people = [
  {
    name: 'Moe',
    role: 'Founder, Beauty Technician',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mo%C3%ABt%20Lashes/general/Moe_circle_animation_t3ysw6.png',
  },
  {
    name: 'Chie',
    role: 'Beauty Technician',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mo%C3%ABt%20Lashes/general/Chie_m0cfrk.png',
  },
]

export function Team() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Meet our artists
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            At Moët Lashes, we believe that looking good also means feeling
            good. That’s why our talented beauty technicians are dedicated to
            making you look and feel your best. With ongoing education and
            training, our technicians stay up-to-date on the latest styles and
            techniques to bring you the highest-quality professional lash
            extensions.
          </p>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Our beauty technicians’ artistic flair and attention to detail
            ensure that every client who walks out of our beauty salon leaves
            with stunning lashes and brows that perfectly complement their
            unique features. Our top priority is to provide you with the best
            eyelash extensions and brow styling in Cairns, all while maintaining
            the utmost professionalism and quality.
          </p>
          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Our ultimate goal is to boost your confidence and have you leave our
            salon feeling confident, glamorous, and ready to take on the world.
            Book your appointment with our beauty technicians today and
            experience the difference that professional lash and brow artistry
            can make!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="relative mx-auto h-56 w-56 rounded-full">
                <Image
                  className="mx-auto h-56 w-56 rounded-full"
                  src={person.imageUrl}
                  fill
                  alt={person.name}
                />
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-zinc-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-zinc-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
