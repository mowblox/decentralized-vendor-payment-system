import React from 'react';
import { Button, buttonVariants } from '../ui/button';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import DarkLogo from '../../../public/images/logo/logo.png';
import LightLogo from '../../../public/images/logo/logo1.png';


interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className='dark:bg-dark bg-grayTint p-3 sm:p-5 sticky top-0 z-50'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center space-x-2'>
          <Image 
            src={darkMode ? DarkLogo : LightLogo} 
            alt="app-logo" 
            width={50} 
            height={50} 
            className='w-[30px] sm:w-[40px]'
          />
          <h1 className='font-pop uppercase font-extrabold dark:text-light text-dark text-[18px] md:font-nowy md:text-[28px]'>
            payflow
          </h1>
        </div>
        <div className='flex flex-row items-center gap-5'>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Button
            className={buttonVariants({
              size: "lg",
              className: 'rounded-full font-pop capitalize px-3 md:px-5 text-nowrap border-[0.1px] text-dark border-dark shadow-none bg-primary'
            })}>
            get started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
