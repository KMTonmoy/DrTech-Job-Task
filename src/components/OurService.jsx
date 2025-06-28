'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiX, FiCalendar } from 'react-icons/fi';
import axios from 'axios';

const OurService = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('/service.json');
                setServices(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    if (loading) return <div className="text-center py-12">Loading services...</div>;
    if (error) return <div className="text-center py-12 text-red-500">Error loading services: {error}</div>;

    return (
        <div className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">আমাদের সেবাসমূহ</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <div className="flex justify-center items-center mb-4">
                                    <img
                                        src={service.image}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                                        alt={service.title}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2  ">{service.title}</h3>
                                <p className="text-gray-600 mb-4 ">{service.shortDesc}</p>
                                <div className="flex ">
                                    <button
                                        onClick={() => openModal(service)}
                                        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedService && (
                <div className="fixed inset-0 bg-[#0000005b] bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold text-gray-800">Appointment Details</h3>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                                >
                                    <FiX size={24} />
                                </button>
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <div className="mb-6">
                                <div className="flex flex-col md:flex-row items-center mb-6 gap-4">
                                    <img
                                        src={selectedService.image}
                                        className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
                                        alt={selectedService.title}
                                    />
                                    <h4 className="text-xl font-semibold text-gray-800 text-center md:text-left">
                                        {selectedService.title}
                                    </h4>
                                </div>

                                <div className="prose max-w-none text-gray-700">
                                    {selectedService.fullDesc.split('\n').map((paragraph, i) => (
                                        <p key={i} className="mb-4">{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <div className="flex flex-col sm:flex-row justify-start gap-4">
                                <Link href="/appointment" passHref>
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300"
                                        onClick={closeModal}
                                    >
                                        <FiCalendar />
                                        Book Appointment
                                    </button>
                                </Link>
                                <button
                                    onClick={closeModal}
                                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurService;