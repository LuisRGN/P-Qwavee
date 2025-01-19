import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="flex justify-center items-center p-3 text-[#072a52] bg-[#d6d6d6] transition duration-300 rounded-full shadow-lg hover:bg-[#c2c2c2] w-16 h-16"
                >
                    <FiArrowUp size={32} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;