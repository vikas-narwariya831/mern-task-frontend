import React from 'react'
import BannerSection from './components/BannerSection'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import SpecialOffers from './components/SpecialOffers'

function App() {
  return (
    <div>
      <Navbar/>
      <BannerSection/>
      <SpecialOffers/>
      <ProductList/>
    </div>
  )
}

export default App