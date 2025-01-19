import React from 'react'
import LogoSection from '../../LogoSection/LogoSection';
import Image from 'next/image';


const Header: React.FC = () => {
    return (
        <header className="max-limit p-8"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dtoditltb/image/upload/v1737140823/3b07e6f0fb0b5808e29e621bb4bc0dfe_skn5e8.png')", backgroundSize: 'cover' }}>
            <section className='flex justify-center md:justify-start md:ml-10'>
                <LogoSection />
            </section>
            <section className='flex items-center mx-6 flex-col md:flex-row md:justify-between'>
                <section className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div>
                        <h1 className="title-component text-[#072a52]">Welcome Alex</h1>
                        <div className="divisor-line-one"></div>
                    </div>

                    <p className="text-gray-600 text-center md:text-left max-w-[65%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    </p>
                    <button className="button-blue">
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