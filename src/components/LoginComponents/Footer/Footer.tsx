import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="md:mt-[50%] mt-[10%] pt-6">
            <div className='flex justify-between text-sm'>
                <div className='flex text-[#007aff]'>
                    <Image
                        src="https://res.cloudinary.com/dtoditltb/image/upload/v1737074637/62c6bc57eee9410fe137d921_ppkihu.png"
                        alt="figmaicon"
                        width={20}
                        height={20}
                    />  @unicorn
                </div>
                <div className='text-[#666666]'>
                    &copy; Perfect Login 2025
                </div>
            </div>
        </footer>
    )
}

export default Footer