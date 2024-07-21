import Image from 'next/image'
import { motion } from 'framer-motion'
import { GoogleMap } from './GoogleMap'
import { SearchIcon } from '@heroicons/react/outline'
// To use the interceptor
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export function Map() {
  // Specify a number between 0 and 1
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })
  const shutterLeft = useAnimation()
  const shutterRight = useAnimation()

  // Left shutter
  useEffect(() => {
    if (inView) {
      shutterLeft.start({
        x: '-50vw',
        transition: {
          delay: 2,
          duration: 0.5,
          ease: 'linear',
        },
      })
    }
    if (!inView) {
      shutterLeft.start({ x: 0 })
    }
  }, [inView, shutterLeft])

  // Right shutter
  useEffect(() => {
    if (inView) {
      shutterRight.start({
        x: '50vw',
        transition: {
          delay: 2,
          duration: 0.5,
          ease: 'linear',
        },
      })
    }
    if (!inView) {
      shutterRight.start({ x: 0 })
    }
  }, [inView, shutterRight])

  return (
    <section>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 sm:pb-16 sm:pt-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-rose-500">
              orchid plaza
            </h2>
            <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              We’re easy to find.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Our beauty salon is located at the heart of Cairns, on the ground
              floor of the Orchid Plaza Shopping Centre.
            </p>
          </div>
        </div>
      </div>

      {/* Find Us! */}
      <div ref={ref} className="my-0 w-screen bg-zinc-50 pb-0 sm:pb-0">
        <div className="relative mx-auto h-[40vh] w-[100vw] overflow-hidden overflow-x-hidden rounded-none bg-rose-300 lg:h-[50vh]">
          <div>
            <div className="flex h-full w-full items-center overflow-hidden overflow-x-hidden bg-zinc-800 object-cover object-center">
              <GoogleMap />
            </div>
          </div>
          {/* Shutters */}
          <motion.div
            animate={shutterLeft}
            className="absolute flex h-full w-1/2 items-center justify-center rounded-none bg-rose-200 text-white"
          >
            <div className="flex h-2/3 w-2/3 items-center justify-center overflow-hidden object-cover object-center sm:h-full sm:w-full">
              <Image
                src="/images/instagram/zinc.svg"
                alt="Moët Lashes Eyelash Salon"
                intrinsic
                className="object-cover object-center"
                unoptimized
                width={300}
                height={300}
              />
            </div>
          </motion.div>
          <motion.div
            animate={shutterRight}
            className="absolute bottom-0 right-0 flex h-full w-1/2 items-center justify-center rounded-none bg-zinc-800 text-white"
          >
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-left font-medium text-rose-200">
                Cairns City
              </h2>
              <h3 className="mt-2 pb-6 text-left text-4xl text-white sm:text-5xl">
                <span className="font-bold">Orchid </span>

                <span className="block font-medium italic text-rose-200">
                  Plaza
                </span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
