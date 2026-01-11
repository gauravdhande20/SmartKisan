import React from 'react'
import Navsec from '../Component/Navsec.jsx'
import Herosec from '../Component/Herosec.jsx'
import Process from '../Component/Process.jsx'
import WhyChoose from '../Component/WhyChoose.jsx'  
import Footer from '../Component/Footer.jsx'


function Home() {
   
  return (
    <div>
      <Navsec />
      <Herosec />
      <Process />
      <WhyChoose />
      <Footer />
    </div>
  )
}

export default Home
