import { Link } from '@inertiajs/react';
import React from 'react';

const NavBar = () => {
    return (
        <header className='p-4 shadow-sm shadow-gray-200'>
            <nav>
                <ul className='flex gap-5 justify-center'>
                    <Link href='' className='hover:text-blue-400'><li>Home</li></Link>
                    <Link href='' className='hover:text-blue-400'><li>Find Jobs</li></Link>
                    <Link href='' className='hover:text-blue-400'><li>About Us</li></Link>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
