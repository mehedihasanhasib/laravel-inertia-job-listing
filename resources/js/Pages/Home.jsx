import Hero from '@/Components/Hero';
import SearchHome from '@/Components/SearchHome';
import Master from '@/Layouts/Master';
import { Head } from '@inertiajs/react';
import React from 'react';

const Home = () => {
    return (
        <Master>
            <Head title='Home'/>
            <Hero title="FIND YOUR DREAM JOB" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus accusantium id dolorum placeat nihil, modi totam fugiat incidunt harum!"/>
            <SearchHome />
            <div className=''>
                
            </div>
        </Master>
    );
}

export default Home;
