import React from 'react';
import { FaFileMedical, FaCalendarAlt, FaUserMd, FaPrint, FaDownload } from 'react-icons/fa';

const DiagnosticHistory = () => {
  // Sample diagnostic history data
  const diagnostics = [
    {
      id: 'DX-2023-001',
      patient: 'John Smith',
      test: 'Complete Blood Count',
      date: '2023-05-15',
      doctor: 'Dr. Sarah Johnson',
      status: 'Completed',
      report: 'pdf'
    },
    {
      id: 'DX-2023-002',
      patient: 'Emily Davis',
      test: 'Lipid Profile',
      date: '2023-06-20',
      doctor: 'Dr. Michael Brown',
      status: 'Completed',
      report: 'pdf'
    },
    {
      id: 'DX-2023-003',
      patient: 'Robert Wilson',
      test: 'Thyroid Function Test',
      date: '2023-07-10',
      doctor: 'Dr. Sarah Johnson',
      status: 'Pending',
      report: null
    },
    {
      id: 'DX-2023-004',
      patient: 'Lisa Ray',
      test: 'Liver Function Test',
      date: '2023-08-05',
      doctor: 'Dr. James Wilson',
      status: 'Completed',
      report: 'pdf'
    },
    {
      id: 'DX-2023-005',
      patient: 'David Miller',
      test: 'Urinalysis',
      date: '2023-09-12',
      doctor: 'Dr. Michael Brown',
      status: 'In Progress',
      report: null
    }
  ];

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Diagnostic History</h2>
        <div className="flex space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <FaFileMedical className="mr-2" /> New Test
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center">
            <FaDownload className="mr-2" /> Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Test ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Patient</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Test Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                <FaCalendarAlt className="inline mr-1" /> Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                <FaUserMd className="inline mr-1" /> Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diagnostics.map((test, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{test.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{test.patient}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{test.test}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{test.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{test.doctor}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    test.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    test.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {test.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {test.report ? (
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaPrint />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaDownload />
                      </button>
                      <button className="text-blue-600 hover:text-blue-800">
                        View
                      </button>
                    </div>
                  ) : (
                    <span className="text-gray-400">No report</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <div>Showing 1 to {diagnostics.length} of {diagnostics.length} entries</div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticHistory;