import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <section id="contact" className="contact bg-gradient-to-r from-teal-600 to-teal-900 py-20">
            <div className="text-center mb-12">
                <span className="text-xl font-medium text-gray-200">Feel free to reach out</span>
                <h2 className="text-4xl font-bold text-white mt-2">Contact Me</h2>
            </div>
            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl space-y-8">
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                aria-label="Your name"
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                aria-label="Your email"
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition"
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label htmlFor="address" className="text-sm font-semibold text-gray-700">Your Address</label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Enter your address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                aria-label="Your address"
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition"
                            />
                        </div>
                        <div className="flex-1">
                            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Enter your phone number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                aria-label="Your phone number"
                                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            aria-label="Your message"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition"
                            rows={6}  // Fix: Set rows as a number
                        ></textarea>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <button type="submit" className="bg-teal-600 text-white py-3 px-8 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
