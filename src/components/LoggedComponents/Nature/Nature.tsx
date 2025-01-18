import React from 'react'
import Image from 'next/image';
import DivisorLine from '@/utils/DivisorLine/DivisorLine';

const Nature = () => {
    return (
        <section className="py-16 bg-[#072a52] text-white max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <h3 className="text-5xl font-bold">The Nature</h3>

                <DivisorLine color='white' />

            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16 lg:px-32">
                {[...Array(6)].map((_, index) => (
                    <article key={index} className="flex flex-col">
                        <figure className="w-full h-72 relative overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/dtoditltb/image/upload/v1737159748/faroiceland_mwzhom.jpg"
                                alt="Nature"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                priority={index === 0}
                            />
                            <figcaption className="sr-only">
                                Nature Landscape
                            </figcaption>
                        </figure>
                        <span className="p-4">
                            <h4 className="text-xl font-semibold">Not simply do</h4>
                            <p className="text-gray-300">ACP, web page</p>
                        </span>
                    </article>
                ))}
            </section>
        </section>
    );
}

export default Nature;