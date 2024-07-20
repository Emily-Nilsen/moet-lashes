import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { HeaderNav } from './HeaderNav'

const features = [
  {
    name_start: `Lash `,
    name_end: `extensions`,
    description: `Say goodbye to mascara and hello to long, full lashes.`,
    href: `/lashes`,
    link_name: `Extensions`,
  },
  {
    name_start: `Get the perfect `,
    name_end: `lift`,
    description: `Enhance your natural lashes with a lift and tint treatment.`,
    href: `/lashes/#lifts`,
    link_name: `Lifts`,
  },
  {
    name_start: `Perfectly groomed `,
    name_end: `brows`,
    description: `Achieve your ideal brow shape with our expert services.`,
    href: `/brows`,
    link_name: `Brows`,
  },
]

export function Hero() {
  return (
    <div className="relative z-0">
      <HeaderNav />
      <div className="bg-rose-50 pb-6 sm:pb-10">
        <header className="relative bg-zinc-800 pb-36">
          {/* Mobile device */}
          <div className="absolute inset-0 sm:hidden">
            <div className="h-full w-full object-cover">
              <Image
                src="/images/general/home-hero-mobile.webp"
                alt="Moët Lashes"
                fill
                priority
                className="object-cover object-left"
              />
            </div>
            <div
              className="to-t absolute inset-0 bg-gradient-to-b from-zinc-800"
              aria-hidden="true"
            />
          </div>
          {/* Large screen */}
          <div className="absolute inset-0 hidden sm:block">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                type: 'fade',
              }}
              className="h-full w-full object-cover"
            >
              <Image
                src="/images/general/home-hero-desktop.webp"
                alt="Moët Lashes"
                fill
                priority
                className="object-cover"
              />
            </motion.div>
            <div
              className="to-t absolute inset-0 bg-gradient-to-b from-zinc-800"
              aria-hidden="true"
            />
          </div>
          <Popover as="div" className="relative z-10">
            <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 pb-2 pt-6 sm:px-6 lg:px-8"></div>
          </Popover>

          <div className="relative mx-auto mt-24 max-w-md px-4 pb-16 pt-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
            <h2 id="features-heading" className="font-bold text-rose-200">
              Cairns City
            </h2>
            <h3 className="py-6 text-6xl text-white">
              <span className="font-bold">Perfect brows,</span> <br />
              <span className="font-bold">flawless</span>{' '}
              <span className="font-medium italic text-rose-200">lashes</span>
            </h3>
            <p className="mt-3 max-w-md text-lg font-normal text-white sm:text-xl md:mt-5 md:max-w-md">
              Transform your look with a lash and brow treatment at Moët Lashes.
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
              {/* Mobile */}
              <div className="grid grid-cols-1 gap-y-12 sm:hidden sm:gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
                {features.map((feature, i) => (
                  <div
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
                        {feature.description}
                      </p>
                    </div>
                    <Link href={feature.href} passHref>
                      <div className="cursor-pointer rounded-bl-2xl rounded-br-2xl bg-rose-50 p-6 text-base font-medium capitalize text-rose-400 transition duration-300 ease-in-out hover:bg-rose-300 hover:text-white md:px-8">
                        {feature.link_name}
                        <span aria-hidden="true"> &rarr;</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Desktop */}
              <div className="hidden grid-cols-1 gap-y-12 sm:grid sm:gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
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
                      delay: i * 0.2,
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
                        {feature.description}
                      </p>
                    </div>
                    <Link href={feature.href} passHref>
                      <div className="cursor-pointer rounded-bl-2xl rounded-br-2xl bg-rose-50 p-6 text-base font-medium capitalize text-rose-400 transition duration-300 ease-in-out hover:bg-rose-300 hover:text-white md:px-8">
                        {feature.link_name}
                        <span aria-hidden="true"> &rarr;</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          {/* Lashes */}
          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-6 sm:py-20 lg:px-8">
            <div className="text-center">
              <h1 className="mx-auto mt-1 max-w-3xl text-4xl font-normal leading-tight text-rose-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                The secret to
                <span className="font-semibold italic text-zinc-900">
                  {' '}
                  stunning
                </span>{' '}
                <span className="block">eyes.</span>
                <span className="font-normal italic"></span>
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
