import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
  id: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm "
        placeholder={placeholder}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-2"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-500" />
        ) : (
          <FaEye className="text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;