const Services = () => {
    return (
        <section id="service" className="service py-36 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <div className="main-text mb-12">
                    <span className="text-teal-500 text-lg font-semibold">What I will do for you</span>
                    <h2 className="text-4xl font-bold mt-2">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Web Development Service */}
                    <div className="service-box bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <i className="bx bx-desktop text-teal-500 text-5xl mb-4"></i>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
                        <p className="text-gray-600 mb-6">
                            Web development is the process of creating and maintaining websites and web applications. It includes frontend development (designing user interfaces with HTML, CSS, and JavaScript) and backend development (handling server-side logic, databases, and APIs). The goal is to build efficient, secure, and user-friendly websites that work across various devices.
                        </p>
                        <div className="btn-box">
                            <a href="#" className="btn bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">
                                Read More|
                            </a>
                        </div>
                    </div>

                    {/* StandAlone Application Service */}
                    <div className="service-box bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <i className="bx bx-code-alt text-teal-500 text-5xl mb-4"></i>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">StandAlone Application</h3>
                        <p className="text-gray-600 mb-6">
                            A standalone application is a self-contained software that functions independently without requiring external resources or server connections. It operates locally on a user's device and is typically used for offline tasks. Examples include desktop programs like word processors and mobile apps like games that don't need an internet connection to work.
                        </p>
                        <div className="btn-box">
                            <a href="#" className="btn bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">
                                Read More|
                            </a>
                        </div>
                    </div>

                    {/* Graphic Design Service */}
                    <div className="service-box bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105">
                        <i className="bx bxs-layer text-teal-500 text-5xl mb-4"></i>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
                        <p className="text-gray-600 mb-6">
                            Mobile app development is the process of creating software for mobile devices like smartphones and tablets. It involves designing, coding, testing, and deploying apps for platforms such as iOS and Android. Apps can be developed natively for each platform or using cross-platform frameworks like React Native and Flutter. The process includes designing the user interface (UI), implementing functionality, testing across devices, deploying to app stores, and maintaining the app with updates. Mobile apps are used in many fields, including social networking, e-commerce, gaming, and productivity.
                        </p>
                        <div className="btn-box">
                            <a href="#" className="btn bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition">
                                Read More|
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
