import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Brow Waxing',
    id: 'brow-waxing',
    href: 'tel:61466609975',
    price: '$25',
    time: '15 min',
    description:
      'Efficient eyebrow shaping with high-quality wax. Lasts up to 4 weeks.',
    features: [
      'Shapes and defines eyebrows',
      'Quick and efficient procedure',
      'Uses high-quality wax for minimal pain',
      'Results last up to 4 weeks',
    ],
    mostPopular: false,
  },
  {
    name: 'Brow Wax & Make-Up',
    id: 'brow-waxing-makeup',
    href: 'tel:61466609975',
    price: '$65',
    time: '45 min',
    description:
      'One of our most popular services, combining brow waxing with a professional make-up application to complete your look.',
    features: [
      'Shapes and defines eyebrows',
      'Quick and efficient procedure',
      'Uses high-quality wax for minimal pain',
      'Results last up to 4 weeks',
      'Professional make-up application for a polished finish',
    ],
    mostPopular: true,
  },
  {
    name: 'Brow Lamination & Wax',
    id: 'brow-lamination-wax',
    href: 'tel:61466609975',
    price: '$95',
    time: '75 min',
    description: 'Get styled and defined brows with a bundled brow set.',
    features: [
      'Combination of brow lamination and wax services',
      'Achieve perfectly styled and defined brows',
      'Save money by bundling services',
      'Results last up to 8 weeks',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function WaxingPrices() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-600">
            Treat Yourself with Our
          </h2>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Brow Waxing Treatments
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Achieve flawlessly shaped and defined brows with our professional brow
          waxing services. Perfectly maintain your brows and complete your look
          with our expert make-up application.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-rose-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-rose-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-rose-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-rose-600"
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
                className={classNames(
                  tier.mostPopular
                    ? 'bg-rose-600 text-white shadow-sm hover:bg-rose-500'
                    : 'text-rose-600 ring-1 ring-inset ring-rose-200 hover:ring-rose-300',
                  'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600'
                )}
              >
                Book {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
