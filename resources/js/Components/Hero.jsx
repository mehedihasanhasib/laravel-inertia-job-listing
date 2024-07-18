import React from 'react';

const Hero = ({title, text, children}) => {
    return (
        <section className='bg-blue-900 py-16'>
            <div className='text-center flex items-center justify-center flex-col gap-4'>
                <div><h1 className='text-5xl text-white'>{title}</h1></div>
                <div className='w-[30vw] text-white'><p>{text}</p></div>
            </div>
            {children}
        </section>
    );
}

export default Hero;
