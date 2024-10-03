"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form Data:', data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      {/* Login Box */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <svg
            className="w-12 h-12 mx-auto text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22.46 6.11c-.77.35-1.6.58-2.47.69a4.26 4.26 0 001.88-2.34c-.84.5-1.76.87-2.75 1.06a4.25 4.25 0 00-7.24 3.87 12.04 12.04 0 01-8.75-4.44 4.22 4.22 0 00-.57 2.13c0 1.47.75 2.77 1.88 3.53a4.27 4.27 0 01-1.93-.54v.06c0 2.06 1.47 3.78 3.41 4.17a4.27 4.27 0 01-1.92.07 4.26 4.26 0 003.97 2.95A8.54 8.54 0 012 19.29a12.02 12.02 0 006.48 1.9c7.8 0 12.07-6.46 12.07-12.06l-.01-.55a8.62 8.62 0 002.12-2.19z" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-white mb-6">
          Log in to Your Account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Google Sign-In */}
        <div className="my-6 text-center">
          <p className="text-gray-400 mb-2">or</p>
          <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
            Continue with Google
          </button>
        </div>

        <div className="my-6 text-center">
          <button className="w-full py-2 px-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300">
            Continue with Github
          </button>
        </div>

        {/* Create Account */}
        <div className="text-center">
          <p className="text-gray-400">
            Don’t have an account?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
