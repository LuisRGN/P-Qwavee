import React from 'react'
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'

const Variations: React.FC = () => {
    return (
        <section className="py-16 px-4">
            <section className="flex flex-col items-center">
                <div>
                    <h3 className="title__component typography--family-ibm-plex-sans sm:text-[50px] text-center text-[#072a52]">There Are Many Variations</h3>
                    <div className="divisor-line--four"></div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 mb-20 w-full">
                    {[...Array(4)].map((_, index) => (
                        <article
                            key={`variation-item-${index}`}
                            className="simple-animation__card shadow-lg hover:shadow-xl w-full h-[20rem] sm:h-[24rem] lg:h-[30rem] relative overflow-hidden "
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

                                <div className="w-full h-full bg-gradient__custom absolute inset-0 z-10"></div>

                                <figcaption className="sr-only">
                                    Faro Marina Vallarta
                                </figcaption>
                            </figure>

                            <section className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between z-20 font-medium">
                                <span className="text-lg sm:text-[20px] font-bold typography--family-ibm-plex-sans">Essentially Unchanged</span>
                                <BsArrowRight className="text-2xl sm:text-3xl" />
                            </section>
                        </article>
                    ))}
                </section>
                <section className='flex flex-col items-center mt-14 gap-3'>
                    <p className='title__component typography--family-ibm-plex-sans sm:text-[50px] text-[#072a52] text-center w-[60%]'>It has survived thru time
                        and also the onslaught of nature</p>
                    <button className="button--blue typography--family-work-sans text-[17.7px]">PRAESENTIUM VOL</button>
                </section>
            </section>
        </section>
    )
}

export default Variations;