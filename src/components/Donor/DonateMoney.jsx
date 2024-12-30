import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonateMoney = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/donation-form');
  };

  return (
    <div>
      <h2 className='text-3xl font-semibold mb-6 text-blue-600'>Donate Money</h2>
      <button
        onClick={handleNavigateToForm}
        className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded-lg hover:opacity-90 transition-transform transform hover:scale-105"
      >
        Proceed to Donate
      </button>
    </div>
  );
};

export default DonateMoney;
