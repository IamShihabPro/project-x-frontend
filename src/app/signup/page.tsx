

import React, { useState } from 'react';
import SignupForm from '../components/Form/SignupForm';
import Link from 'next/link';


const SignUp: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Create Your Account</h2>
        <SignupForm/>

        <div className="text-center">
            <p className="text-gray-400">
              Already have an account?
              <Link href="/login" className="text-blue-500 hover:underline">
                Login Now
              </Link>
            </p>
          </div>
       
      </div>
    </div>
  );
};

export default SignUp;
