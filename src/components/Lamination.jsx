import Image from 'next/image'
import { motion } from 'framer-motion'
import { LaminationSafety } from './LaminationSafety'

export function Lamination() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-rose-600">
              Our Ultimate Guide to
            </h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-zinc-900 sm:text-4xl">
              Eyebrow Lamination & Waxing
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
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
                <div className="aspect-h-7 aspect-w-12 lg:aspect-none sm:hidden">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/general/brows-image-1.webp"
                    alt="The process of eyebrow lamination"
                    width={2000}
                    height={1334}
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
                  className="aspect-h-7 aspect-w-12 hidden lg:aspect-none sm:block"
                >
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/general/brows-image-1.webp"
                    alt="The process of eyebrow lamination"
                    width={2000}
                    height={1334}
                  />
                </motion.div>
                <figcaption className="mt-3 flex text-sm text-zinc-500">
                  We apply a unique lamination solution to the brows.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-zinc-500">
                The shape and thickness of your eyebrows can dramatically change
                your overall appearance. While some people have naturally full
                and thick eyebrows, others need to work a little harder to
                achieve their desired look.
              </p>
            </div>
            <div className="prose prose-rose mx-auto mt-5 text-zinc-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                If you’re looking to add volume and shape to your brows, eyebrow
                lamination and waxing might be the answer you’re looking for.
                This comprehensive guide will cover everything you need to know
                about eyebrow lamination and waxing, including the benefits,
                procedure, and tips for perfect brows.
              </p>
              <h3>What is Eyebrow Lamination?</h3>
              <p>
                Eyebrow lamination is a semi-permanent treatment that uses a
                unique solution to reshape and set the eyebrows in place for up
                to 6-8 weeks. The solution works by ‘laminating’ the brow hairs
                and keeping them in place, giving the appearance of fuller and
                fluffier brows.
              </p>

              <h3>Benefits of Eyebrow Lamination</h3>
              <ul role="list">
                <li>
                  <span className="font-bold text-zinc-700">
                    Perfect Shape for Every Brow:
                  </span>{' '}
                  Ideal for those with thin or unruly brows and individuals
                  desiring a fuller look.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">
                    Effortless Elegance for Weeks:
                  </span>{' '}
                  Treatments last 6-8 weeks and cater to those with medium to
                  full-thickness eyebrows, enhancing natural beauty with minimal
                  maintenance.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">
                    Easy to Maintain:
                  </span>{' '}
                  After undergoing eyebrow lamination, you can comb your brows
                  in the desired shape, and they’ll stay that way for the
                  duration of the treatment.
                </li>
                <li>
                  <span className="font-bold text-zinc-700">Pain-Free:</span>{' '}
                  Both eyebrow lamination and waxing are relatively pain-free,
                  with the occasional twinge or discomfort being the only side
                  effect.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LaminationSafety />
    </div>
  )
}
