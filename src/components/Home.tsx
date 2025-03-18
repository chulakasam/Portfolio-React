import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import "../globals.css";
import 'boxicons/css/boxicons.min.css';

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        // Typed.js effect for the roles
        if (typedRef.current) {
            new Typed(typedRef.current, {
                strings: ["BackEnd Developer", "FrontEnd Developer", "Web Designer", "Tutor"],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 1000,
                loop: true,
            });
        }

        // Scroll Reveal Animation
        ScrollReveal().reveal(".home-content h1, .home-content p, .btn-box", { origin: "top", distance: "80px", duration: 2000, delay: 200 });
        ScrollReveal().reveal(".social-icons", { origin: "left", distance: "80px", duration: 2000, delay: 300 });
        ScrollReveal().reveal(".profile-image", { origin: "bottom", distance: "80px", duration: 2000, delay: 400 });
    }, []);

    return (
        <section id="home" className="bg-gray-900 text-white py-16 flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 lg:px-12">
            <div className="home-content max-w-xl lg:text-left text-center">
                <h1 className="text-4xl font-bold mb-4">Hi! I'm Chulaka Sampath</h1>
                <h3 className="text-2xl">And I'm <span ref={typedRef} className="text-teal-400 font-semibold"></span></h3>
                <p className="text-lg mt-4 mb-6">
                    I'm from Ambalangoda, Sri Lanka. I'm 24 years old. I studied at G/Dharmasoka College, Ambalangoda.
                    I'm a software engineering student at IJSE-Institute of Software Engineering. Additionally, I have a Japanese language N5 Level certification.
                </p>

                {/* Contact Info */}
                <div className="info-box mb-6">
                    <h5 className="font-semibold">Email:</h5>
                    <span className="text-teal-400">sampathchulaka33872@gmail.com</span>
                </div>

                {/* Buttons */}
                <div className="btn-box space-x-4">
                    <a href="./assets/CV_Resume.pdf" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">Download CV</a>
                    <a href="#" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">Hire Me!</a>
                </div>

                {/* Social Media Icons */}
                <div className="social-icons flex space-x-4 mt-6">
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-github"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-linkedin"></i></a>
                </div>

                {/* Profile Image */}
                <div className="profile-image flex justify-center items-center mt-8">
                    <img src="../../public/IMG_6224new.png" alt="Chulaka Sampath" className="rounded-lg shadow-lg max-w-full h-auto transition-transform duration-300 hover:scale-105"/>
                </div>
            </div>
        </section>
    );
};

export default Home;
