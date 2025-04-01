import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import './theme-toggle.css';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2 w-15 h-9 rounded-full transition-colors duration-300 ${isDark ? 'bg-gray-600' : 'bg-gray-300'
        } ${className}`}
    >
      <span
        className={`block w-5 h-5 rounded-full transform transition-transform duration-300 ${isDark ? 'translate-x-6 bg-slate-900' : 'bg-white'
          }`}
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px]">
          {isDark ? '🌙' : '☀️'}
        </span>
      </span>
    </button>
  );
};