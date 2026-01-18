import React from 'react'
import Navsec from '../Component/Navsec'
import WeatherDashboard from '../Component/WeatherDashboard'
import Footer from '../Component/Footer'
import WeatherHero from '../Component/WeatherHero'
function WeatherCasting() {
  return (
    <div>
      <Navsec />
      <WeatherHero />
      <WeatherDashboard />
      <Footer />
    </div>
  )
}

export default WeatherCasting
