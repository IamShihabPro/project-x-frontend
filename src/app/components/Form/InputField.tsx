import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  register: UseFormRegisterReturn;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  errorMessage,
  register,
  showPassword,
  togglePasswordVisibility,
}) => {
  // Determine input type (handling password visibility)
  const inputType = showPassword !== undefined ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative mt-1">
        <input
          type={inputType}
          id={id}
          placeholder={placeholder}
          {...register}
          aria-invalid={!!errorMessage}
          className="w-full px-4 py-2 text-white bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {/* Password visibility toggle */}
        {togglePasswordVisibility && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
