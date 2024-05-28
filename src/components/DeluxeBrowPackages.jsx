import { CheckIcon, PhoneIcon, ClockIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const tiers = [
  {
    name: 'Lamination, Wax & Tint',
    id: 'tint',
    href: 'tel:61466609975',
    priceMonthly: '$95',
    time: '75 min',
    description: 'Full brow transformation with lamination, waxing, and tint.',
    features: [
      'Waxing to shape and define eyebrows',
      'Tint application to add depth and colour lasting 2-4 weeks',
      'Lamination treatment to lift, set, and style brow hairs',
    ],
    featured: false,
  },
  {
    name: 'Lamination, Wax & Hybrid Dye',
    id: 'hybrid-dye',
    href: 'tel:61466609975',
    priceMonthly: '$115',
    time: '90 min',
    description:
      'Experience the ultimate brow luxury with our comprehensive package, including lamination, waxing, and hybrid dye for a superior and long-lasting effect.',
    features: [
      'Waxing to shape and define eyebrows',
      'Hybrid dyes add more intense depth and colour, lasting up to 6-8 weeks',
      'Lamination treatment to lift, set, and style brow hairs',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DeluxeBrowPackages() {
  return (
    <div className="relative isolate bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-rose-100 to-rose-500 opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-rose-600">
          Indulge in Our
        </h2>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Deluxe Brow Packages
        </h1>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Transform your brows with our deluxe packages, offering comprehensive
        treatments including lamination, waxing, and tinting or hybrid dye for
        long-lasting, beautifully defined brows.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-rose-900 shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-rose-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-rose-400' : 'text-rose-600',
                'text-base font-semibold leading-7'
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-bold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              {/* <span
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base'
                )}
              >
                /month
              </span> */}
            </p>
            <h2 className="align-center flex pb-3 pt-6 text-xs font-bold tracking-wide text-rose-400">
              <span>
                <ClockIcon
                  className="mr-1 h-4 w-4 text-rose-300"
                  aria-hidden="true"
                />
              </span>
              {tier.time}
            </h2>
            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base leading-7'
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? 'text-rose-400' : 'text-rose-600',
                      'h-6 w-5 flex-none'
                    )}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-rose-500 text-white shadow-sm hover:bg-rose-400 focus-visible:outline-rose-500'
                  : 'text-rose-600 ring-1 ring-inset ring-rose-200 hover:ring-rose-300 focus-visible:outline-rose-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
              )}
            >
              Book {tier.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
