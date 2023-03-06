import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon, PhoneIcon, ClockIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Tint',
    id: 'tier-tint',
    href: 'tel:61466609975',
    price: '$30',
    time: '30 min',
    description: 'Black vegetable dye adds depth without extensions.',
    features: [
      'Adds depth and a deep black colour',
      'We use a safe, semi-permanent, black vegetable dye',
      'Recommended for those who want an alternative to eyelash extensions',
    ],
    mostPopular: false,
  },
  {
    name: 'Lift & Tint',
    id: 'tier-lift-and-tint',
    href: 'tel:61466609975',
    price: '$80',
    time: '90 min',
    description:
      'Curl, define and darken lashes without extensions using a safe vegetable dye.',
    features: [
      'Eyelashes are curled and set into a styled position',
      'It achieves a more defined lash line',
      'Adds depth and a deep black colour',
      'We use a safe, semi-permanent, black vegetable dye',
      'Recommended for those who want an alternative to eyelash extensions',
    ],
    mostPopular: true,
  },
  {
    name: 'Lift',
    id: 'tier-lift',
    href: 'tel:61466609975',
    price: '$60',
    time: '60 min',
    description: 'Define your natural lash line with a lift.',
    features: [
      'Eyelashes are curled and set into a styled position',
      'It achieves a more defined lash line',
      'Recommended for those who want an alternative to eyelash extensions',
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function LiftsPricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-rose-500">
            Lifts & Tints
          </h2>
          <h1 className="pb-2 text-4xl font-extrabold text-zinc-900 sm:text-center sm:text-5xl">
            Pricing for lash{' '}
            <span className="font-medium italic text-rose-400">lifts </span> and
            tints
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-zinc-600">
          We use a perming treatment to curl your natural lashes and tint them
          using a safe, semi-permanent, black vegetable dye.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-rose-500'
                  : 'ring-1 ring-zinc-200',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-rose-500' : 'text-zinc-900',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-rose-500/10 py-1 px-2.5 text-xs font-semibold leading-5 text-rose-500">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {tier.description}
              </p>
              <h2 className="align-center flex pt-6 pb-3 text-xs font-bold tracking-wide text-rose-400">
                <span>
                  <ClockIcon
                    className="mr-1 h-4 w-4 text-rose-300"
                    aria-hidden="true"
                  />
                </span>
                {tier.time}
              </h2>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-zinc-900">
                  {tier.price}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-rose-500 text-white shadow-sm hover:bg-rose-600'
                    : 'text-rose-500 ring-1 ring-inset ring-rose-200 hover:ring-rose-300',
                  'mt-6 flex items-center justify-center rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500'
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
                className="mt-8 space-y-3 text-sm leading-6 text-zinc-600 xl:mt-10"
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
    </div>
  )
}
