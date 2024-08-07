import Image from 'next/image'
import Link from 'next/link'

export function BookBrowsToday() {
  return (
    <div className="mt-24 overflow-hidden bg-rose-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Brow Beauty Redefined
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Transform your brows with Moët Lashes’ expert lamination, tinting,
              and waxing services.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Experience the luxury of beautifully shaped brows tailored to
              perfection by our skilled professionals. Book your appointment
              today and achieve your perfect brows!
            </p>
            <div className="mt-10 flex">
              <Link
                href="/pricing"
                className="rounded-md bg-rose-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
              >
                Book your signature brow treatment now{' '}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="/images/general/brows-image-4-mobile.webp"
                alt="Eyebrow tinting service"
                width={384}
                height={512}
                className="aspect-[1/1] w-[18rem] max-w-none rounded-2xl bg-gray-50 object-cover sm:hidden"
              />
              <Image
                src="/images/general/brows-image-4-desktop.webp"
                alt="Eyebrow tinting service"
                width={384}
                height={512}
                className="hidden aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover sm:block"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="/images/general/brows-image-5.webp"
                  width={256}
                  height={192}
                  alt="Eyebrows before and after lamination"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="/images/general/brows-image-6-mobile.webp"
                  alt="Styled eyebrows after lamination"
                  width={384}
                  height={512}
                  className="aspect-[16/9] w-[26rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover sm:hidden sm:aspect-[7/5]"
                />
                <Image
                  src="/images/general/brows-image-6-desktop.webp"
                  alt="Styled eyebrows after lamination"
                  width={384}
                  height={512}
                  className="hidden  aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover sm:block"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="/images/general/brows-image-7.webp"
                  alt="Styled eyebrows after lamination"
                  width={384}
                  height={512}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
