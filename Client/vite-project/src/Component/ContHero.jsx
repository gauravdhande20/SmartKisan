import React from 'react'
import Img1 from '../Photos/Infect1.jpg'
import Img2 from '../Photos/ContHero.jpg'

function ContHero() {
  return (
      <div className="w-full min-h-screen bg-white flex items-center md:px-12">
      <div className="h-[60vh]  grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl" style={{backgroundImage: `url(${Img2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>

        {/* Left Side Content */}
        <div className="space-y-6 pl-15 mt-36">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Get In Touch <br />
          </h1>

          <p className="text-gray-100 text-sm md:text-base">
           We're here to help you grow. Reach out for expert soil advice or
delivery inquiries.

          </p>

          
        </div>



      </div>
    </div>
  )
}

export default ContHero
