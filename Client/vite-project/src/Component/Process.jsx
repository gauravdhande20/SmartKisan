import React from 'react'
  import { Camera, Brain, Leaf, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    title: "Capture Image",
    desc: "Take a clear photo of the affected leaf.",
    icon: <Camera size={24} color='black' />,
    active: true,
  },
  {
    title: "Smart Analysis",
    desc: "AI diagnoses the nutrient deficiency.",
    icon: <Brain size={24} color='black' />,
    active: true,
  },
  {
    title: "Suggestion",
    desc: "Get tailored fertilizer recommendations.",
    icon: <Leaf size={24} color='black'/>,
    active: true,
  },
  {
    title: "Order",
    desc: "Purchase suggested products instantly.",
    icon: <ShoppingCart size={24} color='black' />,
    active: true,
  },
  {
    title: "Delivery",
    desc: "Fast delivery to your farm location.",
    icon: <Truck size={24} />,
    active: false,
  },
];

function Process() {
  return (
    <>
      
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-green-500 text-sm font-semibold tracking-widest uppercase">
          Simple Process
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          How It Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          From leaf to relief in 5 simple steps. We've streamlined the process
          to get you the help your crops need, fast.
        </p>

        {/* Grid Steps */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid place-items-center text-center gap-3"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-full grid place-items-center
                ${
                  step.active
                    ? "bg-green-500 text-white shadow-lg"
                    : "border-2 border-gray-300 text-gray-400"
                }`}
              >
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="font-semibold text-lg">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm max-w-[200px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  
      
    </>
  )
}

export default Process






