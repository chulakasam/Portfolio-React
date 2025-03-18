const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio py-20 bg-gray-900">
            <div className="main-text text-center mb-12">
                <span className="text-xl font-medium text-gray-400">What I will do for you !!!</span>
                <h2 className="text-4xl font-semibold text-white mt-2">Latest Projects</h2>
            </div>
            <div className="container mx-auto px-4">
                <div className="filter-buttons text-center mb-8">
                    <button className="btn bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 mr-4" data-filter="all">All</button>
                    <button className="btn bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 mr-4" data-filter=".product">Products</button>
                    <button className="btn bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 mr-4" data-filter=".interacting">Interacting</button>
                    <button className="btn bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600" data-filter=".webapp">Web App</button>
                </div>
                <div className="portfolio-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* 01 */}
                    <div className="port-box mix product bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="1st%20sem%20final.png" alt="first img" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">LA Fit Track</h3>
                            <p className="text-gray-400 mt-2">
                                Here's the standalone system made for LA Fitness center in Ambalangoda. Through this system helps to manage their client, their supplements store, and efficient their business.
                            </p>
                            <a href="https://github.com/chulakasam/semesterFinal.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>

                    {/* 02 */}
                    <div className="port-box mix product bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="2nd%20sem%20final.png" alt="second img" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">Green Shadow Crop Management System</h3>
                            <p className="text-gray-400 mt-2">
                                Here's the system made for Green Shadow Pvt(Ltd). This system helps to manage their staff, equipment, crops, fields, vehicles, and efficient their business.
                            </p>
                            <a href="https://github.com/chulakasam/crop-monitoring-system.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>

                    {/* 03 */}
                    <div className="port-box mix interacting bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="pos%20system.png" alt="POS system" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">Sampath Grocery Store</h3>
                            <p className="text-gray-400 mt-2">
                                Here's the POS system made for Sampath Grocery. This system helps to manage their customers, items, place orders, and efficient their business.
                            </p>
                            <a href="https://github.com/chulakasam/pos-backend-with-spring.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>

                    {/* 04 */}
                    <div className="port-box mix interacting bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="LMS.jpg" alt="Library Management System" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">Library Management System</h3>
                            <p className="text-gray-400 mt-2">
                                Here's the Library Management System used to manage the users, books, and their borrow book items. This is developed using Java, MySQL with Hibernate.
                            </p>
                            <a href="https://github.com/chulakasam/Library-Management-System.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>

                    {/* 05 */}
                    <div className="port-box mix interacting bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="green shadow.png" alt="Graphic Design" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">Crop Management System</h3>
                            <p className="text-gray-400 mt-2">
                                Green shadow management system was develop by using React,tailwind.css,node.js,express with typeScript .CMS use to manage their crop,vehicle,equipment,field and their staff.specially JWT authentication use for the system security
                            </p>
                            <a href="https://github.com/chulakasam/crop-management-frontEnd-React.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>

                    {/* 06 */}
                    <div className="port-box mix webapp bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="port-image mb-4">
                            <img src="mobileapp.png" alt="Web App" className="w-full h-48 object-cover rounded-md" />
                        </div>
                        <div className="port-content">
                            <h3 className="text-2xl font-semibold text-white">Fit Track Mobile App</h3>
                            <p className="text-gray-400 mt-2">
                                here's the fitness tracking app develop by using react native,typeScript,tailwind and backend develop by using node,express and mySql.this system access security develop by using jWT token.
                            </p>
                            <a href="https://github.com/chulakasam/Fit-track-mobile-frontend.git" className="text-teal-500 mt-4 inline-block">
                                <i className='bx bx-link-external'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
