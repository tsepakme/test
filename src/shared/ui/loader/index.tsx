import React from 'react';
import './styles.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
}

export const Loader: React.FC<LoaderProps> = ({ size = 'small' }) => {
  const sizeClass = {
    small: 'w-4 h-4 border-2',
    medium: 'w-6 h-6 border-2',
    large: 'w-8 h-8 border-3'
  };

  return (
    <div className={`spinner ${sizeClass[size]} border-white border-t-transparent`} />
  );
};