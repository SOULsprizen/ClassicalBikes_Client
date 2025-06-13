import { useState } from 'react';
import { FaHome, FaMotorcycle, FaTools, FaShoppingCart, FaRegComments, FaMapMarkedAlt } from 'react-icons/fa';
import { MdInfo } from 'react-icons/md';
import { FaBars, FaUserPlus, FaSignInAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const MENUDATA = [
        { name: 'Home', icon: <FaHome />, link: '/' },
        { name: 'Bikes', icon: <FaMotorcycle />, link: '/bikes' },
        { name: 'Parts & Accessories', icon: <FaTools />, link: '/parts-accessories' },
        { name: 'Shop', icon: <FaShoppingCart />, link: '/shop' },
        { name: 'Dealers', icon: <FaMapMarkedAlt />, link: '/dealers' },
        { name: 'About Us', icon: <MdInfo />, link: '/about' },
        { name: 'Feedback', icon: <FaRegComments />, link: '/feedback' },
    ];

    const AuthData = [
        { name: 'Sign-Up', icon: <FaUserPlus />, link: '/sign-up' },
        { name: 'Log-In', icon: <FaSignInAlt />, link: '/log-in' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black text-white shadow-lg sticky top-0 z-50">
            <nav className="flex justify-between items-center px-6 py-4">

                <h1 className="text-xl font-bold tracking-widest text-yellow-400">
                    <Link to="/">SuperBike</Link>
                </h1>

                <ul className="md:flex hidden gap-8 text-lg">
                    {MENUDATA.map(({ name, icon, link }, index) => (
                        <li key={index} className="flex items-center gap-2 hover:text-yellow-400 transition">
                            {icon}
                            <Link to={link}>{name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex gap-4">
                    {AuthData.map(({ name, icon, link }, i) => (
                        <Link key={i} to={link} className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded-full hover:bg-yellow-500 transition">
                            {icon}
                            {name}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden text-2xl text-yellow-400">
                    {isOpen ? <IoClose onClick={() => setIsOpen(false)} /> : <FaBars onClick={() => setIsOpen(true)} />}
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden w-full bg-black text-white px-6 py-6 space-y-4 animate-slide-down shadow-lg border-t border-yellow-400">

                    <div className="flex flex-col items-center gap-4">
                        {MENUDATA.map(({ name, icon, link }, index) => (
                            <Link
                                key={index}
                                to={link}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-lg py-2 px-3 rounded-md hover:bg-yellow-500 hover:text-black transition"
                            >
                                {icon}
                                {name}
                            </Link>
                        ))}
                    </div>

                    <hr className="border-yellow-400" />

                    <div className="flex flex-col gap-3 pt-2">
                        {AuthData.map(({ name, icon, link }, i) => (
                            <Link
                                key={i}
                                to={link}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition font-semibold"
                            >
                                {icon}
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

        </header>
    );
}
