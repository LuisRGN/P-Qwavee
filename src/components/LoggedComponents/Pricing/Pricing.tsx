import Image from 'next/image'
import React from 'react'

const Pricing: React.FC = () => {
    return (
        <section className="py-16 px-4 max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#072a52] font-bold">Pricing</h3>

                <div className="relative my-8 w-20 mx-auto md:mx-0">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-[#072a52]"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-gray-500"></span>
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16">
                    {[...Array(3)].map((_, index) => (
                        <article key={index} className="flex flex-col shadow-custom ">
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
                            <span className="px-4 pt-4 pb-8 flex flex-col text-center gap-4">
                                <span className='text-gray-300'>Lorem Ipsum is simply dummy text</span>

                                <h4 className="text-xl font-bold text-[#072a52]">There are many variationsof passages of Lorem Ipsum Is</h4>

                                <p className="text-[#4e4e4e]">Lorem Ipsum is simply dummy text of the pri-nting and typesetting industry.
                                    Lorem Ipsumstandard dummy.</p>
                                <div className='flex flex-col gap-1'>
                                    <h5 className='text-[#072a52] font-bold'>From a Lorem</h5>
                                    <div className='border-b-[3px] border-[#ededf1] w-24 mx-auto'></div>
                                </div>
                            </span>
                        </article>
                    ))}
                </section>

                <section className='flex justify-center mt-14 gap-3'>
                    <button className="mt-6 p-2 sm:p-3 sm:px-6 bg-[#072a52] text-white rounded hover:bg-[#0a3d7a] transition-colors duration-300">FIND MORE</button>
                </section>
            </section>
        </section>
    )
}

export default Pricing;