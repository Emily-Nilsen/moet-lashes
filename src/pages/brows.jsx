import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSimple } from '@/components/HeroSimple'
import { Lamination } from '@/components/Lamination'
import { Waxing } from '@/components/Waxing'

export default function Pricing() {
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
      <Header />
      <main>
        <HeroSimple />
        <Lamination />
        <Waxing />
      </main>
      <Footer />
    </>
  )
}
