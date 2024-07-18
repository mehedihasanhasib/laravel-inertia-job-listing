import { Link, usePage } from "@inertiajs/react";
import React from "react";

const NavBar = () => {
    const { url } = usePage();
    return (
        <header className="p-4 shadow-md w-full">
            <nav className="flex items-center justify-center gap-[12.5vw]">
                <div className="flex items-center">
                    {/* <img src="/logo.svg" alt="" width={"40px"} /> */}
                    <Link href="/">
                        <h1 className="text-blue-600 font-extrabold text-2xl">
                            JobEntry
                        </h1>
                    </Link>
                </div>
                <ul className="flex gap-10 justify-center">
                    <Link
                        preserveState
                        href="/"
                        className={`${url == "/" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold`}
                    >
                        <li>Home</li>
                    </Link>

                    <Link
                        preserveState
                        href="/findjob"
                        className={`${url == "/findjob" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold`}
                    >
                        <li>Find Jobs</li>
                    </Link>
                    <Link
                        preserveState
                        href="recruiter"
                        className={`${url == "/recruiter" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold`}
                    >
                        <li>Recruiter</li>
                    </Link>
                    <Link
                        preserveState
                        href="aboutus"
                        className={`${url == "/aboutus" ? "text-blue-600 font-bold" : ""} hover:text-blue-600 font-bold`}
                    >
                        <li>About Us</li>
                    </Link>
                </ul>
                <div>
                    <button className="bg-blue-600 px-3 py-2 rounded-md text-white hover:bg-blue-800">
                        Sign in
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
