import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonorResources = () => {
  // Example data for the resources sent by the donor
  const [resources, setResources] = useState([
    { 
      id: 1, 
      name: 'Clothes', 
      quantity: 20, 
      dateSent: '2024-12-01',
      timeline: [
        { date: '2024-12-01', event: 'Donation sent to charity' },
        { date: '2024-12-03', event: 'Item received by charity' },
      ],
    },
    { 
      id: 2, 
      name: 'Food packages', 
      quantity: 15, 
      dateSent: '2024-12-05',
      timeline: [
        { date: '2024-12-05', event: 'Donation sent to food bank' },
        { date: '2024-12-06', event: 'Food bank confirms receipt' },
      ],
    },
    { 
      id: 3, 
      name: 'Books', 
      quantity: 10, 
      dateSent: '2024-12-10',
      timeline: [
        { date: '2024-12-10', event: 'Books sent to educational institute' },
        { date: '2024-12-12', event: 'Institute confirms receipt' },
      ],
    },
  ]);
  const navigate = useNavigate();
  const handleOpenTiemline = () =>{
    navigate("/track-resourse");
  }




  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Donor Resources</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold text-gray-800">{resource.name}</h2>
            <p className="text-gray-600 mt-2">Quantity: {resource.quantity} items</p>
            <p className="text-sm text-gray-500 mt-1">Sent on: {resource.dateSent}</p>

            <button
              onClick={handleOpenTiemline}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Show Deils
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorResources;
