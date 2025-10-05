import React from 'react';
import { LOGO_URL } from "./utils/libs";
import { NavLink, Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const cart = useSelector((store) => store.cart.items);

    const activeLinkStyle = {
        color: '#F97316',
        borderBottom: '2px solid #F97316'
    };

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-3 px-4">
                <Link to="/" className="flex items-center gap-2">
                    <img className="w-12 h-12 rounded-full" src={LOGO_URL} alt="Logo_Picture" />
                    <span className="text-xl font-bold text-gray-800 hidden sm:block">QuickPlate</span>
                </Link>
                <nav>
                    <ul className="flex items-center gap-6 text-lg">
                        <li className="text-sm" title={onlineStatus ? 'Online' : 'Offline'}>
                            {onlineStatus ? "🟢" : "🔴"}
                        </li>
                        <li>
                            <NavLink to="/" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 pb-2" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 pb-2" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 pb-2" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/grocerry" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 pb-2" style={({ isActive }) => isActive ? activeLinkStyle : undefined}>
                                Grocery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cart" className="relative flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-300">
                                <FaShoppingCart className="text-2xl" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cart.length}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" >
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors cursor-pointer duration-300">
                                Login
                            </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;