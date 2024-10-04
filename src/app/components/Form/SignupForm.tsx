"use client"

import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import SubmitButton from '../Button/SubmitButton';
import { FaTimes } from "react-icons/fa";

type SignUpFormInputs = {
  name: string;
  email: string;
  image: FileList;
  password: string;
};

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue, resetField } = useForm<SignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Reference for the hidden file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: SignUpFormInputs) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Preview the image
      setValue('image', e.target.files as FileList); // Set the file list in form data
    }
  };

  const clearImage = () => {
    setImagePreview(null); // Clear the preview
    resetField("image"); // Reset the image field
  };

  // Function to trigger the hidden file input when the image is clicked
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the click event of the hidden file input
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <InputField
          label="Name"
          id="name"
          placeholder="Enter your name"
          register={register('name', { required: 'Name is required' })}
          errorMessage={errors.name?.message}
        />

        {/* Email Field */}
        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email"
          register={register('email', { required: 'Email is required' })}
          errorMessage={errors.email?.message}
        />

        {/* Password Field */}
        <InputField
          label="Password"
          id="password"
          placeholder="Enter your password"
          register={register('password', { required: 'Password is required' })}
          showPassword={showPassword}
          togglePasswordVisibility={() => setShowPassword(!showPassword)}
          errorMessage={errors.password?.message}
        />

        {/* Image Upload Field */}
        <div className="space-y-2">
          <label htmlFor="image" className="text-white block font-medium">Profile Image</label>

          {/* Hidden file input */}
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image', { required: 'Image is required' })}
            onChange={handleImageChange}
            ref={fileInputRef} // Reference to the hidden input
            className="hidden" // Hide the file input
          />

          {/* Image Preview (Click to Change Image) */}
          {imagePreview ? (
                      <div className="relative mt-4 w-32 h-32 mx-auto">
                      <img src={imagePreview} alt="Profile Preview" className="w-full h-full rounded-full object-cover" />
                      <button
                        type="button"
                        onClick={clearImage}
                        className="absolute top-0 right-0 bg-white text-black rounded-full p-1 hover:bg-blue-600 hover:text-white"
                      >
                        <FaTimes />
                      </button>
                    </div>
          ) : (
            <div
              className="flex justify-center items-center w-full h-32 border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
              onClick={triggerFileInput} // If no image, click to trigger file upload
            >
              <span className="text-gray-400">Choose Image</span>
            </div>
          )}

          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Submit Button */}
        <SubmitButton label="Sign Up" />
      </form>
    </>
  );
};

export default SignupForm;
