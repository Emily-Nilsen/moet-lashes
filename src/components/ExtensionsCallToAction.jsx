import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export function ExtensionsCallToAction() {
  return (
    <div className="relative bg-zinc-800">
      <div className="h-96 bg-rose-300 sm:absolute sm:left-0 sm:h-full sm:w-1/2">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            type: 'fade',
          }}
          className="relative h-full w-full object-cover"
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/moetlashes-img-1_olyxfe.webp"
            alt="Add volume and length"
            fill
            className="h-full w-full object-cover"
            // priority
            // unoptimized
          />
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="sm:ml-auto sm:w-1/2 sm:pl-10">
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight text-rose-200 sm:text-5xl">
            Accentuate your{' '}
            <span className="font-medium italic text-white">eyes</span>
          </h3>
          <p className="mt-3 text-lg text-zinc-300">
            Add volume, length and definition to your lash line with an eyelash
            extension treatment or a lift & tint @ Moët Lashes.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:61466609975"
                className="group inline-flex items-center justify-center rounded-full border border-transparent bg-white px-5 py-3 text-base font-medium text-rose-400 transition duration-300 ease-in-out hover:bg-rose-300 hover:text-white"
              >
                <p>Call our salon</p>

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
  )
}
