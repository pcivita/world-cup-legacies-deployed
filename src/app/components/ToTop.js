// Tutorial: https://jeffsegovia.dev/blogs/scroll-top-top-functionality-with-react

import { useEffect, useState } from "react";

export default function GoToTop () {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollCallBack = () => {
            const scrolledFromTop = window.scrollY;
            const scrolledTo = scrolledFromTop + window.innerHeight;
            const checkReachBottom = document.body.scrollHeight <= scrolledTo;

            setVisible(() => 
                scrolledFromTop > 300 && !checkReachBottom);
            
        };

        window.addEventListener('scroll', scrollCallBack);

        scrollCallBack();

        return () => {
            window.removeEventListener('scroll', scrollCallBack);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( 
        <button
            onClick={scrollToTop}
            className={`${visible ? 'scale-100' : 'scale-0'}
                z-20 border border-slate-400 bg-white flex fixed w-12 h-12 transition-transform 
                duration-200 right-10 bottom-10 rounded-full shadow-xl 
                justify-center items-center hover:bg-[#F0F0F0]
            `}            
        >
            <svg
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='black'
                className='w-6 h-6'
            >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
            </svg>
        </button>
    );
}
