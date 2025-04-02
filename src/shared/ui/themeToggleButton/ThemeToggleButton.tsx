import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import './theme-toggle.css';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const effectiveIsDark = theme === 'system' ? systemPrefersDark : theme === 'dark';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
    toggleTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Theme menu: Current theme is ${theme}`}
        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${effectiveIsDark
            ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            : 'bg-white hover:bg-gray-100 text-gray-700 shadow'
          }`}
      >
        <span className="text-lg">
          {theme === 'light' && '☀️'}
          {theme === 'dark' && '🌙'}
          {theme === 'system' && '⚙️'}
        </span>
        <span className="text-sm font-medium hidden sm:inline">
          {theme === 'light' && 'Light'}
          {theme === 'dark' && 'Dark'}
          {theme === 'system' && 'System'}
        </span>
      </button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 py-2 rounded-md shadow-lg z-50 ${effectiveIsDark ? 'bg-gray-800' : 'bg-white'
          }`}>
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center w-full px-4 py-2 text-left text-sm ${theme === 'light'
                ? effectiveIsDark ? 'bg-gray-700 text-blue-400' : 'bg-gray-100 text-blue-600'
                : effectiveIsDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <span className="mr-2">☀️</span>
            <span>Light Mode</span>
            {theme === 'light' && (
              <span className="ml-auto">✓</span>
            )}
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center w-full px-4 py-2 text-left text-sm ${theme === 'dark'
                ? effectiveIsDark ? 'bg-gray-700 text-blue-400' : 'bg-gray-100 text-blue-600'
                : effectiveIsDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <span className="mr-2">🌙</span>
            <span>Dark Mode</span>
            {theme === 'dark' && (
              <span className="ml-auto">✓</span>
            )}
          </button>

          <button
            onClick={() => setTheme('system')}
            className={`flex items-center w-full px-4 py-2 text-left text-sm ${theme === 'system'
                ? effectiveIsDark ? 'bg-gray-700 text-blue-400' : 'bg-gray-100 text-blue-600'
                : effectiveIsDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-50'
              }`}
          >
            <span className="mr-2">⚙️</span>
            <span>System Mode</span>
            {theme === 'system' && (
              <span className="ml-auto">✓</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};