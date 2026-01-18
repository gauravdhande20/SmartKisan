import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import MainCaeds from './MainCaeds';
import Cards from '../../public/Cards.json';


function ShopeCards() {
    return (
        <div>
            <section className='w-full h-auto bg-[#f5f7f5]   '>

                <div className="headingSec flex flex-col  pt-7 pb-7 ml-10 mr-10">
                    <div className='text-black font-extrabold text-3xl'>Fertilizer Catalog</div>
                    <div className='text-[#96b096] font-extraboldbold flex items-center mt-3 pr-78 gap-2'>Browse our premium selection of fertilizers optimized for specific crops and soil
                        conditions. Boost your yield with scientifically formulated nutrients.</div>
                </div>
                <div>
                    {/* category cards */}
                    <div className='w-full h-auto pb-12 flex '>
                        <div className='w-[22vw] h-[137vh] rounded-3xl bg-white shadow ml-4 mt-15 ]'>
                            
                                <h1 className='text-2xl font-bold ml-10 pt-7'>Fertilizers</h1>

                                <div className='  pl-5 '>
                                    <h6 className='mt-4 text-[#13ed13] font-bold pb-2'>Nitrogen Fertilizers</h6>
                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Urea</label></div>

                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Ammonium Sulphate</label></div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Ammonium Nitrate</label>
                                    </div>

                                    <div>
                                    <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />

                                    <label className='ml-2 '>Sodium Nitrate</label>

                                    </div>
                                    <div>
                                    <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                    <label className='ml-2 '>Ammonium Chloride</label>

                                    </div>
                                </div>

                                <div className='  pl-5 '>
                                    <h6 className='mt-4  text-[#13ed13]  font-bold pb-2'>Phosphorus Fertilizers</h6>
                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Single Super Phosphate</label></div>

                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Triple Super Phosphate</label></div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Di-Ammonium Phosphate</label>
                                    </div>

                                    <div>
                                    <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />

                                    <label className='ml-2 '>Rock Phosphate</label>

                                    </div>
                                    
                                </div>

                                <div className='  pl-5 '>
                                    <h6 className='mt-4 text-[#13ed13]   font-bold pb-2'>Potassium Fertilizers</h6>
                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Muriate of Potash</label></div>

                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Sulphate of Potash</label></div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Potassium Nitrate</label>
                                    </div>

                                    
                                   
                                </div>

                                <div className='  pl-5 '>
                                    <h6 className='mt-4 text-[#13ed13]   font-bold pb-2'>Micronutrient Fertilizers</h6>
                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Zinc Sulphate</label></div>

                                    <div><input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Ferrous Sulphate</label></div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Copper Sulphate</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Manganese Sulphate</label>
                                    </div>

                                    <div>
                                        <input type="checkbox" name="cropType" id="" className='accent-[#13ed13]' />
                                        <label className='ml-2 '>Molybdenum</label>
                                    </div>

                                    
                                   
                                </div>

                                <div className="button mt-10">
                                    <button className='mt-6  ml-10 bg-[#13ed13] text-white font-bold px-4 py-2 rounded-2xl flex items-center gap-2 hover:bg-green-600 duration-300'>Apply Filters <IoIosArrowRoundForward className='text-xl' /></button>  

                                </div>

                            
                        </div>
                        <div className='w-[75vw] '>
                            <div className='w-full h-[90px] '></div>
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
                                                color={category.color}
                                                displ={category.displ}
                                            />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default ShopeCards
