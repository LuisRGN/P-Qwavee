import React from 'react'
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <footer className='mb-5'>
            <section className='flex text-sm justify-between'>
                <div className='flex  text-[#007AFF] typography--family-robot text-[12px] font-normal'>
                    <Image
                        src="https://res.cloudinary.com/dtoditltb/image/upload/v1737074637/62c6bc57eee9410fe137d921_ppkihu.png"
                        alt="figmaicon"
                        width={20}
                        height={20}
                    />  @unicorn
                </div>
                <div className='text-[#666666] typography--family-robot text-[12px] font-normal'>
                    &copy; Perfect Login 2025
                </div>
            </section>
        </footer>
    )
}

export default Footer;