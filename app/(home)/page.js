import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import Membership from './Sections/MemberShip'
import Donation from './Sections/Donation'
import EventsAndCampaigns from './Sections/EventAndCampign'
import MembersProfileAndStats from './Sections/MembersProfileAndStats'
import NewsAndUpdates from './Sections/NewsAndUpdates '
import GalleryAndMedia from './Sections/GalleryAndMedia '
import Footer from './Sections/Footer'

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Membership />
      <Donation />
      <EventsAndCampaigns />
      <MembersProfileAndStats />
      <NewsAndUpdates />
      <GalleryAndMedia />
      <Footer />
    </div>
  )
}
