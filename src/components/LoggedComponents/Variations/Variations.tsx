import React from 'react'
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs'

function Variations() {
    const cards = [
        { id: 1, title: "Essentially Unchanged" },
        { id: 2, title: "Essentially Unchanged" },
        { id: 3, title: "Essentially Unchanged" },
        { id: 4, title: "Essentially Unchanged" }
    ]

    return (
        <section className="py-16 px-4 max-w-[1366px] mx-auto">
            <div className="flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-[#072a52]">There Are Many Variations</h3>

                <div className="relative my-8 w-20">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-[#072a52]"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-gray-500"></span>
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 w-full">
                    {cards.map((card) => (
                        <article
                            key={card.id}
                            className="w-full h-[20rem] sm:h-[24rem] lg:h-[30rem] relative overflow-hidden shadow-lg"
                        >
                            <figure className="w-full h-full relative">
                                <Image
                                    src="https://res.cloudinary.com/dtoditltb/image/upload/v1737061503/el-faro-marina-vallarta_mb4zu2.jpg"
                                    alt="Faro Marina Vallarta"
                                    layout="fill"
                                    objectFit="cover"
                                    className="z-0"
                                    priority={card.id === 1}
                                />

                                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-10"></div>

                                <figcaption className="sr-only">
                                    {card.title} - Faro Marina Vallarta
                                </figcaption>
                            </figure>

                            <section className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between z-20">
                                <span className="text-lg sm:text-xl lg:text-[1.4rem]">{card.title}</span>
                                <BsArrowRight className="text-2xl sm:text-3xl" />
                            </section>
                        </article>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default Variations;