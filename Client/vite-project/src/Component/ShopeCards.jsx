import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import MainCaeds from './MainCaeds';
import Cards from '../../public/Cards.json';

function ShopeCards() {
  return (
    <div>
      <section className='w-full h-auto bg-[#fff8e0] pb-7 '>

        <div className="headingSec flex justify-between items-center pt-7 pb-7 ml-10 mr-10">
            <div className='text-[#6e4d42] font-bold text-2xl'>Shop by Category</div>
            <div className='text-[#6e4d42] font-bold flex items-center gap-2'>View All Categories <IoIosArrowRoundForward className='text-3xl font-extrabold' /></div>
        </div>
        <div>
            {/* category cards */}
            <div className='w-full h-auto flex justify-center flex-wrap gap-8  '>
                {
                    Cards.map(category => {
                        return (
                        <MainCaeds
                        key={category.id}
                        url={category.url}
                            title={category.title}
                            desc={category.desc}
                        />
                        )
                    }
                    )
                }
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default ShopeCards
