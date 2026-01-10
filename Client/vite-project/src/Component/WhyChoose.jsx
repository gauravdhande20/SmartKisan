import React from 'react'
import WhytoChoose from '../../public/WhytoChoose.json'
import WhyChosseCard from './WhyChosseCard.jsx'

function WhyChoose() {
    return (
        <>
            <section className='w-full h-[80vh] bg-[#f5f7f5] flex  '>

                {/* left */}
                <div className='w-[40%] flex flex-col justify-center items-center p-10'>
                    <h1 className='text-black text-3xl font-bold'>Why Choose  <span className="text-green-500">AgriFertilizer?</span></h1>
                    <p className='text-[#91979e] mt-3.5 px-9'>Our platform brings advanced agricultural technology directly to the field, making precision farming accessible to everyone.</p>

                    <button className='mt-8 w-auto h-auto px-4 rounded-2xl py-2 bg-[#dff5e2] border-2 border-[#baf5c4]'>Learn More About Us</button>
                </div>

                {/* right */}
                <div className='w-[60%] flex items-center justify-center '>
                    <div className='grid grid-cols-2 grid-rows-2  gap-2 '>

                        {
                            WhytoChoose.map((item) => (
                                <WhyChosseCard
                                    key={item.id}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}

                                />
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default WhyChoose
