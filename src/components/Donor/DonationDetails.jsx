import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const DonationDetails = () => {
  const [donationType, setDonationType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [otherDetails, setOtherDetails] = useState("");

  const locationObj = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(locationObj.search);
    const item = params.get("item");
    if (item) {
      setDonationType(item);
    }
  }, [locationObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ donationType, quantity, condition, location, otherDetails });
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Donation Details</h1>
      <form onSubmit={handleSubmit}>
        {donationType && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600">{donationType} Donation</h2>
            <p className="text-gray-600 mb-6">Provide details for donating {donationType}.</p>
          </div>
        )}

        {donationType === "Clothes" && (
          <>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Quantity</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="How many items?"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Condition</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                <option value="">Select condition</option>
                <option value="new">New</option>
                <option value="gently_used">Gently Used</option>
                <option value="worn">Worn</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Drop-off Location</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter nearby center or location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </>
        )}

        {donationType === "Food" && (
          <>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Quantity</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="How much food?"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Type of Food</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="e.g., Canned goods, Dry food"
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
              />
            </div>
          </>
        )}

        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white p-4 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105">
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationDetails;
