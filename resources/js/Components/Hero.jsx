import React from 'react';

const Hero = ({title, text}) => {
    return (
        <div className='pt-16 text-center flex items-center justify-center flex-col gap-4'>
            <div><h1 className='text-5xl'>{title}</h1></div>
            <div className='w-[30vw]'><p className=''>{text}</p></div>
        </div>
    );
}

export default Hero;
