

  import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://eleven21.imgix.net/603919aa0a1e81de32eb177f/what-is-disaster-management.jpeg?ixlib=vue-2.8.1',
    'https://plus.unsplash.com/premium_photo-1661490049140-652df2f94300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlzYXN0ZXIlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1695605347380-43a19df893b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc2FzdGVyJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1485617359743-4dc5d2e53c89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2FzdGVyJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D',
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Set up an interval to change the slide every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6">
      {/* Images */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-96 object-cover" // Make sure images fill the container with equal size
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8249;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8250;
      </button>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;


 