import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Function to toggle mobile menu
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="logo text-3xl font-semibold">
                <span className="text-teal-400">C</span>hulaka.
            </div>

            {/* Desktop Navigation */}
            <ul className="navlist hidden lg:flex space-x-6">
                <li><a href="#home" className="hover:text-teal-400">Home</a></li>
                <li><a href="#about" className="hover:text-teal-400">About</a></li>
                <li><a href="#service" className="hover:text-teal-400">Service</a></li>
                <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                <li><a href="#portfolio" className="hover:text-teal-400">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>

            {/* Hamburger Menu Icon (only visible on small screens) */}
            <div
                id="menu-icon"
                className="bx bx-menu text-2xl cursor-pointer lg:hidden"
                onClick={toggleMenu}
            ></div>

            {/* Mobile Navigation (shown when menu is toggled) */}
            <ul className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-900 space-y-4 px-6 py-4`}>
                <li><a href="#home" className="hover:text-teal-400">Home</a></li>
                <li><a href="#about" className="hover:text-teal-400">About</a></li>
                <li><a href="#service" className="hover:text-teal-400">Service</a></li>
                <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
                <li><a href="#portfolio" className="hover:text-teal-400">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;
