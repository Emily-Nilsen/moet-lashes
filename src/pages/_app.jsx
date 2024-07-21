import 'focus-visible'
import '@/styles/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Moët Lashes – Perfect Brows, Flawless Lashes"
        />
        <meta
          property="og:description"
          content="Transform your look with a lash and brow treatment at Moët Lashes – Cairns City."
        />
        <meta property="og:image" content="/images/general/og-image.webp" />
        <meta property="og:url" content="https://moet-lashes.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
