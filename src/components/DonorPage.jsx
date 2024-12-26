import React from 'react';
import DonateItems from './Donor/DonateItems ';
import TrackResources from './Donor/TrackResources';
import ChatSection from './Donor/ChatSection';
import DonateMoney from './Donor/DonateMoney';
import { useNavigate } from "react-router-dom";


const DonorPage = () => {
  const navigate = useNavigate();
  const handleChatClick = () => {
    navigate('/chat');
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Donor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=""> 
          <image />
        </div>
        <div className="p-6 border rounded-lg shadow-lg bg-white">
            <DonateMoney />
            </div>
      </div>
      {/*---------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {/* Donate Section */}
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <section className="mb-6">
            <DonateItems />
          </section>
        </div>
        {/* Already Donated Section */}
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <section className="mb-6">
            <TrackResources />
          </section>
        </div>
      </div>
            <button
              onClick={handleChatClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-48 mt-4 flex items-center justify-center hover:bg-blue-700">

              Chat
            </button>

    </div>
  );
};

export default DonorPage;
