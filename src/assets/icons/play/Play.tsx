import React from 'react';

function Play (props: React.SVGProps<SVGSVGElement>) {

    return (      

        <svg 
            width="9" 
            height="11" 
            viewBox="0 0 12 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path 
                d="M11.844 6.72319L0.459681 0.0415339C0.36441 -0.0144414 0.24754 -0.0137985 0.152851 
                0.043222C0.0581608 0.100242 -5.89262e-05 0.205035 4.47564e-08 0.318345V13.6817C-5.89262e-05 13.795 
                0.0581608 13.8998 0.152851 13.9568C0.24754 14.0138 0.36441 14.0144 0.459681 13.9585L11.844 7.27681C11.9404 7.22032 12 
                7.11458 12 7C12 6.88542 11.9404 6.77968 11.844 6.72319Z" 
                fill="#473BF0"
            />
        </svg>

    );

};

export default Play;
