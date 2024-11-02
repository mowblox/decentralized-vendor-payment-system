'use client'
import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/logo/logo.png'
import navLinks from '../../app/data/navLinkData';
import ThemeToggle from './ThemeToggle';
import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';




function SideNav() {
  const pathname = usePathname();

  return (
    <div className='h-full dark:text-light dark:bg-[#222]'>
      <div className='mx-10 pt-3 mb-3'>
        <Link href="/" className='flex flex-row space-x-3 mb-10'>
          <Image src={Logo} alt="logo" className='w-[30px] sm:w-[40px] object-contain' width={50} height={30}/>
          <h1 className='uppercase font-nowy text-[26px]'>payflow</h1>
        </Link>

        <div className='flex flex-col mb-20 dark:text-light'>
        {navLinks.map(({name,icon,href}) => {
            return (
              <Link 
                href={href}
                key={name}
                className={clsx(
                  'flex flex-row md:gap-5 mb-10 font-pop rounded-md',
                  {
                    'dark:bg-darkGrayHue px-3 bg-gray border-l-4 border-primary text-light py-2': pathname === href
                  }
                )}
              >
                {icon}
                <h1>{name}</h1>
              </Link>
            );
          })}
        </div>

        <Button
          className={buttonVariants({
            size: "sm",
            className: "dark:text-dark w-full dark:border-light rounded-full font-pop capitalize py-3 sm:py-6 lg:py-5 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[18px] border text-dark border-dark shadow-none",
          })}
        >
          create new
        </Button>

        <div className='mt-44'>
          <ThemeToggle darkMode={false} toggleDarkMode={() => { /* Your toggle logic */ }} />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
