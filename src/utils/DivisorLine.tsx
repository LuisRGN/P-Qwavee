import { DivisorLineProps } from '@/interfaces/DivisorLine';
import React from 'react';

const DivisorLine: React.FC<DivisorLineProps> = ({ color = 'white' }) => {
    const borderColorClass = {
        'white': 'border-white',
        'blue': 'border-[#072a52]'
    }[color];

    return (
        <div className="relative my-8 w-20">
            <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t-2 ${borderColorClass}`}></div>
            </div>
        </div>
    );
};

export default DivisorLine;