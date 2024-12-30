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
      image: 'https://cdn-icons-png.flaticon.com/128/2990/2990608.png',
      target: 50, // Goal
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
      image: 'https://cdn-icons-png.flaticon.com/128/706/706133.png',
      target: 40, // Goal
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
      image: 'https://cdn-icons-png.flaticon.com/128/29/29302.png',
      target: 30, // Goal
      timeline: [
        { date: '2024-12-10', event: 'Books sent to educational institute' },
        { date: '2024-12-12', event: 'Institute confirms receipt' },
      ],
    },
  ]);

  const navigate = useNavigate();

  const handleOpenTimeline = () => {
    navigate("/track-resourse");
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 animate-bounce">Donor Resources</h1>

      {/* Statistics Section */}
      <div className="mb-6 text-center animate-fade-in">
        <p className="text-gray-700 text-lg">Total Donations Received This Year: <span className="font-semibold text-blue-600">45</span></p>
        <p className="text-gray-700 text-lg">People Helped: <span className="font-semibold text-blue-600">150</span></p>
        <p className="text-gray-700 text-lg">Regions Covered: <span className="font-semibold text-blue-600">10</span></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {resources.map((resource) => (
          <div key={resource.id} className="p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={resource.image}
              alt={resource.name}
              className="w-16 h-16 mb-4 mx-auto animate-fade-in"
            />
            <h2 className="text-xl font-semibold text-gray-800">{resource.name}</h2>
            <p className="text-gray-600 mt-2">Quantity: {resource.quantity} items</p>
            <p className="text-sm text-gray-500 mt-1">Sent on: {resource.dateSent}</p>

            {/* Progress Bar */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">Progress: {((resource.quantity / resource.target) * 100).toFixed(0)}%</p>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(resource.quantity / resource.target) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={handleOpenTimeline}
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorResources;
