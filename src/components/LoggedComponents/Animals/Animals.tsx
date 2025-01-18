import React from 'react';

const Animals = () => {
    const items = [
        { title: 'Lorem Is', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the.' },
        { title: 'Lorem Ipsum Orem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the.' },
        { title: 'Randomised', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the.' },
        { title: 'Not Simply', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the.' },
        { title: 'Contrary', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the.' },
    ];

    return (
        <section className="max-w-[1366px] mx-auto bg-gradient-custom2">
            <section className="p-10 sm:p-12 lg:p-14 xl:p-16 flex flex-col md:items-start items-center">
                <h3 className="text-white pt-1 pb-14 text-3xl sm:text-4xl lg:text-5xl">
                    Nature, animals
                </h3>
                <ul className="text-white flex flex-col gap-5 md:w-[50%] w-[90%] md:text-left text-center list-none sm:list-disc">
                    {items.map((item, index) => (
                        <li key={index} className="ml-4">
                            {item.title}
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
                <button className="mt-6 p-3 sm:p-4 bg-white text-[#072a52] rounded hover:bg-[#d5d5d5] transition-colors duration-300 font-medium">
                    EXPLORE MORE
                </button>
            </section>
        </section>
    );
}

export default Animals;
