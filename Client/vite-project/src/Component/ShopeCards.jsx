import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import MainCaeds from './MainCaeds';
import Cards from '../../public/Cards.json';

function ShopeCards() {
  return (
    <div>
      <section className='w-full h-auto  pb-7 '>

        <div className="headingSec flex flex-col  pt-7 pb-7 ml-10 mr-10">
            <div className='text-black font-extrabold text-3xl'>Fertilizer Catalog</div>
            <div className='text-[#96b096] font-extraboldbold flex items-center mt-3 pr-78 gap-2'>Browse our premium selection of fertilizers optimized for specific crops and soil
conditions. Boost your yield with scientifically formulated nutrients.</div>
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
                            Name={category.Name}
                            dic={category.dic}
                            Catg={category.Catg}
                            price={category.price}
                            prv_price={category.prv_price}
                            off={category.off}
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
