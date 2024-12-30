import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Log In
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please log in to your account.
        </p>
        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-600 hover:underline transition duration-300"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
