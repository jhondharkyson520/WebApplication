import React from 'react';

function Arrow (props: React.SVGProps<SVGSVGElement>) {

    return (
        <svg 
            width="14" 
            height="15" 
            viewBox="0 0 14 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="M7.93335 2L14 7.63333L7.93335 13.2667" 
                stroke="#68D585" 
                stroke-width="2" 
                stroke-linecap="square" 
                stroke-linejoin="bevel"
            />
            <path 
                d="M1 7.40112H13.1333" 
                stroke="#68D585" 
                stroke-width="2" 
                stroke-linecap="square" 
                stroke-linejoin="bevel"
            />
        </svg>
    );

};

export default Arrow;
