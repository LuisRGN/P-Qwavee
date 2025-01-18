import { PasswordInputProps } from '@/interfaces/PasswordInput';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput: React.FC<PasswordInputProps> = ({
  id, placeholder, value, required, name, onChange, 'aria-label': ariaLabel,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        className="w-full px-3 py-2 pr-10 border bg-[#f2f2f2] rounded-md shadow-sm "
        placeholder={placeholder}
        value={value}
        name={name}
        required={required}
        onChange={onChange}
        aria-label={ariaLabel}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center px-2"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <FaEyeSlash className="text-gray-600" />
        ) : (
          <FaEye className="text-gray-600" />
        )}
      </button>
      <span className="sr-only">
        {showPassword ? "Password is visible" : "Password is hidden"}
      </span>
    </section>
  );
};

export default PasswordInput;