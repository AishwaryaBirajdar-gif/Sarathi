import React from 'react'

const SignupPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800">Create Account</h2>
      <form className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
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
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="text-blue-500 hover:underline">
          Log In
        </a>
      </p>
    </div>
  </div>
  )
}

export default SignupPage