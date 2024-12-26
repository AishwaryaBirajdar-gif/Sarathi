import React from 'react';
import { useLocation } from 'react-router-dom';

const OrganizationDetailPage = () => {
  const location = useLocation();
  const { organization } = location.state || {}; // Retrieve organization data from state

  if (!organization) {
    return <div>Organization not found.</div>;
  }

  const openMap = (address) => {
    const query = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?q=${query}`, '_blank');
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen pb-8">
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Organization Details</h1>
      </header>

      {/* Organization Details */}
      <section className="pt-6 mt-6 bg-white rounded-lg shadow-lg max-w-6xl mx-auto p-8">
        <div className="flex items-center space-x-6">
          {/* Organization Image */}
          <div className="flex-shrink-0 w-70 h-70">
            <img
              src={organization.image}
              alt={organization.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Organization Details */}
          <div className="flex flex-col space-y-4 pl-20 w-full">
            <h2 className="text-3xl font-bold">{organization.name}</h2>
            <p className="text-lg text-gray-600"><strong>Handled By:</strong> {organization.handledBy}</p>
            <p className="text-lg text-gray-600"><strong>Location:</strong> {organization.address}</p>
            <p className="text-lg text-gray-600"><strong>Contact:</strong> {organization.contact}</p>

            {/* Map Link Button */}
            <button
              onClick={() => openMap(organization.address)}
              className="bg-green-600 text-white px-6 py-2 rounded-md w-48 mt-4 hover:bg-green-700"
            >
              View on Google Maps
            </button>
          </div>
        </div>

        {/* Items & Work Information */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Items & Works</h3>
          
          {/* Items Information */}
          <div className="flex space-x-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md w-1/2">
              <h4 className="text-xl font-semibold">Items Donated</h4>
              <p className="text-lg mt-2">{organization.itemsDonated}</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md w-1/2">
              <h4 className="text-xl font-semibold">Items Needed</h4>
              <p className="text-lg mt-2">{organization.itemsNeeded}</p>
            </div>
          </div>

          {/* Organization Work Information */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Work Done by Organization</h4>
            <p className="text-lg mt-2">{organization.workDescription}</p>
          </div>
        </div>

        {/* Donate Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-48 hover:bg-blue-700">
            Donate Now
          </button>
        </div>

        {/* Chat with Organization Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md w-48 hover:bg-green-700">
            Chat with Organization
          </button>
        </div>
      </section>

      <footer className="text-center py-6 bg-blue-600 text-white mt-12">
        <a href="/" className="text-white underline">Back to Organizations</a>
      </footer>
    </div>
  );
};

export default OrganizationDetailPage;
