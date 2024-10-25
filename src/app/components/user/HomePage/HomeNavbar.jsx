'use client';
import React from "react";
import MenuIcon from '@mui/icons-material/Menu'; // icon for navbar menu

const HomeNavbar = () => {
    return (
        <nav className="bg-black py-4">
            <div className="container max-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {/* navbar contents - logo; leftside */}
                        <div className="flex items-center mx-5">
                            <img
                                src="https://cdn.olaelectric.com/sites/evdp/pages/news_room/white_ola_logo.webp"
                                style={{ width: "50px", height: "auto" }} alt="navbarlogo.png" />
                        </div>

                        {/* navbar contents - text; leftside */}
                        <div>
                            <ul className="flex items-center">
                                <li className="mr-6">
                                    <a href="#" className="text-white hover:text-blue-200">
                                        Ola S1
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a href="#" className="text-white hover:text-blue-200">
                                        Ola Electric
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a href="#" className="text-white hover:text-blue-200">
                                        Ola FutureFactory
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* navbar contents - button; rightside */}
                    <div>
                        <button className="bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3">
                            Book an Ola Cab
                        </button>
                        <button className="bg-white text-black hover:bg-gray-3 00 text-sm font-semibold px-4 py-3 ml-5">
                            Free S1 Electric Ride
                        </button>

                        <MenuIcon className="ml-5 text-white text-3xl" font/>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HomeNavbar;
