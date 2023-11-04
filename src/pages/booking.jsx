import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import { HeroBooking } from '@/components/HeroBooking'
import { Map } from '@/components/Map'
import { Team } from '@/components/Team'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  LocationMarkerIcon,
  PhoneIcon,
  ViewListIcon,
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
// To use the interceptor
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

export default function Booking() {
  return (
    <>
      <Head>
        <title>Book your appointment with Moët Lashes today</title>
        <meta
          name="description"
          content="Transform your look with expert lash extensions, lifts, tints, eyebrow lamination and waxing services at Moët Lashes in Cairns City. Book your appointment today!"
        />
        <meta
          name="keywords"
          content="eyebrow lamination Cairns, brow lamination Cairns, eyebrow waxing Cairns, brow waxing Cairns, eyebrow styling Cairns, brow styling Cairns, Cairns City, Moët Lashes, eyelash extensions, eyelash lifts, eyelash tints, eyebrow lamination, eyebrow waxing, beauty salon"
        />
      </Head>

      <main className="bg-white">
        <HeroBooking />
        <Map />
        <Team />
      </main>
      <Footer />
    </>
  )
}
