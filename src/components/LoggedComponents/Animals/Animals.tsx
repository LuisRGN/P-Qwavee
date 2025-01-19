import { itemsAnimals } from '@/utils/items';
import React from 'react';

const Animals: React.FC = () => {

    return (
        <section className="max-w-[1366px] mx-auto bg-gradient-custom2">
            <section className="p-10 sm:p-12 lg:p-14 xl:p-16 flex flex-col md:items-start items-center">
                <h3 className="text-white pt-1 pb-14 text-3xl sm:text-4xl lg:text-5xl font-bold">
                    Nature, animals
                </h3>
                <ul className="text-white flex flex-col gap-5 md:w-[50%] w-[90%] md:text-left text-center list-none sm:list-disc">
                    {itemsAnimals.map((item, index) => (
                        <li key={index} className="ml-4">
                            {item.title}
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="mt-6 p-2 sm:p-3 sm:px-6 bg-white text-[#072a52] rounded hover:bg-[#d5d5d5] transition-colors duration-300 font-medium">
                    EXPLORE MORE
                </button>
            </section>
        </section>
    );
}

export default Animals;
