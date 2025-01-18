import React from 'react'
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'

const Variations: React.FC = () => {
    return (
        <section className="py-16 px-4 max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#072a52] font-bold">There Are Many Variations</h3>

                <div className="relative my-8 w-20 mx-auto md:mx-0">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-[#072a52]"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-gray-500"></span>
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 mb-20 w-full">
                    {[...Array(4)].map((_, index) => (
                        <article
                            key={index}
                            className="w-full h-[20rem] sm:h-[24rem] lg:h-[30rem] relative overflow-hidden shadow-lg"
                        >
                            <figure className="w-full h-full relative">
                                <Image
                                    src="https://res.cloudinary.com/dtoditltb/image/upload/v1737061503/el-faro-marina-vallarta_mb4zu2.jpg"
                                    alt="Faro Marina Vallarta"
                                    layout="fill"
                                    objectFit="cover"
                                    className="z-0"
                                    priority={index === 0}
                                />

                                <div className="w-full h-full bg-gradient-custom absolute inset-0 z-10"></div>

                                <figcaption className="sr-only">
                                    Faro Marina Vallarta
                                </figcaption>
                            </figure>

                            <section className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between z-20 font-medium">
                                <span className="text-lg sm:text-xl lg:text-[1.4rem]">Essentially Unchanged</span>
                                <BsArrowRight className="text-2xl sm:text-3xl" />
                            </section>
                        </article>
                    ))}
                </section>
                <section className='flex flex-col items-center mt-14 gap-3'>
                    <p className='text-[#072a52] font-bold text-3xl md:text-4xl lg:text-5xl text-center w-[60%]'>It has survived thru time
                        and also the onslaught of nature</p>
                    <button className="mt-6 p-2 sm:p-3 sm:px-6 bg-[#072a52] text-white rounded hover:bg-[#0a3d7a] transition-colors duration-300">PRAESENTIUM VOL</button>
                </section>
            </section>
        </section>
    )
}

export default Variations;