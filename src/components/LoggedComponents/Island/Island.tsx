'use client'
import DivisorLine from '@/utils/DivisorLine/DivisorLine'
import React from 'react'
import ReactPlayer from 'react-player'

const Island = () => {
    return (
        <section className="max-w-[1366px] mx-auto custom-bg">
            <h3 className="sr-only">The island</h3>
            <section className='flex flex-col lg:flex-row custom-bg2 lg:ml-24 xl:ml-32 pt-12 overflow-hidden'>
                <section className='w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] relative'>

                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=1XzVh435dzc"
                        className="absolute inset-0"
                        width="100%"
                        height="100%"
                        playing={false}
                        loop={false}
                        muted={true}
                        controls={true}
                    />
                </section>

                <div className='flex flex-col items-start py-10 px-6 sm:px-12 lg:px-16 xl:px-28 lg:w-1/2'>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#072a52] font-bold">The island</h2>

                    <DivisorLine color='#072a52' />

                    <p className="text-gray-600 text-left w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>

                    <button className="mt-6 p-3 sm:p-4 bg-[#072a52] text-white rounded hover:bg-[#0a3d7a] transition-colors duration-300">
                        LEARN MORE
                    </button>
                </div>
            </section>
        </section>
    )
}

export default Island