import React from 'react'
import LogoSection from '../../LogoSection/LogoSection';
import Image from 'next/image';


const Header = () => {
    return (
        <header className="text-center p-8 bg-white max-w-[1366px] mx-auto"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dtoditltb/image/upload/v1737140823/3b07e6f0fb0b5808e29e621bb4bc0dfe_skn5e8.png')", backgroundSize: 'cover' }}>
            <section className='ml-10'>
                <LogoSection />
            </section>
            <section className='flex items-center mx-6 flex-col md:flex-row md:justify-between'>
                <section className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-5xl text-[#072a52] font-bold">Welcome Alex</h1>

                    <div className="relative my-8 w-20 mx-auto md:mx-0">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t-2 border-[#072a52]"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-2 bg-white text-gray-500"></span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-center md:text-left max-w-[65%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <button className="mt-6 p-3 sm:p-4 bg-[#072a52] text-white rounded hover:bg-[#0a3d7a] transition-colors duration-300">
                        READABLE ENGLISH
                    </button>
                </section>
                <Image
                    src='https://res.cloudinary.com/dtoditltb/image/upload/v1737139101/vista-al-faro-en-ponta-do-arnel-nordeste-isla-de-san-miguel-azores-portugal_vuvpeg.jpg'
                    alt='mirador del faro de ponta do pargo'
                    width={350}
                    height={350}
                    className='rounded-[100%] object-cover w-[105%] mt-8 md:mt-0'
                />
            </section>
        </header>
    );
}

export default Header;