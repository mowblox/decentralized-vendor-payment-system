import LandingPage from '@/components/sections/landingPage'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "PAYFLOW | Landing Page",
  description: "Current landing page for Payflow application",
};


function Home() {
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default Home