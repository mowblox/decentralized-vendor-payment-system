import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div 
      onClick={toggleDarkMode}
      className="relative w-16 h-8 flex items-center dark:bg-dark bg-darkGray cursor-pointer rounded-full p-1 dark:border-light border"
    >
      <Moon 
        className={`z-50 ${darkMode ? 'text-black' : 'text-white'}`} 
        size={18} 
      />
      <div 
        className="absolute bg-white dark:bg-primary w-7 h-7 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
      <Sun 
        className={`ml-auto z-50 ${darkMode ? 'text-white' : 'text-black'}`} 
        size={18} 
      />
    </div>
  );
}

export default ThemeToggle;
