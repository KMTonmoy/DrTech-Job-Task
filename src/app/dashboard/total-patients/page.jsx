import React from 'react';

const TotalPatients = () => {
    // Sample patient data
    const patients = [
        {
            id: 'PT-1001',
            name: 'John Smith',
            image: 'https://randomuser.me/api/portraits/men/1.jpg',
            address: '123 Main St, New York, NY',
            date: '2023-05-15',
            status: 'Active'
        },
        {
            id: 'PT-1002',
            name: 'Sarah Johnson',
            image: 'https://randomuser.me/api/portraits/women/2.jpg',
            address: '456 Oak Ave, Los Angeles, CA',
            date: '2023-06-20',
            status: 'Active'
        },
        {
            id: 'PT-1003',
            name: 'Michael Brown',
            image: 'https://randomuser.me/api/portraits/men/3.jpg',
            address: '789 Pine Rd, Chicago, IL',
            date: '2023-07-10',
            status: 'Inactive'
        },
        {
            id: 'PT-1004',
            name: 'Emily Davis',
            image: 'https://randomuser.me/api/portraits/women/4.jpg',
            address: '321 Elm Blvd, Houston, TX',
            date: '2023-08-05',
            status: 'Active'
        },
        {
            id: 'PT-1005',
            name: 'Robert Wilson',
            image: 'https://randomuser.me/api/portraits/men/5.jpg',
            address: '654 Maple Ln, Phoenix, AZ',
            date: '2023-09-12',
            status: 'Active'
        }
    ];

    return (
        <div className="p-6 w-full  rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Patient Records</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Patient ID</th>
                            <th className="py-3 px-4 text-left">Patient</th>
                            <th className="py-3 px-4 text-left">Address</th>
                            <th className="py-3 px-4 text-left">Registration Date</th>
                            <th className="py-3 px-4 text-left">Status</th>
                            <th className="py-3 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-100">
                        {patients.map((patient, index) => (
                            <tr key={index} className="hover:bg-blue-50 transition-colors">
                                <td className="py-4 px-4 text-blue-700 font-medium">{patient.id}</td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center">
                                        <img
                                            src={patient.image}
                                            alt={patient.name}
                                            className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-blue-200"
                                        />
                                        <span className="text-blue-800">{patient.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-blue-700">{patient.address}</td>
                                <td className="py-4 px-4 text-blue-700">{patient.date}</td>
                                <td className="py-4 px-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${patient.status === 'Active'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {patient.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <div className="flex space-x-2">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition-colors">
                                            View
                                        </button>
                                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-md text-sm transition-colors">
                                            Edit
                                        </button>
                                        <button className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded-md text-sm transition-colors">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6 text-blue-700">
                <div>Showing 1 to {patients.length} of {patients.length} entries</div>
                <div className="flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Previous</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Next</button>
                </div>
            </div>
        </div>
    );
};

export default TotalPatients;