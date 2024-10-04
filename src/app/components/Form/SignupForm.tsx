"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import SubmitButton from '../Button/SubmitButton';

type SignUpFormInputs = {
  name: string;
  email: string;
  image: FileList; // This should be FileList, not FileList | null
  password: string;
};

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<SignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = (data: SignUpFormInputs) => {
    console.log(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Check if file is selected
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Preview the image
      setValue('image', e.target.files as FileList); // Ensure e.target.files is not null before setting value
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
          <input
            type="file"
            id="image"
            accept="image/*"
            {...register('image', { required: 'Image is required' })}
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-4">
            <img src={imagePreview} alt="Profile Preview" className="w-32 h-32 rounded-full object-cover mx-auto" />
          </div>
        )}

        {/* Submit Button */}
        <SubmitButton label="Sign Up" />
      </form>
    </>
  );
};

export default SignupForm;
