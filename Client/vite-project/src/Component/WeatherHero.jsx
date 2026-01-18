import React from 'react'
import Img2 from '../Photos/b5.webp'

function WeatherHero() {
  return (
   <div className="w-full mt-6 bg-white flex items-center md:px-12 mb-15">
             <div className=" h-[60vh]  grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl" style={{backgroundImage: `url(${Img2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
       
               {/* Left Side Content */}
               <div className="space-y-6 pl-15 mt-26">
                 <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                   “Shop Smart. <br /> Shop Easy."
                 </h1>
       
                 <p className="text-gray-100 text-sm md:text-base">
                  Discover top products, exclusive deals, and a seamless shopping experience designed to make your life easier.
       
                 </p>
       
                 
               </div>
       
       
       
             </div>
           </div>
  )
}

export default WeatherHero
