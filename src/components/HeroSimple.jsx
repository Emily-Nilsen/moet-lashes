import Image from 'next/image'
import { HeaderNav } from './HeaderNav'
import { motion } from 'framer-motion'

export function HeroSimple({ image, textWhite, textPink }) {
  return (
    <section>
      <div className="relative z-0">
        <HeaderNav />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-100" />

        <div className="relative">
          <div className="absolute inset-0">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                type: 'fade',
              }}
              className="relative h-full w-full object-cover"
            >
              <Image
                src={image}
                alt="Eyebrow styling hero image"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-zinc-800"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-800/50"
              aria-hidden="true"
            />
          </div>
          <div className="relative px-4 py-24 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="mt-24 -mb-16 pt-20 text-left text-5xl font-extrabold tracking-tight sm:text-6xl md:mt-48 lg:text-7xl">
              <span className="text-white">{textWhite} </span>
              <span className="font-medium italic text-rose-200">
                {textPink}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
