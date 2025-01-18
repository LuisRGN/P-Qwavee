import React from 'react';

const DivisorLine = ({ color = 'white' }) => {
    return (
        <div className="relative my-8 w-20 mx-auto md:mx-0">
            <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t-2 border-[${color}]`}></div>
            </div>
            <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-500"></span>
            </div>
        </div>
    );
};

export default DivisorLine;