import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { HeaderNav } from '@/components/HeaderNav'
import { Hero } from '@/components/Hero'
import { Instagram } from '@/components/Instagram'

import { CustomerReviews } from '@/components/CustomerReviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Moët Lashes - Get a complete makeover with Cairns’ best lash and brow
          treatments
        </title>
        <meta
          name="description"
          content="Transform your look with professional eyelash extensions and eyebrow styling in Cairns. Book now for stunning results."
        />
        <meta
          name="keywords"
          content="moet lashes, lashes, lash extensions, lash lift, lash tint, brow tint, brow lamination, lash and brow treatments, lash and brow treatments cairns, eyelash extensions Cairns, lash and brow treatment, eyebrow styling Cairns, beauty salon Cairns, eyelash extensions and eyebrow styling Cairns, beauty salon services Cairns, eyelash extension techniques, eyebrow styling trends"
        />
      </Head>

      <main>
        <Hero />

        <CallToAction
          imgUrl="/images/general/hero-call-to-action.webp"
          title="Get the look you"
          titleEmphasis="want"
          description="Define your lashes and brows at Moët Lashes."
          btnText="Book now"
        />
        <Instagram />
        <CustomerReviews />
      </main>
      <Footer />
    </>
  )
}
