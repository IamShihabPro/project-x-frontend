"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type SignUpFormInputs = {
  name: string;
  email: string;
  image: FileList;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Handle image file change
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler
  const onSubmit = async (data: SignUpFormInputs) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Image Field */}
          <div className="flex flex-col items-center mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="image">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/jpeg, image/png, image/gif"
              {...register('image', {
                required: 'Image is required',
                validate: {
                  acceptedFormats: (files) => {
                    const acceptedFormats = ['image/jpeg', 'image/png', 'image/gif'];
                    const fileType = files[0]?.type;
                    return acceptedFormats.includes(fileType) || 'Only JPG, PNG, and GIF files are accepted';
                  },
                },
              })}
              onChange={handleImageChange}
              className="block w-full text-sm text-white bg-gray-800 border border-gray-700 rounded-lg cursor-pointer focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition duration-200"
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4 w-full flex justify-center">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-600 shadow-lg transition-transform transform hover:scale-110"
                />
              </div>
            )}
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
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
                className="w-full px-4 py-2 mt-1 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-blue-500 transition duration-200"
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
              className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Sign Up
            </button>
          </div>

        </form>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            Already have an account?
            <Link href="/login" className="text-blue-500 hover:underline ml-1">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
