import React from "react";
import disasterhelp from "../images/disasterhelp.jpg"

const Timeline = ({ updates }) => {
  // Check if all updates are completed
  const allCompleted = updates.every((update) => update.completed);

  return (
    <div className="w-3/5 mx-auto my-8 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-center text-teal-700 font-bold text-xl mb-6">
        Donation Track
      </h2>
      <ul className="relative list-none pl-10">
        {updates.map((update, index) => (
          <li
            key={index}
            className={`mb-8 relative pl-16 ${
              update.completed ? "completed" : ""
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full border-4 absolute left-4 top-2 ${
                update.completed
                  ? "bg-teal-700 border-teal-700"
                  : "bg-white border-teal-700"
              }`}
            ></div>
            <div
              className={`p-4 rounded-lg shadow-sm ${
                update.completed ? "bg-teal-100" : "bg-gray-100"
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {update.title}
              </h3>
              <p className="text-sm text-gray-600">{update.description}</p>
              <span className="text-xs text-gray-500">{update.date}</span>
            </div>

            {/* Only show feedback if all updates are completed */}
            {allCompleted && update.image && (
              <div className="mt-4">
                <img
                  src={disasterhelp}// Direct URL for the image
                  alt="Feedback"
                  className="feedback-image w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
