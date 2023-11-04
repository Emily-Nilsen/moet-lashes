import Image from 'next/image'
import { HeaderNav } from './HeaderNav'
import { motion } from 'framer-motion'

export function PricingHeader() {
  return (
    <div className="relative z-0">
      <HeaderNav />
      {/* Mobile Devices */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:hidden sm:py-32">
        <div>
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/co_rgb:18181B,e_colorize:70/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/pricing_fazhzg.webp"
            alt="Moêt Lashes pricing"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </div>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fb7185" />
              <stop offset={1} stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fb7185" />
              <stop offset={1} stopColor="#e11d48" />
            </linearGradient>
          </defs>
        </svg>
        <div className="z-1 relative mx-auto max-w-2xl text-center">
          <h1 className="mt-10 -mb-10 pt-20 text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">Our</span>{' '}
            <span className="font-medium italic text-rose-200">pricing</span>
          </h1>
        </div>
      </div>
      {/* Large Screens */}
      <div className="relative isolate hidden overflow-hidden bg-gray-900 py-24 sm:block sm:py-32">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            type: 'fade',
          }}
        >
          <Image
            src="https://res.cloudinary.com/dt3k2apqd/image/upload/co_rgb:18181B,e_colorize:70/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/pricing_fazhzg.webp"
            alt="Moêt Lashes pricing"
            fill
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
        </motion.div>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fb7185" />
              <stop offset={1} stopColor="#f43f5e" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fillOpacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fb7185" />
              <stop offset={1} stopColor="#e11d48" />
            </linearGradient>
          </defs>
        </svg>
        <div className="z-1 relative mx-auto max-w-2xl text-center">
          <h1 className="mt-10 -mb-10 pt-20 text-center text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-white">Our</span>{' '}
            <span className="font-medium italic text-rose-200">pricing</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
