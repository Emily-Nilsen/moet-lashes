import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookBrowsToday } from './BookBrowsToday'

export function Waxing() {
  return (
    <div className="relative bg-white pb-0 sm:pt-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-rose-50 lg:right-72" />
            <svg
              className="absolute left-1/2 top-8 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={2}
                    height={2}
                    className="text-rose-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* Mobile */}
            <div className="relative overflow-hidden rounded-2xl pb-10 pt-64 shadow-xl sm:hidden">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/general/brows-image-3.webp"
                alt="The process of eyebrow waxing"
                fill
              />
              <div className="absolute inset-0 bg-rose-500/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-20" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      Our professional stylists will shape and enhance your
                      brows to perfection.
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
            {/* Desktop*/}
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                type: 'fade',
              }}
              className="relative hidden overflow-hidden rounded-2xl pb-10 pt-64 shadow-xl sm:block"
            >
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/general/brows-image-3.webp"
                alt="The process of eyebrow waxing"
                fill
              />
              <div className="absolute inset-0 bg-rose-500/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-20" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      Our professional stylists will shape and enhance your
                      brows to perfection.
                    </p>
                  </div>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="prose prose-rose pt-12 text-zinc-500 sm:pt-16 lg:pt-20">
            <h3 className="">What is Eyebrow Waxing?</h3>
            <div className="mt-6 space-y-6 text-zinc-500">
              <p className="text-base">
                Eyebrow waxing is a hair removal method that involves using hot
                or cold wax to remove unwanted hairs from the eyebrows. It’s a
                quick and effective way to shape and define brows, leaving them
                neat and tidy.
              </p>
              <h3>Benefits of Eyebrow Waxing</h3>
              <ul role="list">
                <li>
                  <span className="font-bold text-zinc-700">
                    Defines Shape:
                  </span>{' '}
                  Waxing precisely removes unwanted hair, creating a clean and
                  defined brow shape.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">
                    Long-Lasting Results:
                  </span>{' '}
                  The results last up to 8 weeks, so you won’t have to worry
                  about maintaining your brows as often.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">Pain-Free:</span>{' '}
                  The procedure is relatively pain-free, with minimal
                  discomfort.
                </li>
              </ul>
              <h3>After Care: Maintaining Your Perfect Brows</h3>
              <p className="mt-6 space-y-6 text-base text-zinc-500">
                To maintain the beauty and health of your brows post-treatment,
                we recommend:
              </p>
              <ul role="list">
                <li>
                  <span className="font-bold text-zinc-700">Moisturise:</span>{' '}
                  Hydrate your brows regularly with a brow conditioner while
                  avoiding excessive oils.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">
                    Water & Makeup:
                  </span>{' '}
                  Wait 24 hours before applying makeup, and avoid water and
                  steam for 24 hours.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">UV Exposure:</span>{' '}
                  Minimise UV exposure and chlorine contact to prolong the
                  eyebrow lamination result.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">
                    Tanning/Exfoliating Products:
                  </span>{' '}
                  Avoid tanning products and wait 3 days before using
                  exfoliating products or retinoids around your brows.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BookBrowsToday />
    </div>
  )
}
