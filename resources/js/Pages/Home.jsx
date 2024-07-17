import Hero from '@/Components/Hero';
import Master from '@/Layouts/Master';
import { Head } from '@inertiajs/react';
import React from 'react';

const Home = () => {
    return (
        <Master>
            <Head title='Home'/>
            <Hero />
        </Master>
    );
}

export default Home;
