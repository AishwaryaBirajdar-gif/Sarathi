import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8181/api/payment/createOrder';
    const payload = { amount: parseInt(amount, 10), currency: 'INR' };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      setResponseMessage(`Thank you for your generous donation of ₹${amount}!`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponseMessage(null);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-yellow-50 to-yellow-100 min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Donation Form</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-lg font-semibold mb-2">Enter Amount (₹):</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Donate
          </button>
        </form>
        {responseMessage && <p className="mt-4 text-green-600">{responseMessage}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default DonationForm;
