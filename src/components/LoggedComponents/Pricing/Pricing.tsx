import Image from 'next/image'
import React from 'react'

const Pricing: React.FC = () => {
    return (
        <section className="py-16 px-4">
            <section className="flex flex-col items-center">
                <div>
                    <h3 className="title__component typography--family-ibm-plex-sans sm:text-[50px] text-center text-[#072a52]">Pricing</h3>
                    <div className="divisor-line--four"></div>
                </div>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16">
                    {[...Array(3)].map((_, index) => (
                        <article key={`pricing-item-${index}`} className="shadow--custom simple-animation__card flex flex-col">
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
                            <span className="px-4 pt-6 pb-8 flex flex-col text-center gap-6">
                                <span className='text-[#939598] typography--family-robot font-normal text-[13px]'>Lorem Ipsum is simply dummy text</span>

                                <h4 className="font-bold text-[#072a52] typography--family-ibm-plex-sans text-[21px]">There are many variationsof passages of Lorem Ipsum Is</h4>

                                <p className="text-[#4e4e4e] typography--family-open-sans font-normal text-[15px]">Lorem Ipsum is simply dummy text of the pri-nting and typesetting industry.
                                    Lorem Ipsumstandard dummy.</p>
                                <div className='flex flex-col gap-1'>
                                    <h5 className='text-[#072a52] font-bold typography--family-ibm-plex-sans text-[16px]'>From a Lorem</h5>
                                    <div className='border-b-[3px] border-[#EDEDF1] w-24 mx-auto'></div>
                                </div>
                            </span>
                        </article>
                    ))}
                </section>

                <section className='flex justify-center mt-14 gap-3'>
                    <button className="button--blue typography--family-work-sans text-[14px]">FIND MORE</button>
                </section>
            </section>
        </section>
    )
}

export default Pricing;