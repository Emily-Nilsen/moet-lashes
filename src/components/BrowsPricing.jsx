import Link from 'next/link'
import { CheckIcon, PhoneIcon, ClockIcon } from '@heroicons/react/20/solid'
import { DeluxeBrowPackages } from './DeluxeBrowPackages'
import { WaxingPrices } from './WaxingPrices'

const tiers = [
  {
    name: 'First Time Visit - Brow Lamination',
    book: 'First Time Visit',
    id: 'first-time-visit',
    href: 'tel:61466609975',
    price: '$65',
    time: '45 min',
    description:
      'Experience the benefits of our brow lamination service, which safely defines and lifts your brows for up to 8 weeks. The first visit includes an initial consultation.',
    features: [
      'Lifts, sets and styles brow hairs',
      'Results last up to 8 weeks',
      'Adds volume and definition to brows',
      'Safe and non-invasive procedure',
    ],
  },
  {
    name: 'Returning Visit - Brow Lamination',
    book: 'Returning Visit',
    id: 'returning-visit',
    href: 'tel:61466609975',
    price: '$55',
    time: '30 min',
    description:
      'Maintain your perfectly styled brows with our lamination service for returning clients, ensuring lasting definition and lift for up to 8 weeks.',
    features: [
      'Lifts, sets and styles brow hairs',
      'Results last up to 8 weeks',
      'Adds volume and definition to brows',
      'Keeps your brows looking fresh',
    ],
  },
  // {
  //   name: 'Brow Lamination & Wax',
  //   id: 'tier-lamination-wax',
  //   href: 'tel:61466609975',
  //   price: '$95',
  //   time: '75 min',
  //   description: 'Get styled and defined brows with a bundled brow set.',
  //   features: [
  //     'Combination of brow lamination and wax services',
  //     'Achieve perfectly styled and defined brows',
  //     'Save money by bundling services',
  //   ],
  // },
]

export function BrowsPricing() {
  return (
    <div className="isolate overflow-hidden bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-rose-400">
            Add Volume and Definition with Our
          </h2>
          <h1 className="pb-2 text-4xl font-extrabold leading-tight text-white sm:text-center sm:text-5xl">
            Brow Lamination Treatment
          </h1>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Affordable brow lamination services to lift, set, and style your
            eyebrows, enhancing your natural beauty.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#fda4af" />
                <stop offset={1} stopColor="#f43f5e" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-zinc-900/10 sm:p-10"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-rose-500"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-zinc-900">
                        {tier.price}
                      </span>
                    </div>
                    <h2 className="align-center flex pb-3 pt-6 text-xs font-bold tracking-wide text-rose-400">
                      <span>
                        <ClockIcon
                          className="mr-1 h-4 w-4 text-rose-300"
                          aria-hidden="true"
                        />
                      </span>
                      {tier.time}
                    </h2>
                    <p className="mt-6 text-base leading-7 text-zinc-600">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-zinc-600"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-rose-500"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 flex items-center justify-center rounded-md bg-rose-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm transition duration-300 ease-in-out hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                  >
                    <span className="inline">
                      <PhoneIcon
                        className="mr-2 h-4 w-5 text-rose-200 group-hover:text-rose-50"
                        aria-hidden="true"
                      />
                    </span>{' '}
                    Book {tier.book}{' '}
                  </Link>
                </div>
              ))}
              {/* Next pricing tier */}
            </div>
            {/* Waxing prices */}
            <WaxingPrices />
            {/* Deluxe packages */}
            <DeluxeBrowPackages />
          </div>
        </div>
      </div>
    </div>
  )
}
