import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DonateItems = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleDonate = () => {
    if (selectedItem) {
      setMessage(`Thank you for donating ${selectedItem}!`);
      setSelectedItem('');
      navigate(`/donation-details?item=${selectedItem}`);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Donate Items</h2>
      <p className="text-lg text-gray-600 mb-4">
        Choose the items you'd like to donate to those in need.
      </p>
      <select
        className="p-3 border border-gray-300 rounded-md mb-4 w-full"
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="">Select an item to donate</option>
        <option value="Money">Money</option>
        <option value="Clothes">Clothes</option>
        <option value="Food">Food</option>
        <option value="Medicines">Medicines</option>
        <option value="Other Essentials">Other Essentials</option>
      </select>
      <button
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        onClick={handleDonate}
      >
        Donate
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default DonateItems;