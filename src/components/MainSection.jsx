import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerSection from './VolunteerSection'; // Import VolunteerSection

const MainSection = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/donor");
  };

  const handleOrganization = () => {
    navigate("/organization");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  // Slideshow functionality for Disaster Management images
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://plus.unsplash.com/premium_photo-1682097265453-2f1b6861019c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGlzYXN0ZXIlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1661490061456-00879b843549?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzYXN0ZXIlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww",
    "https://images.pexels.com/photos/7156157/pexels-photo-7156157.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/11688879/pexels-photo-11688879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Image change every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-500 to-purple-700 text-white min-h-screen">
      
      {/* Hero Section with background animation */}
      <div className="hero relative flex flex-col items-center justify-center text-center py-28 px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=600)' }}></div>
        <h1 className="text-6xl font-extrabold mb-4 z-10 animate__animated animate__fadeIn" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "2px" }}>
          SARATHI
        </h1>
        <h2 className="text-2xl font-medium mb-6 italic animate__animated animate__fadeIn animate__delay-1s" style={{ fontFamily: "'Roboto', sans-serif" }}>
          Your Guide in Emergencies
        </h2>
        <p className="text-lg mb-8 text-yellow-200 animate__animated animate__fadeIn animate__delay-2s">
          <em>"Anytime, Anywhere, and for Everyone..."</em>
        </p>
      </div>

      {/* Disaster Management Section with Slideshow */}
      <div className="relative bg-indigo-100 py-12 px-6">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Disaster Management
        </h1>
        {/* Slideshow */}
        <div className="w-full max-w-4xl h-72 mx-auto overflow-hidden rounded-lg mb-6 shadow-lg relative">
          {images.map((image, index) => (
            <div key={index} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
              <img src={image} alt={`Disaster ${index + 1}`} className="object-cover w-full h-full opacity-90" />
            </div>
          ))}
        </div>
        <p className="text-lg text-gray-800 mb-6 text-center">
          Disasters can strike at any moment, causing immense damage to communities. Whether natural or man-made, it is crucial to have a support system in place to aid affected individuals and help rebuild. SARATHI is here to provide immediate relief, essential resources, and long-term solutions for those in need. Join us in our mission to make the world a safer and more resilient place.
        </p>
        <p className="text-lg text-gray-800 mb-6 text-center">
          We focus on delivering aid during the critical moments after a disaster, ensuring communities have access to food, water, medical supplies, and shelter. Your support helps us save lives and support long-term recovery efforts.
        </p>
      </div>

      {/* Success Stories Section */}
      <div className="bg-indigo-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">
          Success Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hurricane Shelter Program */}
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Hurricane Shelter Program</h3>
            <p className="text-gray-800 mb-6">
              In the aftermath of a powerful hurricane, SARATHI established shelter camps for displaced families, providing them with food, water, and medical care. Our efforts ensured that no one was left without assistance during the critical period.
            </p>
            <img 
              src="https://images.pexels.com/photos/11319521/pexels-photo-11319521.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Hurricane Shelter" 
              className="w-full h-60 object-cover rounded-lg mb-6 transition-all duration-300 ease-in-out hover:opacity-80" 
            />
            <a href="#" className="text-purple-600 hover:underline">Read More</a>
          </div>

          {/* Flood Relief Program */}
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Flood Relief Program</h3>
            <p className="text-gray-800 mb-6">
              In the wake of devastating floods, SARATHI provided vital relief by distributing food, clothing, and medical aid to affected communities. The program reached thousands of people and helped them rebuild their lives.
            </p>
            <img 
              src="https://images.pexels.com/photos/9090750/pexels-photo-9090750.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Flood Relief" 
              className="w-full h-60 object-cover rounded-lg mb-6 transition-all duration-300 ease-in-out hover:opacity-80" 
            />
            <a href="#" className="text-purple-600 hover:underline">Read More</a>
          </div>

          {/* Earthquake Emergency Response */}
          <div className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Earthquake Emergency Response</h3>
            <p className="text-gray-800 mb-6">
              Following a massive earthquake, SARATHI deployed teams to provide rescue operations, distribute essential supplies, and assist with the recovery efforts. Our immediate action saved lives and helped communities rebuild.
            </p>
            <img 
              src="https://images.pexels.com/photos/15533275/pexels-photo-15533275/free-photo-of-town-ruins-after-earthquake.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Earthquake Response" 
              className="w-full h-60 object-cover rounded-lg mb-6 transition-all duration-300 ease-in-out hover:opacity-80" 
            />
            <a href="#" className="text-purple-600 hover:underline">Read More</a>
          </div>
        </div>
      </div>

       {/* Why Join Us Section */}
       <div className="bg-gradient-to-r from-purple-200 to-indigo-300 py-12 px-6">
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-6 animate__animated animate__fadeIn animate__delay-6s">
          Why Join Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-7s">
            <img src="https://images.pexels.com/photos/6520167/pexels-photo-6520167.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Immediate Response" className="w-full mb-4 rounded hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">Immediate Response</h3>
            <p className="text-gray-700">We ensure rapid disaster relief, delivering essential supplies and aid.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-8s">
            <img src="https://images.pexels.com/photos/7156159/pexels-photo-7156159.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community Support" className="w-full mb-4 rounded hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">Community Support</h3>
            <p className="text-gray-700">Rebuilding lives and communities through long-term support and resources.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-9s">
            <img src="https://images.pexels.com/photos/11688879/pexels-photo-11688879.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Transparency" className="w-full mb-4 rounded hover:scale-105 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-4 text-purple-700">Transparency</h3>
            <p className="text-gray-700">Your contributions are tracked, and you can see the real impact.</p>
          </div>
        </div>
      </div>


      {/* Meet Our Volunteers Section */}
      <VolunteerSection />

      {/* Call to Action Section */}
      <div className="bg-indigo-200 py-12 px-4">
        <h2 className="text-4xl font-bold text-purple-800 text-center mb-6 animate__animated animate__fadeIn animate__delay-10s">
          Get Involved Today!
        </h2>
        <p className="text-lg text-gray-800 text-center mb-6 animate__animated animate__fadeIn animate__delay-11s">
          Whether as a donor, volunteer, or partner, your support is invaluable in disaster management efforts.
        </p>
        <div className="flex justify-center space-x-4">
  {/* Updated Donate Now button color */}
  <button className="bg-red-500 text-white font-bold py-4 px-10 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105" onClick={handleDonate}>
    Donate Now
  </button>
  <button className="bg-indigo-500 text-white font-bold py-4 px-10 rounded-full hover:bg-indigo-600 transition duration-300 transform hover:scale-105" onClick={handleSignup}>
    Join Us
  </button>
</div>

      </div>
    </div>
  );
};

export default MainSection;
