import React from 'react'

function Navsec({ onLoginOpen }) {
  return (
    <>
     <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
            🌿
          </div>
          <h1 className="text-xl font-bold">AgroLeaf AI</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-pointer hover:text-green-600">Home</li>
          <li className="cursor-pointer hover:text-green-600">How it Works</li>
          <li className="cursor-pointer hover:text-green-600">Features</li>
          <li className="cursor-pointer hover:text-green-600">Contact</li>
        </ul>

        <button
        onClick={onLoginOpen}
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium"
      >
        Sign Up / Login
      </button>
      </nav>
      
    </>
  )
}

export default Navsec
