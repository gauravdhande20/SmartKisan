import React from 'react'
import img1 from '../Photos/user1.jpg'
import img2 from '../Photos/user2.jpg'
import img3 from '../Photos/user3.jpg'

function Herosec() {
  return (
    <>
       <div className="max-w-7xl mx-auto bg-[#edf7ee] px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Smarter Farming, <br />
            <span className="text-green-500">Better Yields.</span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg">
            Get instant fertilizer recommendations from a single photo.
            Our AI analyzes your crop health and delivers the right products
            directly to your farm.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
              Start Analysis Now
            </button>

            <button className="flex items-center gap-2 px-6 py-3 border rounded-xl text-gray-700 font-semibold hover:bg-gray-100">
              ▶ Watch Demo
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img className="w-9 h-9 rounded-full border" src={img1} />
              <img className="w-9 h-9 rounded-full border" src={img2} />
              <img className="w-9 h-9 rounded-full border" src={img3} />
            </div>
            <span>Trusted by <strong>2,000+</strong> farmers</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* <img
            src={heroImg}
            alt="Farmer using mobile"
            className="rounded-3xl shadow-2xl"
          /> */}

          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              ✔
            </div>
            <div>
              <p className="text-sm text-gray-500">Analysis Complete</p>
              <p className="font-semibold text-gray-800">
                Nitrogen Deficiency Detected
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Herosec
