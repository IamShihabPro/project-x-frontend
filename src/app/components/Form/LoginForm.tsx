"use client"

import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from './InputField';
import SubmitButton from '../Button/SubmitButton';


type LoginFormInputs = {
    email: string;
    password: string;
};
  

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form Data:', data);
  };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email"
            register={register('email', { required: 'Email is required' })}
            errorMessage={errors.email?.message}
          />
          <InputField
            label="Password"
            id="password"
            placeholder="Enter your password"
            register={register('password', { required: 'Password is required' })}
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword(!showPassword)}
            errorMessage={errors.password?.message}
          />
          <SubmitButton label="Log In" />
        </form>
        </>
    );
};

export default LoginForm;