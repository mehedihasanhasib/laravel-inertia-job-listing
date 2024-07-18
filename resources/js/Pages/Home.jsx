import BrowseCategory from "@/Components/BrowseCategory";
import Hero from "@/Components/Hero";
import Master from "@/Layouts/Master";
import { Head } from "@inertiajs/react";
import React from "react";



const Home = () => {
    return (
        <Master>
            <Head title="Home" />
            <Hero
                title="FIND YOUR DREAM"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus accusantium id dolorum placeat nihil, modi totam fugiat incidunt harum!"
            />
            <BrowseCategory />
            
        </Master>
    );
};

export default Home;
