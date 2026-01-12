import React from 'react'
import { BrowserRouter } from "react-router-dom";
import Cards from '../../public/Cards.json';
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


function MainCaeds(props) {
  return (
    <>
    <div className='h-[55vh] w-[45vh] mr-auto ml-auto mt-10 rounded-3xl bg-[#ffffff] flex items-center flex-col relative'>
            <div className="w-[100%] h-[75%] rounded-2xl bg-center bg-cover flex justify-between" style={{ backgroundImage: `url(${props.url})` }}>
              <div className='h-auto w-auto  bg-black absolute px-3 py-0.5 top-3 left-5 rounded-[10px] flex justify-center items-center' style={{ backgroundColor: `${props.color}`, display: props.offer }}>
                <h1 className='text-[10px] font-bold text-[#6e4d42]  '>{props.off}</h1>
              </div>
              <div className='h-9 w-9 rounded-full bg-[#6e4d42] flex justify-center items-center absolute  top-3 right-5'><CiHeart className='text-amber-50 text-2xl ' /></div>
            </div>
            <div className='  inline-block w-[80%] mt-2'>
              <h1 className='text-[#5c3f36] '>{props.Catg}</h1>
              <h1 className='text-[#3d3d3d] font-bold '>{props.Name}</h1>
    
              <div className='flex justify-between mt-1 pb-4'>
                <h1 className='text-[#6e4d42] font-bold'>{props.price}</h1>
                <h1 className='text-[#8e96a1] flex items-center gap-1 '><FaStar className='text-[#fabd23]' /> {props.prv_price}</h1>
              </div>
    
    
            </div>
          </div>
      
    </>
  )
}

export default MainCaeds
