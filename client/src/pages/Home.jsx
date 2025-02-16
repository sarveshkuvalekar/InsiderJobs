import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JonListing from '../components/JonListing'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <JonListing/>
        <AppDownload/>
        <Footer/>
    </div>
  )
}

export default Home