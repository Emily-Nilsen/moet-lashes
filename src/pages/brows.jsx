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
          imageDesktop="/images/general/brows-desktop.webp"
          imageMobile="/images/general/brows-mobile.webp"
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
