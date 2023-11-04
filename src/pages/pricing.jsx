import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { PricingHeader } from '@/components/PricingHeader'
import { LashesPricing } from '@/components/LashesPricing'
import { LiftsPricing } from '@/components/LiftsPricing'
import { BrowsPricing } from '@/components/BrowsPricing'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Explore the luxury of Moët Lashes: Prices and packages</title>
        <meta
          name="description"
          content="Get the best value for your money with our eyelash extensions, tints, and eyebrow lamination and waxing services. Compare prices and book now for a stunning new look!"
        />
        <meta
          name="keywords"
          content="moet lashes, lashes, lash extensions, lash lift, lash tint, brow tint, brow lamination, lash and brow treatments, lash and brow treatments cairns, eyelash extensions Cairns, lash and brow treatment, eyebrow styling Cairns, beauty salon Cairns, eyelash extensions and eyebrow styling Cairns, beauty salon services Cairns, eyelash extension techniques, eyebrow styling trends"
        />
      </Head>

      <main>
        <PricingHeader />
        <LashesPricing />
        <LiftsPricing />
        <BrowsPricing />
      </main>
      <Footer />
    </>
  )
}
