import Head from 'next/head'
import Link from 'next/link'
import { Footer } from '@/components/Footer'

import { HeroSimple } from '@/components/HeroSimple'
import { Eyelashes } from '@/components/Eyelashes'
import { Lifts } from '@/components/Lifts'
import { Divider } from '@/components/Divider'
import { AfterCare } from '@/components/AfterCare'
import { LashesFaqs } from '@/components/LashesFaqs'
import { ExtensionsCallToAction } from '@/components/ExtensionsCallToAction'

export default function Lashes() {
  return (
    <>
      <Head>
        <title>
          Lashes - Eyelash Extensions, Lifts, Tints | Moët Lashes Cairns City
        </title>
        <meta
          name="description"
          content="Enhance your natural lashes with our premium eyelash extensions, lifts, and tints. Achieve a stunning and long-lasting look at Moët Lashes Cairns City."
        />
        <meta
          name="keywords"
          content="eyelash extensions, eyelash lifts, eyelash tints, lash extensions, lash lifts, lash tints, natural lashes, premium lashes, stunning lashes, long-lasting lashes, Cairns City, Cairns"
        />
      </Head>

      <main>
        <HeroSimple
          imageDesktop="/images/general/lashes.webp"
          imageMobile="/images/general/lashes.webp"
          textWhite="Lash"
          textPink="extensions"
        />
        <Eyelashes />

        <Lifts />
        <Divider />
        <AfterCare />
        <LashesFaqs />
        <ExtensionsCallToAction />
      </main>
      <Footer />
    </>
  )
}
