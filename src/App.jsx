import React from 'react'
import BannerSection from './components/BannerSection'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import SpecialOffers from './components/SpecialOffers'
import VideoBanner from './components/VideoBanner'
import WhoAreYou from './components/WhoAreYou'
import WhatWeDoImage from './components/WhatWeDoImage'
import CustomerTestimonial from './components/CustomerTestimonial'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <BannerSection/>
      <SpecialOffers/>
      <ProductList/>
      <VideoBanner/>
      <WhoAreYou/>
      <WhatWeDoImage/>
      <CustomerTestimonial/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App