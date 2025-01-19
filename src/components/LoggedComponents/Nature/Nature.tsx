'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CardItem } from '@/interfaces/Nature';

const Nature: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
    const [itemsNature, setItemsNature] = useState<CardItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/67899179-723c-49ca-a5b9-8781d2bec10a');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setItemsNature(data);
            } catch (error) {
                console.error('Fetch error: ', error);
            }
        };

        fetchData();
    }, []);

    const handleCardClick = (item: CardItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <section className="py-16 bg-[#072a52] text-white max-w-[1366px] mx-auto">
            <section className="flex flex-col items-center">
                <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The Nature</h3>
                    <div className="border-b-[3px] border-white w-16 sm:w-24 my-9 mx-auto"></div>
                </div>

            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16 lg:px-32">
                {itemsNature.map((item, index) => (
                    <article
                        key={index}
                        className="flex flex-col transform transition-all duration-300 hover:scale-105"
                        onClick={() => handleCardClick(item)}
                    >
                        <figure className="w-full h-72 relative overflow-hidden">
                            <Image
                                src={item.image}
                                alt="Nature"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                priority={index === 0}
                            />
                            <figcaption className="sr-only">Nature Landscape</figcaption>
                        </figure>
                        <span className="p-4">
                            <h4 className="text-xl font-semibold">{item.title}</h4>
                            <p className="text-gray-300">{item.description}</p>
                        </span>
                    </article>
                ))}
            </section>

            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#d6d6d6] p-3 rounded-lg max-w-lg w-full">
                        <div className="relative">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-0 right-0 p-2 text-black bg-red-600 rounded z-10"
                            >X</button>
                            <figure className="w-full rounded h-64 relative overflow-hidden mb-4">
                                <Image
                                    src={selectedItem.image}
                                    alt="Nature"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                            </figure>
                            <h4 className="text-2xl text-gray-700 font-semibold">{selectedItem.title}</h4>
                            <p className="text-gray-700 mt-2">{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Nature;