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
    // Handle submission (e.g., send to API or store in state)
    console.log({
      donationType,
      quantity,
      condition,
      location,
      otherDetails,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen mt-6 border rounded">
    <div className="bg-white p-10 rounded-lg shadow-xl w-[80%] max-w-screen-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Donation Details
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Thank you for your generosity! Please fill in the details based on the items you wish to donate.
      </p>
  

        <form onSubmit={handleSubmit}>
          {/* Displaying conditional content based on donation type */}
          {donationType && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">{donationType} Donation</h2>
              <p className="text-lg text-gray-600 mb-4">
                Please provide the following details for donating {donationType}.
              </p>
            </div>
          )}

          {/* Conditional Fields based on Donation Type */}
          {donationType === "Clothes" && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="How many items?"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Condition</label>
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

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Drop-off Location</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter nearby center or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <p className="text-gray-700 text-sm">
                You can drop off your clothes at a nearby center. If you're not sure about the location, we can guide you to the nearest one.
              </p>
            </>
          )}

          {donationType === "Food" && (
            <>
              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="How much food?"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold text-gray-700 mb-2">Type of Food</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="e.g., Canned goods, Dry food"
                  value={otherDetails}
                  onChange={(e) => setOtherDetails(e.target.value)}
                />
              </div>

              <p className="text-gray-700 text-sm">
                Please ensure that the food is non-perishable and in good condition for donation. We can connect you with a nearby food distribution center.
              </p>
            </>
          )}

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
            Submit Donation
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationDetails;
