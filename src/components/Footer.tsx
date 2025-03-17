import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-teal-800 text-white py-12 relative">
            <div className="absolute bottom-0 left-0 w-full">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </div>

            <div className="container mx-auto px-6">

                <ul className="social_icons flex justify-center space-x-6 mb-8">
                    <li>
                        <a
                            href="#"
                            className="text-white transition duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                        >
                            <div className="text-2xl">
                                <FaFacebook />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-white transition duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                        >
                            <div className="text-2xl">
                                <FaLinkedin />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-white transition duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                        >
                            <div className="text-2xl">
                                <FaGithub />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-white transition duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg"
                        >
                            <div className="text-2xl">
                                <FaInstagram />
                            </div>
                        </a>
                    </li>
                </ul>


                <ul className="social_menu flex justify-center space-x-6 mb-6">
                    <li><a href="#home" className="hover:text-teal-300 transition duration-300">Home</a></li>
                    <li><a href="#about" className="hover:text-teal-300 transition duration-300">About</a></li>
                    <li><a href="#service" className="hover:text-teal-300 transition duration-300">Service</a></li>
                    <li><a href="#skills" className="hover:text-teal-300 transition duration-300">Skills</a></li>
                    <li><a href="#portfolio" className="hover:text-teal-300 transition duration-300">Portfolio</a></li>
                    <li><a href="#contact" className="hover:text-teal-300 transition duration-300">Contact</a></li>
                </ul>


                <p className="text-center text-gray-400 text-sm">
                    Ⓒ2024 All Rights Reserved - Developed By Chulaka Sampath
                </p>
            </div>
        </footer>
    );
};

export default Footer;
