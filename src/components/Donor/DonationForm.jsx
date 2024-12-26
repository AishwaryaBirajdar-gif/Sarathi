import React, { useState } from 'react';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:8181/api/payment/createOrder';
    const payload = {
      amount: parseInt(amount, 10), // Convert to number
      currency: 'INR',
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();

      // Set the gratitude message based on response
      setResponseMessage(`Thank you for your generous donation of ₹${amount}! Your contribution will make a positive impact.`);
      setError(null);
    } catch (err) {
      setError(err.message);
      setResponseMessage(null);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        {!responseMessage && !error && (
          <>
            <h1 className='text-2xl font-semibold mb-4'>Donation Form</h1>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                  }}
                >
                  Enter Amount (₹):
                </label>
                <input
                  type='number'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  style={{
                    padding: '10px',
                    width: '100%',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                  }}
                />
              </div>
              <button
                type='submit'
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Donate
              </button>
            </form>
          </>
        )}

        {responseMessage && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              backgroundColor: '#e9ffe9',
              border: '1px solid green',
            }}
          >
            <h2 style={{ color: 'green', fontSize: '18px' }}>Thank You!</h2>
            <p style={{ fontSize: '16px' }}>{responseMessage}</p>
          </div>
        )}

        {error && (
          <div
            style={{
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              backgroundColor: '#ffe9e9',
              border: '1px solid red',
            }}
          >
            <h2 style={{ color: 'red', fontSize: '18px' }}>Error</h2>
            <p style={{ fontSize: '16px' }}>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationForm;
