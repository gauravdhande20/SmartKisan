import React from 'react'
import Navsec from '../Component/Navsec.jsx'
import ShopHero from '../Component/ShopHero.jsx'
import ShopeCards from '../Component/ShopeCards.jsx'
import Footer from '../Component/Footer.jsx'

function Shop() {
  return (
    <div>
      <Navsec />
        <ShopHero />
        <ShopeCards />
        <Footer />
    </div>
  )
}

export default Shop
