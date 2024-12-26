import React from 'react'

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800">Log In</h2>
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account?{' '}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  </div>
  )
}

export default LoginPage