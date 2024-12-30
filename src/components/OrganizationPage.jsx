import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import OrganizationInfo from './organization/OrganizationInfo';

// Updated organization data with new images
const organizations = [
  {
    id: 1,
    name: 'Food for All',
    location: 'Mumbai',
    itemsDonated: 120,
    itemsNeeded: 200,
    contact: 'foodforall@mumbai.org',
    image: 'https://images.pexels.com/photos/6591154/pexels-photo-6591154.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    address: 'Mumbai, Maharashtra',
  },
  {
    id: 2,
    name: 'Medical Aid India',
    location: 'Delhi',
    itemsDonated: 50,
    itemsNeeded: 150,
    contact: 'medicindia@delhi.org',
    image: 'https://images.pexels.com/photos/6646928/pexels-photo-6646928.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    address: 'Delhi, NCR',
  },
  {
    id: 3,
    name: 'Support for Education',
    location: 'Bangalore',
    itemsDonated: 80,
    itemsNeeded: 300,
    contact: 'supportedu@bangalore.org',
    image: 'https://images.pexels.com/photos/12886800/pexels-photo-12886800.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    address: 'Bangalore, Karnataka',
  },
  {
    id: 4,
    name: 'Health First',
    location: 'Chennai',
    itemsDonated: 50,
    itemsNeeded: 150,
    contact: 'healthfirst@chennai.org',
    image: 'https://images.pexels.com/photos/7362882/pexels-photo-7362882.jpeg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop',
    address: 'Chennai, Tamil Nadu',
  },
  {
    id: 5,
    name: 'Shelter for All',
    location: 'Pune',
    itemsDonated: 100,
    itemsNeeded: 250,
    contact: 'shelterforall@pune.org',
    image: 'https://images.unsplash.com/photo-1706645740830-399b0da87ba1?w=600&h=450&fit=crop',
    address: 'Pune, Maharashtra',
  },
  {
    id: 6,
    name: 'Feed the Hungry',
    location: 'Kolkata',
    itemsDonated: 90,
    itemsNeeded: 180,
    contact: 'feedthehungry@kolkata.org',
    image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
    address: 'Kolkata, West Bengal',
  },
];

const OrganizationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrganizations, setFilteredOrganizations] = useState(organizations);

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
    <div className="font-sans bg-gradient-to-r from-blue-300 to-blue-700 min-h-screen pb-8">
      <header className="text-white text-center py-12 animate-fade-in shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">Welcome to Our Organization</h1>
        <p className="text-xl mt-4 font-medium">Connecting generous donors with those in need</p>
      </header>

      {/* Search Bar */}
      <div className="flex justify-end mt-6 px-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by organization or location"
          className="w-1/3 p-4 border border-gray-300 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Organization Grid */}
      <section className="p-6 mt-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Organizations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredOrganizations.map((org) => (
            <OrganizationInfo key={org.id} org={org} />
          ))}
        </div>
      </section>

      <footer className="text-center py-6 bg-blue-600 text-white mt-12 shadow-lg">
        <p className="text-lg font-medium">Thank you for your generous support. Together, we can make a difference!</p>
      </footer>
    </div>
  );
};

export default OrganizationPage;
