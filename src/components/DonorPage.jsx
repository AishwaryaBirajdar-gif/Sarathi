import React from "react";
import DonateMoney from "./Donor/DonateMoney";
import DonateItems from "./Donor/DonateItems";
import TrackResources from "./Donor/TrackResources";
import "../App.css"; // Import global styles

const DonorPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-green-100 min-h-screen p-6 flex flex-col justify-between">
      {/* Header Section */}
      <header className="relative text-center mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-400 opacity-70 rounded-lg"></div>
        <h1 className="relative text-5xl font-extrabold text-white animate-fadeInDown py-4">
          Donor Dashboard
        </h1>
        <p className="relative text-xl text-white mt-2">Contribute to making a difference today!</p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
        {/* Donate Money Section */}
        <div className="p-8 min-h-[500px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-scaleUp">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate Money</h2>
            <p className="text-lg text-gray-600 mb-6">Support our cause with your monetary contributions. Every donation helps!</p>
            <DonateMoney />
          </div>
        </div>

        {/* Donate Items Section */}
        <div className="p-8 min-h-[500px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-scaleUp">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate Items</h2>
            <p className="text-lg text-gray-600 mb-6">Donate essential items to those in need. Your unused goods can make a huge difference!</p>
            <DonateItems />
          </div>
        </div>

        {/* Track Donations Section */}
        <div className="p-8 min-h-[500px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate-scaleUp">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Track Your Donations</h2>
            <p className="text-lg text-gray-600 mb-6">Stay updated on the impact of your donations and see how your contributions help!</p>
            <TrackResources />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-10 flex justify-between items-center relative">
        {/* Chat Button */}
        <button
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 animate-bounce"
          onClick={() => window.location.href = '/chat'}
        >
          <img
            src="https://image.flaticon.com/icons/png/512/2076/2076218.png"
            alt="Chat Icon"
            className="w-8 h-8"
          />
        </button>

        <p className="text-sm text-gray-600">&copy; 2024 SARATHI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DonorPage;
