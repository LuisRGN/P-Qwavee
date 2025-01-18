import React from 'react';

const DivisorLine = ({ color = 'white' }) => {
    return (
        <div className="relative my-8 w-20">
            <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t-2 border-[${color}]`}></div>
            </div>
        </div>
    );
};

export default DivisorLine;