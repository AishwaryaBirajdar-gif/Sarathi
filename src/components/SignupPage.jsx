import React from "react";

const SignupPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join SARATHI and be a part of making a difference!
        </p>
        <form className="mt-6">
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
              required
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already Have Account */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 hover:underline hover:text-blue-800 transition duration-300"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
