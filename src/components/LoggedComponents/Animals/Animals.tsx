import { itemsAnimals } from '@/utils/items';
import React from 'react';

const Animals: React.FC = () => {

    return (
        <section className="bg-gradient__custom--alt">
            <section className="p-10 sm:p-12 lg:p-14 xl:p-16 flex flex-col md:items-start items-center">
                <h3 className="title__component typography--family-ibm-plex-sans sm:text-[50px] text-white pt-1 pb-14 ">Nature, animals</h3>
                <ul className="text-white flex flex-col gap-5 md:w-[50%] w-[90%] md:text-left text-center list-none sm:list-disc">
                    {itemsAnimals.map((item, index) => (
                        <li key={`animal-item-${index}`} className="list-inside">
                            <strong className='typography--family-ibm-plex-sans text-[17px] font-semibold'>{item.title}</strong>
                            <p className='mt-4 typography--family-open-sans text-[15px] font-normal'>{item.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="button--white typography--family-work-sans text-[14px]">
                    EXPLORE MORE
                </button>
            </section>
        </section>
    );
}

export default Animals;
