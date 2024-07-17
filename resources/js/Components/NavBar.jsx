import { Link } from "@inertiajs/react";
import React from "react";

const NavBar = () => {
    return (
        <header className="p-4 shadow-sm bg-blue-100 shadow-gray-200">
            <nav className="flex items-center justify-center gap-[18vw]">
                <div>
                    <img src="/logo.svg" alt="" width={"40px"} />
                </div>
                <ul className="flex gap-10 justify-center">
                    <Link href="" className="hover:text-blue-600">
                        <li>Home</li>
                    </Link>
                    <Link href="" className="hover:text-blue-600">
                        <li>Find Jobs</li>
                    </Link>
                    <Link href="" className="hover:text-blue-600">
                        <li>About Us</li>
                    </Link>
                </ul>
                <div>
                    <button className="bg-blue-600 px-3 py-2 rounded-md text-white hover:bg-blue-800">Sign in</button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
