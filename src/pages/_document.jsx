import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653670636/Mo%C3%ABt%20Lashes/SVGs/moet-favicon_qrqvht.svg"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ccb1sla.css"
        ></link>
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
