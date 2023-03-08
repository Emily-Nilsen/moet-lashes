import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-1.webp'
import { PhoneIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export function CallToAction({
  imgUrl,
  title,
  titleEmphasis,
  description,
  btnText,
}) {
  return (
    <section id="book-today" className="relative overflow-hidden">
      <div className="relative bg-zinc-800">
        <div className="h-full bg-zinc-800 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          {/* Mobile */}
          <div className="relative h-60 w-full object-cover sm:hidden sm:h-96 lg:h-full">
            <Image
              src={imgUrl}
              alt="Add volume and length"
              fill
              className="object-cover"
            />
          </div>
          {/* Desktop */}
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.7,
              type: 'fade',
            }}
            className="relative hidden h-60 w-full object-cover sm:block sm:h-96 lg:h-full"
          >
            <Image
              src={imgUrl}
              alt="Add volume and length"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-6 md:py-24 lg:px-8">
          <div className="lg:ml-auto lg:w-1/2 lg:px-20">
            <h3 className="mt-2 text-4xl font-extrabold leading-tight tracking-tight text-rose-200 sm:text-5xl">
              {title}{' '}
              <span className="font-normal italic text-white">
                {titleEmphasis}
              </span>
            </h3>
            <p className="mt-3 text-lg text-zinc-300">{description}</p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="tel:61466609975"
                  className="group inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-400 transition duration-300 ease-in-out hover:bg-rose-300 hover:text-white"
                >
                  <p>{btnText}</p>

                  <PhoneIcon
                    className="ml-3 -mr-1 h-5 w-5 text-rose-300 group-hover:text-rose-50"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
