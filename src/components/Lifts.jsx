import Image from 'next/image'
import Link from 'next/link'

export function Lifts() {
  return (
    <div id="lifts" className="relative bg-white py-16 sm:py-24">
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
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <div>
                <Image
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mo%C3%ABt%20Lashes/general/curling_u5rexx.webp"
                  alt="The process of curling your lashes"
                  fill
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-rose-500/10 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-20" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      We curl and tint your natural lashes by applying a perming
                      solution.
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="prose prose-rose pt-12 text-zinc-500 sm:pt-16 lg:pt-20">
            <h3 className="">What is a lash lift and tint?</h3>
            <div className="mt-6 space-y-6 text-zinc-500">
              <p className="text-base">
                An eyelash lift is a beauty treatment that uses a perming
                solution to curl your natural lashes upwards, giving them a more
                lifted and curved appearance. The process typically involves
                applying a perming solution to your lashes, followed by a
                neutralizing solution to set the curl. Once set, we tint your
                natural eyelashes using a safe, semi-permanent, black vegetable
                dye. The process takes about an hour, and the results last 6-8
                weeks.
              </p>
              <h3>The benefits of lifting and tinting your lashes</h3>
              <ul role="list">
                <li>
                  No need for mascara or eyelash curlers: We lift, curl and tint
                  your lashes with an eyelash lift and tint, eliminating the
                  need for daily mascara or eyelash curlers.
                </li>
                <li>
                  Low-maintenance: Eyelash lifts require minimal upkeep, making
                  them a perfect solution for busy individuals who want to
                  enhance their natural beauty without spending too much time on
                  their beauty routine.
                </li>
                <li>
                  Enhanced natural look: An eyelash lift gives your lashes a
                  natural look, making your eyes appear brighter and more
                  youthful. It can also make your lashes appear fuller and
                  longer, making them more noticeable.
                </li>
              </ul>
              <p>
                An eyelash lift and tint is a great way to enhance natural
                lashes and achieve a brighter, youthful appearance.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <div className="mt-10">
              <Link href="/booking">
                <p className="text-base font-medium text-rose-600">
                  Book now for a lash treatment
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
