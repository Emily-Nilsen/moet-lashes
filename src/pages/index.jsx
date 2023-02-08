import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Instagram } from '@/components/Instagram'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

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
      <Header />
      <main>
        <Hero />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <CallToAction
          imgUrl="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Mo%C3%ABt%20Lashes/general/moetlashes-img-2_myvur9.webp"
          title="Get the look you"
          titleEmphasis="want"
          description="Define your lashes and brows at Moët Lashes."
          btnText="Book now"
        />
        <Instagram />
        {/* <Pricing /> */}
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
