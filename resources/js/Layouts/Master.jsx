import NavBar from '@/Components/NavBar';
import React from 'react';

const Master = ({children}) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}

export default Master;
