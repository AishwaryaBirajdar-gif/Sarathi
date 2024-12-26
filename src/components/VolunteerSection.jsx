import React, { useEffect, useRef } from 'react'

const VolunteerSection = () => {
  const volunteers = [
    { name: "John Doe", photo: "https://via.placeholder.com/150" },
    { name: "Jane Smith", photo: "https://via.placeholder.com/150" },
    { name: "Emma Johnson", photo: "https://via.placeholder.com/150" },
    { name: "Michael Brown", photo: "https://via.placeholder.com/150" },
    { name: "Jane Smith", photo: "https://via.placeholder.com/150" },
    { name: "Emma Johnson", photo: "https://via.placeholder.com/150" },
    { name: "Michael Brown", photo: "https://via.placeholder.com/150" },
    { name: "Sophia Davis", photo: "https://via.placeholder.com/150" },
    { name: "Jane Smith", photo: "https://via.placeholder.com/150" },
    { name: "Emma Johnson", photo: "https://via.placeholder.com/150" },
    { name: "Michael Brown", photo: "https://via.placeholder.com/150" },
    { name: "Jane Smith", photo: "https://via.placeholder.com/150" },
    { name: "Emma Johnson", photo: "https://via.placeholder.com/150" },
    { name: "Michael Brown", photo: "https://via.placeholder.com/150" },
    { name: "Sophia Davis", photo: "https://via.placeholder.com/150" },
  ]; 
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1; // Adjust speed as needed
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0; // Reset scroll when reaching the end
        }
      }
    }, 20); // Smooth scrolling interval (lower value = smoother)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <div className="text-center bg-gray-100 py-12 px-6">
    {/* Title */}
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Volunteers</h2>

    {/* Sliding Container */}
    <div
      ref={sliderRef}
      className="overflow-hidden whitespace-nowrap w-full py-4"
      style={{ maxWidth: "100%", display: "flex" }}
    >
      {volunteers.map((volunteer, index) => (
        <div
          key={index}
          className="inline-block mx-4 text-center"
          style={{ flexShrink: 0, width: "150px" }}
        >
          {/* Circular Photo */}
          <img
            src={volunteer.photo}
            alt={volunteer.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-lg mx-auto"
          />
          {/* Volunteer Name */}
          <p className="text-lg font-medium text-gray-700 mt-4">{volunteer.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default VolunteerSection