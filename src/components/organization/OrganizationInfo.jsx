// OrganizationInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OrganizationInfo = ({ org }) => {
  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow-md  cursor-pointer">
      <img
        src={org.image}
        alt={org.name}
        className="p-4 border rounded overflow-hidden mx-auto"
      />
      <h3 className="text-xl font-semibold mt-4 text-center">{org.name}</h3>
      <p className="mt-2 text-center">Location: {org.location}</p>
      <p className="mt-2 text-center">Items Needed: {org.itemsNeeded}</p>

      <div className="flex justify-center mt-4">
        <Link
          to={`/organization/${org.id}`}
          state={{ organization: org }} // Passing data to the detail page
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default OrganizationInfo;
