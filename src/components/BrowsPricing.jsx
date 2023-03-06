import Link from 'next/link'
import { CheckIcon, PhoneIcon, ClockIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Brow Lamination',
    id: 'tier-lamination',
    href: 'tel:61466609975',
    price: '$60',
    time: '45 min',
    description: 'Brow lamination safely defines and lifts for up to 8 weeks.',
    features: [
      'Lifts, sets and styles brow hairs',
      'Results last up to 8 weeks',
      'Adds volume and definition to brows',
      'Safe and non-invasive procedure',
    ],
  },
  {
    name: 'Brow Wax',
    id: 'tier-wax',
    href: 'tel:61466609975',
    price: '$60',
    time: '45 min',
    description:
      'Efficient eyebrow shaping with high-quality wax. Lasts up to 4 weeks.',
    features: [
      'Shapes and defines eyebrows',
      'Quick and efficient procedure',
      'Uses high-quality wax for minimal pain',
      'Results last up to 4 weeks',
    ],
  },
  {
    name: 'Brow Lamination & Wax',
    id: 'tier-lamination-wax',
    href: 'tel:61466609975',
    price: '$90',
    time: '75 min',
    description: 'Get styled and defined brows with a bundled brow set.',
    features: [
      'Combination of brow lamination and wax services',
      'Achieve perfectly styled and defined brows',
      'Save money by bundling services',
    ],
  },
]

export function BrowsPricing() {
  return (
    <div className="isolate overflow-hidden bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-rose-400">
            Get the Perfect Arch
          </h2>
          <h1 className="pb-2 text-4xl font-extrabold leading-tight text-white sm:text-center sm:text-5xl">
            Brow services and pricing
          </h1>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Affordable brow lamination and wax services to enhance your natural
            beauty.
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
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
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
                    <h2 className="align-center flex pt-6 pb-3 text-xs font-bold tracking-wide text-rose-400">
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
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 flex items-center justify-center rounded-md bg-rose-500 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm transition duration-300 ease-in-out hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                  >
                    <span>
                      <PhoneIcon
                        className="mr-2 h-4 w-5 text-rose-200 group-hover:text-rose-50"
                        aria-hidden="true"
                      />
                    </span>{' '}
                    Book brows
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-y-6 gap-x-8 rounded-3xl p-8 ring-1 ring-zinc-900/10 sm:gap-y-10 sm:p-10 lg:col-span-3 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-rose-500">
                    Lash Wash
                  </h3>
                  <p className="mt-1 text-base leading-7 text-zinc-600">
                    Get rid of itchy eyelashes, eye mucus, and accumulated
                    makeup with our lash cleaning service. Our
                    uniquely-formulated shampoo unclogs pores, promotes growth
                    and enhances serum penetration for thicker, healthier
                    lashes.
                  </p>
                </div>
                <Link
                  href="/booking"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-rose-500 ring-1 ring-inset ring-rose-200 hover:ring-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                >
                  Book a $5 lash wash <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
