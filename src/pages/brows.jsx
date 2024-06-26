import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { HeroSimple } from '@/components/HeroSimple'
import { Lamination } from '@/components/Lamination'
import { Waxing } from '@/components/Waxing'

export default function Brows() {
  return (
    <>
      <Head>
        <title>Brow Lamination & Waxing - Moët Lashes</title>
        <meta
          name="description"
          content="Transform your brows with our eyebrow lamination and waxing treatments. Say goodbye to unruly brows and hello to a polished look. Book now for a stunning transformation!"
        />
        <meta
          name="keywords"
          content="eyebrow lamination Cairns, brow lamination Cairns, eyebrow waxing Cairns, brow waxing Cairns, eyebrow styling Cairns, brow styling Cairns"
        />
      </Head>

      <main>
        <HeroSimple
          imageDesktop="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/brows-hero_ytyzxf.webp"
          imageMobile="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto,f_auto/Mo%C3%ABt%20Lashes/general/brows-hero-mobile_hclern.webp"
          textWhite="Brow"
          textPink="Styling"
        />
        <Lamination />
        <Waxing />
      </main>
      <Footer />
    </>
  )
}
