import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonateMoney = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate('/donation-form'); // Navigate to the form page
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className='text-2xl font-semibold mb-4'>Donate Money</h1>
      <button
        onClick={handleNavigateToForm}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Proceed to Donate
      </button>
    </div>
  );
};

export default DonateMoney;
