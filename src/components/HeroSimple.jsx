import Image from 'next/image'
import { HeaderNav } from './HeaderNav'
import { motion } from 'framer-motion'

export function HeroSimple({ imageDesktop, imageMobile, textWhite, textPink }) {
  return (
    <section>
      <motion.div className="relative z-0">
        <HeaderNav />
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            type: 'fade',
          }}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-zinc-100"
        />
        <div className="relative bg-zinc-800 ">
          {/* Mobile devices */}
          <div className="absolute inset-0 sm:hidden">
            <div className="relative h-full w-full object-cover">
              <Image
                src={imageMobile}
                alt="Eyebrow styling hero image"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-zinc-800"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-zinc-800/50"
              aria-hidden="true"
            />
          </div>
          {/* Large screens */}
          <div className="absolute inset-0 hidden sm:block">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                type: 'fade',
              }}
              className="relative h-full w-full object-cover"
            >
              <Image
                src={imageDesktop}
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

          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <h1 className="-mb-16 mt-24 pt-20 text-left text-5xl font-extrabold tracking-tight sm:text-6xl md:mt-48 lg:text-7xl">
              <span className="text-white">{textWhite} </span>
              <span className="font-medium italic text-rose-200">
                {textPink}
              </span>
            </h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
