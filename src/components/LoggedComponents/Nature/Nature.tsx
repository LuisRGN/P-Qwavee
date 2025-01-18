import React from 'react'
import Image from 'next/image';

const Nature: React.FC = () => {
    return (
        <section className="py-16 bg-[#072a52] text-white max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Nature</h3>

                <div className="relative my-8 w-20 mx-auto md:mx-0">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t-2 border-white"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-2 bg-white text-gray-500"></span>
                    </div>
                </div>

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