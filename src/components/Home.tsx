import { useState, useEffect } from "react";
import "../globals.css";
import "../script.ts";
import 'boxicons/css/boxicons.min.css';


const Home = () => {
    const roles = ["BackEnd Developer", "FrontEnd Developer", "Web Designer", "Tutor"];
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="bg-gray-900 text-white py-16 flex flex-col lg:flex-row lg:justify-between lg:items-center px-6 lg:px-12">
            <div className="home-content max-w-xl lg:text-left text-center">
                <h1 className="text-4xl font-bold mb-4">Hi! I'm Chulaka Sampath</h1>
                <div className="change-text mb-4">
                    <h3 className="text-2xl">And I'm</h3>
                    <h3 className="text-3xl mt-2 text-teal-400 transition-opacity duration-500">{roles[currentRole]}</h3>
                </div>
                <p className="text-lg mb-12">
                    I'm from Ambalangoda, Sri Lanka. I'm 24 years old. I studied at G/Dharmasoka College, Ambalangoda. I'm a software engineering student at IJSE-Institute of Software Engineering. Additionally, I have a Japanese language N5 Level certification.
                </p>
                <div className="info-box mb-6">
                    <h5 className="font-semibold">Email:</h5>
                    <span className="text-teal-400">sampathchulaka33872@gmail.com</span>
                </div>
                <div className="btn-box space-x-4">
                    <a href="./assets/CV_Resume.pdf" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">Download CV</a>
                    <a href="#" className="bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">Hire Me!</a>
                </div>
                <div className="social-icons flex space-x-4 mt-6">
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-github"></i></a>
                    <a href="#" className="text-2xl hover:text-teal-400"><i className="bx bxl-linkedin"></i></a>
                </div>
                <div className="flex justify-center items-center py-0.5">
                    <img src="../../public/IMG_6224new.png" alt="Chulaka Sampath" className="rounded-lg shadow-lg max-w-full h-auto"/>
                </div>

            </div>

        </section>
    );
};

export default Home;
