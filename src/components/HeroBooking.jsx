import Image from 'next/image'
import Link from 'next/link'
import { HeaderNav } from './HeaderNav'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MapPinIcon,
  PhoneIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name_start: `Opening `,
    name_end: `hours`,
    description: [`Open 7 days`, '9 am - 9 pm'],
    icon: PhoneIcon,
    href: `tel:0466 609 975`,
    rel: 'noopener noreferrer',
    link_name: `0466 609 975`,
  },
  {
    name_start: `Find `,
    name_end: `us`,
    description: [
      'Shop 19 (Salon Elixir)',
      'Orchid Plaza, 58 Lake Street',
      'Cairns City, Qld 4870',
    ],
    icon: MapPinIcon,
    href: `https://goo.gl/maps/bZ8DPQgVW6a6Ux296`,
    rel: 'noopener noreferrer',
    target: '_blank',
    link_name: `Moët Lashes`,
  },
  {
    name_start: `Pricing `,
    name_end: `list`,
    description: ['Lash extensions', 'Lifts & tints', 'Brows'],
    icon: ListBulletIcon,
    href: `/pricing`,

    link_name: `Pricing`,
  },
]

export function HeroBooking() {
  return (
    <section className="relative z-0">
      <HeaderNav />
      <div className="bg-rose-50 pb-6 sm:pb-10">
        <header className="relative bg-zinc-800 pb-36">
          <div className="absolute inset-0">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="h-full w-full object-cover"
            >
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mo%C3%ABt%20Lashes/general/moet-hero_gkhyyy.webp"
                alt="Moët Lashes"
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-zinc-900/20" />
            <div
              className="absolute inset-0 bg-gradient-to-b from-zinc-800"
              aria-hidden="true"
            />
          </div>
          <Popover as="div" className="relative z-10">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 pb-2 sm:px-6 lg:px-8"></div>
          </Popover>

          <div className="relative mx-auto mt-24 max-w-md px-4 pt-32 pb-16 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
            <h2 id="features-heading" className="font-bold text-rose-200">
              Cairns City
            </h2>
            <h3 className="py-6 text-6xl text-white">
              <span className="font-bold">Get in</span>{' '}
              <span className="font-medium italic text-rose-200">touch</span>
            </h3>
            <p className="mt-3 max-w-md text-lg font-normal text-white sm:text-xl md:mt-5 md:max-w-md">
              Book a lash or brow treatment today, and let us help answer any
              questions. We’d love to hear from you!
            </p>
          </div>
        </header>

        <main>
          <div className="bg-rose-50">
            {/* Cards */}
            <section
              className="relative z-10 mx-auto -mt-32 max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
              aria-labelledby="contact-heading"
            >
              <h2 className="sr-only" id="contact-heading">
                Cairns City eyelash extensions
              </h2>
              <div className="grid grid-cols-1 gap-y-12 sm:gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {features.map((feature, i) => (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.3,
                      ease: 'easeOut',
                    }}
                    key={i}
                    className="flex flex-col rounded-2xl bg-white shadow-xl"
                  >
                    <div className="relative flex-1 px-6 py-8 md:px-8">
                      <h3 className="text-2xl font-medium text-zinc-800">
                        {feature.name_start}
                        <span className="font-normal italic text-rose-400">
                          {feature.name_end}
                        </span>
                      </h3>
                      <p className="mt-4 text-base text-zinc-500">
                        {feature.description.map((item, i) => (
                          <div key={i}>{item}</div>
                        ))}
                      </p>
                    </div>
                    <Link
                      rel={feature.rel ? feature.rel : null}
                      target={feature.target ? feature.target : null}
                      href={feature.href}
                      passHref
                    >
                      <div className="group flex cursor-pointer items-center rounded-bl-2xl rounded-br-2xl bg-rose-50 p-6 text-base font-semibold capitalize text-zinc-700 transition duration-300 ease-in-out hover:bg-rose-300 hover:text-white md:px-8">
                        <span>
                          <feature.icon className="mr-2 h-5 w-5 text-rose-400 group-hover:text-rose-200" />
                        </span>

                        {feature.link_name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mx-auto mt-1 max-w-3xl text-4xl font-normal text-rose-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Beauty
                <span className="font-semibold italic text-zinc-900">
                  {' '}
                  redefined
                </span>
                .<span className="font-normal italic"></span>
              </h1>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
