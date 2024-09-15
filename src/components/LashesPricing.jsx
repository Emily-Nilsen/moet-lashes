import Link from 'next/link'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon, PhoneIcon, ClockIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'fullset', label: 'Full-Set', priceSuffix: '/full-set' },
  { value: 'megaset', label: 'Mega-Set', priceSuffix: '/mega-set' },
]
const tiers = [
  {
    name: 'Classic Lashes',
    id: 'tier-classic',
    href: 'tel:61466609975',
    price: { fullset: '$75', megaset: '$105' },
    time: { fullset: '60 min', megaset: '90 min' },
    description:
      'Individual eyelash extensions are attached one by one to each natural lash.',
    features: [
      'It gives the most natural look',
      'Recommended for those who have never tried eyelash extensions before',
      '$55 full-set infills (45 min)',
      '$85 mega-set infills (75 min)',
    ],
    mostPopular: false,
  },
  {
    name: 'Double Lashes',
    id: 'tier-double',
    href: 'tel:61466609975',
    price: { fullset: '$85', megaset: '$115' },
    time: { fullset: '60 min', megaset: '105 min' },
    description:
      'The double method attaches two single eyelash extensions to each natural lash.',
    features: [
      'It gives the illusion of fuller and fluffy-looking lashes',
      'Perfect for those who wear eye make-up daily',
      '$65 full-set infills (60 min)',
      '$95 mega-set infills (90 min)',
    ],
    mostPopular: false,
  },
  {
    name: 'Hybrid Lashes',
    id: 'tier-hybrid',
    href: 'tel:61466609975',
    price: { fullset: '$95', megaset: '$125' },
    time: { fullset: '75 min', megaset: '105 min' },
    description:
      'A hybrid lash combines a flat lash with a 3D and 4D volume lash.',
    features: [
      'It achieves a dense and more defined lash line',
      'Recommended for those wishing to obtain a wow effect or those with sparse eyelashes',
      '$75 full-set infills (60 min)',
      '$105 mega-set infills (90 min)',
    ],
    mostPopular: true,
  },
  {
    name: 'Volume Lashes',
    id: 'tier-volume',
    href: 'tel:61466609975',
    price: { fullset: '$105', megaset: '$135' },
    time: { fullset: '90 min', megaset: '120 min' },
    description:
      'The volume method attaches three extra fine lashes to each natural lash.',
    features: [
      'The resulting bouquet of volume lashes creates a dramatic and dark lash line',
      'Lashes look both fluffy and entirely natural',
      '$85 full-set infills (75 min)',
      '$115 mega-set infills (90 min)',
    ],
    mostPopular: false,
  },
  {
    name: 'Wispy Lashes',
    id: 'tier-wispy',
    href: 'tel:61466609975',
    price: { fullset: '$115', megaset: '$145' },
    time: { fullset: '90 min', megaset: '120 min' },
    description:
      'The wispy eyelash extension is a new style of lash extension with noticeable spikes and a lush appearance.',
    features: [
      'The unique hybrid eyelash extensions create a smooth and feathered look',
      'It achieves a natural-looking, more dramatic makeup look',
      '$95 full-set infills (75 min)',
      '$125 mega-set infills (90 min)',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function EyelashRemoval() {
  return (
    <div className="relative mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
      <div className="mx-auto max-w-md lg:max-w-4xl">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 ring-1 ring-rose-900/10 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
          <div className="lg:min-w-0 lg:flex-1">
            <h3 className="text-2xl font-medium leading-8 tracking-tight text-rose-600">
              Eyelash removal
            </h3>
            <div className="mt-2 text-base leading-7 text-zinc-600">
              At Moët Lashes, we offer safe and gentle eyelash extension removal
              for $35. Get your lashes removed for{' '}
              <span className="font-semibold text-zinc-900">only $10</span> if
              you book any of our eyelash treatments.
            </div>
          </div>
          <div>
            <Link
              href="/booking"
              className="inline-block rounded-lg bg-rose-50 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-rose-800 transition duration-300 ease-in-out hover:bg-rose-100"
            >
              Book an eyelash removal appointment{' '}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LashesPricing() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-rose-50/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-500">
            Lash Extensions
          </h2>
          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Premium eyelash extensions
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600">
          Choose between our{' '}
          <span className="font-bold text-zinc-700">full-set</span> or our
          ultimate <span className="font-bold text-zinc-700">mega-set</span>{' '}
          treatments. We also offer an{' '}
          <span className="font-bold italic text-rose-500">infill</span> option
          for customers returning within three weeks of their last visit.
        </p>{' '}
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-rose-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    checked ? 'bg-rose-500 text-white' : 'text-zinc-500',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-rose-500'
                  : 'ring-1 ring-rose-200 ',
                'rounded-3xl bg-white p-8'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-rose-500' : 'text-zinc-900',
                  'text-lg font-semibold leading-8'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {tier.description}
              </p>

              <h2 className="align-center flex pb-3 pt-6 text-xs font-bold tracking-wide text-rose-400">
                <span>
                  <ClockIcon
                    className="mr-1 h-4 w-4 text-rose-300"
                    aria-hidden="true"
                  />
                </span>
                {tier.time[frequency.value]}
              </h2>
              {/* Price */}
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-zinc-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-zinc-600">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-rose-500 text-white shadow-sm hover:bg-rose-600'
                    : 'text-rose-500 ring-1 ring-inset ring-rose-200 hover:ring-rose-300',
                  'mt-6 flex items-center justify-center rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500'
                )}
              >
                <span>
                  <PhoneIcon
                    className="mr-2 h-4 w-5 text-rose-200 group-hover:text-rose-50"
                    aria-hidden="true"
                  />
                </span>{' '}
                Book {tier.name}
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-zinc-600"
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
          ))}
        </div>
      </div>
      <EyelashRemoval />
    </div>
  )
}
