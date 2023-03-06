import { CheckIcon, NoSymbolIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Step 1',
    description: 'Sleep on your back to protect your lashes.',
    icon: CheckIcon,
  },
  {
    name: 'Step 2',
    description: 'Brush your lashes twice daily with a spoolie.',
    icon: CheckIcon,
  },
  {
    name: 'Step 3',
    description: 'Only allow a professional to remove your lashes.',
    icon: CheckIcon,
  },
  {
    name: 'Step 4',
    description: 'Schedule your infill treatment for every 2-3 weeks.',
    icon: CheckIcon,
  },
  {
    name: 'Step 5',
    description: 'Avoid getting your lashes wet for 24 hours.',
    icon: NoSymbolIcon,
  },
  {
    name: 'Step 6',
    description: 'Do not use a curler or apply mascara.',
    icon: NoSymbolIcon,
  },
  {
    name: 'Step 7',
    description: 'Avoid tugging lashes or rubbing your eyes excessively.',
    icon: NoSymbolIcon,
  },
  {
    name: 'Step 8',
    description: 'Do not use oil-based products near your lashes.',
    icon: NoSymbolIcon,
  },
]

export function AfterCare() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-rose-600">
              Lash After-Care
            </h2>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Keep your lashes looking perfect
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Follow these eight easy steps to keep your new lashes looking
              their best.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-0 top-1 h-5 w-5 text-rose-500"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
