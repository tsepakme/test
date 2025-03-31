import React from 'react';
import { Loader } from './loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  isLoading, 
  children, 
  disabled, 
  className = '', 
  ...props 
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      className={`relative ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <span className="opacity-0">{children}</span>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};