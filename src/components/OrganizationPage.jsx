import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import OrganizationInfo from './organization/OrganizationInfo';
const organizations = [
  { id: 1, name: 'Food for All', location: 'Mumbai', itemsDonated: 120, itemsNeeded: 200, contact: 'foodforall@mumbai.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Mumbai, Maharashtra' },
  { id: 2, name: 'Medical Aid India', location: 'Delhi', itemsDonated: 50, itemsNeeded: 150, contact: 'medicindia@delhi.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Delhi, NCR' },
  { id: 3, name: 'Support for Education', location: 'Bangalore', itemsDonated: 80, itemsNeeded: 300, contact: 'supportedu@bangalore.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Bangalore, Karnataka' },
  { id: 4, name: 'Health First', location: 'Chennai', itemsDonated: 50, itemsNeeded: 150, contact: 'healthfirst@chennai.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Chennai, Tamil Nadu' },
  { id: 5, name: 'Shelter for All', location: 'Pune', itemsDonated: 100, itemsNeeded: 250, contact: 'shelterforall@pune.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Pune, Maharashtra' },
  { id: 6, name: 'Feed the Hungry', location: 'Kolkata', itemsDonated: 90, itemsNeeded: 180, contact: 'feedthehungry@kolkata.org', image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yZ2FuaXphdGlvbnxlbnwwfHwwfHx8MA%3D%3D', address: 'Kolkata, West Bengal' },
  // Add more organizations here
];

const OrganizationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrganizations, setFilteredOrganizations] = useState(organizations);

  // Handle search functionality (by name or location)
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredOrganizations(organizations);
    } else {
      const filteredData = organizations.filter((org) =>
        org.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        org.location.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredOrganizations(filteredData);
    }
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen pb-8">
      <header className="bg-blue-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Welcome to Our Organization</h1>
        <p className="text-lg mt-2">Connecting generous donors with those in need</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-end mt-4 px-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by organization or location"
          className="w-1/3 p-3 border border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Organization Grid */}
      <section className="p-6 mt-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Organizations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredOrganizations.map((org) => (
            <OrganizationInfo key={org.id} org={org} />
          ))}
        </div>
      </section>

      <footer className="text-center py-6 bg-blue-600 text-white mt-12">
        <p>Thank you for your generous support. Together, we can make a difference!</p>
      </footer>
    </div>
  );
};

export default OrganizationPage;
