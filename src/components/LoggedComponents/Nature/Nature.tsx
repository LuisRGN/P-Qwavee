'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CardItem } from '@/interfaces/Nature';
import { FaWindowClose } from "react-icons/fa";
import { fetchNatureData } from '@/utils/fetchNatureData';

const Nature: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
    const [itemsNature, setItemsNature] = useState<CardItem[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchNatureData();
                setItemsNature(data);
            } catch (error) {
                console.error('Error fetching nature data: ', error);
            }
        };

        getData();
    }, []);

    const handleCardClick: (item: CardItem) => void = (item: CardItem) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal: () => void = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <section className="py-16 bg-[#072a52] text-[#FAFBFC]">
            <section className="flex flex-col items-center">
                <div>
                    <h3 className="title__component typography--family-ibm-plex-sans sm:text-[50px]">The Nature</h3>
                    <div className="divisor-line--three"></div>
                </div>

            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-6 sm:px-16 lg:px-32">
                {itemsNature.map((item, index) => (
                    <article
                        key={`nature-item-${index}`}
                        className="simple-animation__card flex flex-col"
                        onClick={() => handleCardClick(item)}
                    >
                        <figure className="w-full h-72 relative overflow-hidden cursor-pointer">
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
                            <h4 className="text-[35.13px] font-bold typography--family-ibm-plex-sans">{item.title}</h4>
                            <p className="text-gray-300 text-[23.42px] font-bold typography--family-ibm-plex-sans">{item.description}</p>
                        </span>
                    </article>
                ))}
            </section>

            {isModalOpen && selectedItem && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-[#d6d6d6] p-3 rounded max-w-lg w-full">
                        <div className="relative">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-0 px-1 right-0 z-10"
                            ><FaWindowClose color='red' size={50} /></button>
                            <figure className="w-full rounded h-64 relative overflow-hidden mb-4">
                                <Image
                                    src={selectedItem.image}
                                    alt="Nature"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                            </figure>
                            <h4 className="text-[35.13px] font-bold typography--family-ibm-plex-sans text-gray-700">{selectedItem.title}</h4>
                            <p className="text-gray-700 mt-2 text-[23.42px] font-bold typography--family-ibm-plex-sans">{selectedItem.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Nature;