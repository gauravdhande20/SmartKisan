import React from 'react'
import { CircleUser } from 'lucide-react';
import { FaUserAlt } from "react-icons/fa";
import Signup from './Signup';
import { useNavigate,Link } from "react-router-dom";
function Navsec() {
   const navigate = useNavigate();
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
          <Link to="/" className="cursor-pointer hover:text-green-600">Home</Link >
          <Link to="/Pages/Analysis" className="cursor-pointer hover:text-green-600">Analysis</Link>
          <Link to="/Pages/WeatherCasting" className="cursor-pointer hover:text-green-600">Weather</Link>
          <Link to="/Pages/ContactUs" className="cursor-pointer hover:text-green-600">Contact</Link  >
        </ul>

        <div
           onClick={() => navigate('../Component/Signup')}
          className="w-auto h-auto px-2 py-2 text-black bg-gray-300 rounded-full flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-green-600"
        >
          <FaUserAlt className='text-2xl font-extrabold text-green-400'/>
        </div>
      </nav>
      
    </>
  )
}

export default Navsec
