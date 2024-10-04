import React from 'react';

interface SubmitButtonProps {
  label: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label }) => {
  return (
    <button
      type="submit"
      className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
