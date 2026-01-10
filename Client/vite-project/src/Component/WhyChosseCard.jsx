import React from 'react'
import WhytoChoose from '../../public/WhytoChoose.json'
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdSavings } from "react-icons/md";

const iconFormatter = {
    qr:<MdOutlineQrCodeScanner className="text-green-500 w-8 h-8"/>,
    rocker:<IoIosRocket className="text-green-500 w-8 h-8"/>,
    service:<RiCustomerService2Fill className="text-green-500 w-8 h-8"/>,
    savings:<MdSavings className="text-green-500 w-8 h-8"/>,


} 
 

function WhyChosseCard(props) {
  return (
    <>
    <div className='w-auto px-3 py-7 h-auto'>
      
        <div key={props.id} className="bg-white  rounded-lg shadow-md">
          <div className="flex px-4 pt-4 mb-4">
            {iconFormatter[props.icon]}
          </div>
          <h3 className="text-xl font-bold mb-2 px-3">{props.title}</h3>
          <p className="text-gray-700 px-3 pb-5">{props.description}</p>
        </div>
      
    </div>

    </>  
  )
}

export default WhyChosseCard
