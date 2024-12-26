import React from "react";
import { useNavigate } from "react-router-dom";


const TrackResources = () => {
  const navigate = useNavigate();
   const handleTrackResourseClick = () =>{
    navigate('/resourse')
   }
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Track Your Donations</h2>
      <p className="text-lg text-gray-600 mb-4">
        View the status of the resources you have donated.
      </p>
      <button
              onClick={handleTrackResourseClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-md w-48 mt-4 flex items-center justify-center hover:bg-blue-700">

              Track your resources
            </button>
    </div>
  );
};

export default TrackResources;
