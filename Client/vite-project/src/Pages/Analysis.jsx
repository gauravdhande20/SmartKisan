import React from 'react'
import Navsec from '../Component/Navsec'
import ImgmRec from '../Component/ImgRec'
import Footer from '../Component/Footer'
import img1 from '../Photos/img2.jpg'
import UreaImage from '../Photos/UreaGranules (46-0-0)1.png'
import Nitrogen from '../Photos/Nitrogen-Plus Bio Booster.png'
import infect1 from '../Photos/Infect1.jpg'

function Analysis() {
    return (
        <div>
            <Navsec />
            {/* <ImgmRec /> */}
            <div className="bg-[#f6faf7] min-h-screen px-4 py-6">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between  gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Crop Health Analysis
                            </h1>
                            <p className="text-green-700 text-sm">
                                AI-powered diagnostics for healthier yields. Get instant fertilizer recommendations.
                            </p>
                        </div>
                        <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                            View Past Analyses
                        </button>
                    </div>

                    {/* Main Grid */}
                            <ImgmRec className=" "/>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* letft column */}
                        <div className="lg:col-span-1">
                            <img src={img1} alt="" />

                            </div>
                          

                       

                        

                        {/* RIGHT COLUMN */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Analysis Result */}
                            <div className="bg-white rounded-xl p-5 flex flex-col md:flex-row gap-4">
                                <img
                                    src={infect1}
                                    alt="Crop"
                                    className="w-full md:w-40 h-40 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                            ATTENTION NEEDED
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            Oct 24, 2023 • 10:42 AM
                                        </span>
                                    </div>

                                    <h2 className="text-lg font-bold mb-1">
                                        Nitrogen Deficiency
                                    </h2>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Yellowing of older leaves starting at the tips and spreading along the midrib.
                                    </p>

                                    <div>
                                        <p className="text-xs mb-1">AI Confidence</p>
                                        <div className="w-full bg-gray-200 h-2 rounded-full">
                                            <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                                        </div>
                                        <p className="text-xs mt-1 text-right text-gray-500">94% Match</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Treatments */}
                            <div>
                                <h3 className="font-semibold mb-4 flex items-center gap-2">
                                    🌱 Recommended Treatments
                                </h3>

                                <div className="space-y-4">

                                    {/* Card 1 */}
                                    <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={Nitrogen}
                                                alt="Product"
                                                className="w-14 h-14 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-sm">
                                                    Nitrogen-Plus Bio Booster
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    Fast-acting liquid nitrogen supplement
                                                </p>
                                                <p className="text-xs text-green-600 mt-1">
                                                    Dosage: Mix 50ml per gallon
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">$24.99</p>
                                            <button className="mt-2 bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={UreaImage}
                                                alt="Product"
                                                className="w-14 h-14 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-sm">
                                                    Urea Granules (46-0-0)
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    High-concentration nitrogen fertilizer
                                                </p>
                                                <p className="text-xs text-green-600 mt-1">
                                                    Dosage: 1 lb per 1000 sq ft
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold">$18.50</p>
                                            <button className="mt-2 border text-xs px-3 py-1 rounded hover:bg-gray-100">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}

export default Analysis
