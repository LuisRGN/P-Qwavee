import DivisorLine from '@/utils/DivisorLine/DivisorLine'
import Image from 'next/image'
import React from 'react'

const Pricing = () => {
    return (
        <section className="py-16 px-4 max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#072a52] font-bold">Pricing</h3>

                <DivisorLine color='#072a52' />

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16 lg:px-32">
                    {[...Array(3)].map((_, index) => (
                        <article key={index} className="flex flex-col shadow-custom">
                            <figure className="w-full h-72 relative overflow-hidden">
                                <Image
                                    src="https://res.cloudinary.com/dtoditltb/image/upload/v1737061497/Cabo_de_Ajo_lighthouse_x27ayb.jpg"
                                    alt="Pricing"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                    priority={index === 0}
                                />
                                <figcaption className="sr-only">
                                    Image {index + 1}
                                </figcaption>
                            </figure>
                            <span className="p-4 flex flex-col text-center gap-2">
                                <span>Lorem Ipsum is simply dummy text</span>

                                <h4 className="text-xl font-semibold">There are many variationsof passages of Lorem Ipsum Is</h4>

                                <p className="text-gray-300">Lorem Ipsum is simply dummy text of the pri-nting and typesetting industry.
                                    Lorem Ipsumstandard dummy.</p>
                                <h5 className=''>From a Lorem</h5>
                                <div className='border-b border-red-500 w-24 mx-auto'></div>
                            </span>
                        </article>
                    ))}
                </section>

                <section className='flex justify-center mt-14 gap-3'>
                    <button className='mt-6 p-3 sm:p-4 bg-[#072a52] text-white rounded hover:bg-[#0a3d7a] transition-colors duration-300'>FIND MORE</button>
                </section>
            </section>
        </section>
    )
}

export default Pricing