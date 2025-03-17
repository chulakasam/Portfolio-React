import "../globals.css";
const About = () => {
    return (
        <section id="about" className="about py-40 bg-teal-900 text-white">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
                <div className="img-about mb-6 lg:mb-0 lg:w-1/3">
                    <img
                        src="../../public/IMG_6224new.png"
                        alt="About Image"
                        className=" transform transition duration-500 hover:scale-105"
                    />
                </div>
                <div className="about-content lg:w-2/3 lg:pl-12">
                    <div className="info-about1 mb-6 flex items-center space-x-4">
                        <span className="text-4xl font-bold text-teal-400">10+</span>
                        <p className="text-xl text-teal-200">Projects Completed</p>
                    </div>
                    <span className="text-teal-400 font-semibold">Let me introduce myself</span>
                    <h2 className="text-3xl font-bold my-4">About Me</h2>
                    <h3 className="text-2xl text-teal-300 font-semibold mb-4">A story of good</h3>
                    <p className="text-lg text-teal-100 my-4">
                        I am a passionate developer with a knack for solving problems and creating intuitive user experiences.
                        Over the years, I have worked on a diverse range of projects, from backend architecture to frontend development.
                    </p>
                    <div className="btn-box">
                        <a
                            href="#portfolio"
                            className="btn bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
