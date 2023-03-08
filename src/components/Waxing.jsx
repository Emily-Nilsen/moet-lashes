import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Waxing() {
  return (
    <div className="relative bg-white pb-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-rose-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
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
            {/* Testimonial card*/}
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                type: 'fade',
              }}
              className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl"
            >
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/eyebrows-6_ybkep1.webp"
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
            <h3 className="">What is eyebrow waxing?</h3>
            <div className="mt-6 space-y-6 text-zinc-500">
              <p className="text-base">
                Eyebrow waxing is a hair removal method that involves using hot
                or cold wax to remove unwanted hairs from the eyebrows. It’s a
                quick and effective way to shape and define brows, leaving them
                neat and tidy.
              </p>
              <h3>The benefits of eyebrow lamination and waxing</h3>
              <ul role="list">
                <li>
                  Adds volume and shape to the brows: Eyebrow lamination and
                  waxing are great for adding volume and shape to the brows,
                  giving you the appearance of fuller and more defined brows.
                </li>
                <li>
                  Lasts for up to 8 weeks: Eyebrow lamination lasts up to 8
                  weeks, so you won’t have to worry about maintaining your brows
                  as often.
                </li>
                <li>
                  Easy to maintain: After undergoing eyebrow lamination, you can
                  comb your brows in the desired shape, and they’ll stay that
                  way for the duration of the treatment.
                </li>
                <li>
                  Pain-free: Both eyebrow lamination and waxing are relatively
                  pain-free, with the occasional twinge or discomfort being the
                  only side effect.
                </li>
              </ul>
            </div>
          </div>

          {/* Signature brows */}
          <div className="mt-10">
            <div className="mt-10">
              <Link href="/booking">
                <p className="text-base font-medium text-rose-600">
                  Book now for our <br className="sm:hidden" /> signature brow
                  treatments
                  <span aria-hidden="true"> &rarr;</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
