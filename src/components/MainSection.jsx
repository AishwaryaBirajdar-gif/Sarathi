import React from 'react';
import CarouselComponent from './CarouselComponent';
import VolunteerSection from './VolunteerSection';
import { useNavigate } from 'react-router-dom';

const MainSection = () => {
  const navigate = useNavigate(); 

  const handleDonate = () => {
    navigate(`/donor`);
  }
  
  return (
    <div>
      <CarouselComponent />
      <div className="text-center bg-gray-100 py-12 px-6 mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Disaster Management</h1>
        <p className="text-lg text-gray-600 mb-6 mt-6">
          Disasters can strike at any time, leaving communities devastated and in urgent need of assistance. 
          From natural calamities like floods, earthquakes, and hurricanes to unforeseen crises, 
          the impact can be overwhelming. Join us in our mission to provide immediate help and long-term 
          support to those affected. Together, we can deliver essential supplies, rebuild communities, 
          and bring hope to those in need. Your contribution, big or small, can make a profound difference 
          in saving lives and restoring hope. Stand with us and be a part of the change.
        </p>
        <button 
          className="bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 text-lg" 
          onClick={handleDonate} // Fix here: passed the function reference
        >
          Donate
        </button>
      </div>
      <VolunteerSection />
    </div>
  );
}

export default MainSection;
