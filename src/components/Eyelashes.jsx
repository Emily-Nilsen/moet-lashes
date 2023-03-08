import Image from 'next/image'
import { motion } from 'framer-motion'

export function Eyelashes() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-rose-600">Flat-based</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-zinc-900 sm:text-4xl">
              Eyelash extensions
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
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
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                {/* Mobile */}
                <div className="aspect-w-12 aspect-h-7 sm:hidden lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/eyelash_individual_hwktih.webp"
                    alt="The process of eyebrow lamination"
                    width={1000}
                    height={681}
                  />
                </div>
                {/* Desktop */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    type: 'fade',
                  }}
                  className="aspect-w-12 aspect-h-7 hidden sm:block lg:aspect-none"
                >
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/eyelash_individual_hwktih.webp"
                    alt="The process of eyebrow lamination"
                    width={1000}
                    height={681}
                  />
                </motion.div>
                <figcaption className="mt-3 flex text-sm text-zinc-500">
                  We attach eyelash extensions individually
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-zinc-500">
                Are you looking to lengthen, define and add volume to your
                lashes? Our premium eyelash extensions are the perfect solution.
              </p>
            </div>
            <div className="prose prose-rose mx-auto mt-5 text-zinc-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <h3>Premium eyelash extensions with unique quality</h3>

              <ul role="list">
                <li>
                  Our premium eyelash extensions have a unique flat base,
                  ensuring maximum adhesion. Our skilled technicians attach each
                  extension individually for a natural and stunning look.
                </li>
                <li>
                  Our premium eyelash extensions are made from high-quality PBT
                  material, ensuring a soft, lightweight and natural feel.
                </li>
                <li>
                  Our eyelash extensions are certified by SGS and MSDS for their
                  premium quality.
                </li>
                <li>
                  The unique curvature technique provides a long-lasting curl,
                  and the high-temperature processing sterilizes each extension.
                </li>
              </ul>
              <p>
                Get a natural and stunning look with our premium quality eyelash
                extensions, individually attached by skilled technicians and
                certified for their unique flat base and high-quality PBT
                material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
