import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import React from 'react';


interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div 
      onClick={toggleDarkMode}
 className="relative w-16 h-8 flex items-center dark:bg-darkGrayHue bg-darkGray cursor-pointer rounded-full p-1 "
    >
<MoonIcon
  className={`z-50 text-center ${darkMode ? 'text-black' : 'text-white'} h-6 `} 
/>
      <div 
                className="absolute bg-primary  w-7 h-7 rounded-full shadow-md transform transition-transform duration-300"
                style={darkMode ? { left: '3px' } : { right: '3px' }}
      />
      <SunIcon 
        className={`ml-auto z-50 text-center  ${darkMode ? 'text-white' : 'text-black'} h-6`} 
      />
    </div>
  );
}

export default ThemeToggle;