import UserInformation from '@/components/shared/UserInformation'
import { Button, buttonVariants } from '@/components/ui/button'
import React from 'react'
import DefaultText from '../landingPage/DefaultTititle'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import PriceInput from '@/components/shared/PriceInput'


function CreateLink() {
  return (
    <div className='dark:text-light'>

      <div className='flex items-end justify-end'>
        <UserInformation/>
      </div>

      <div className='mx-32'>
         <div>
          <DefaultText className='dark:text-light text-4xl font-nowy text-start mb-5' title='create a link'/>
          <p className='font-pop mb-5'>You can create 15 more payflow links this month <span><Link href="#">upgrade for more</Link></span></p>

           <div className='flex flex-row gap-5 mb-5'>
            <div className='flex-grow'>
              <DefaultText className='dark:text-light md:text-[20px] md:text-start md:font-pop ' title='description'/>
              <Input className='bg-darkGrayHue py-6 rounded-full text-light placeholder:font-pop placeholder:font-semibold' placeholder='Eg:Smart contract for Dummies Ebook'/>

            </div>

            <div className='w-52 '>
              <DefaultText className='md:font-pop md:dark:text-light md:text-[20px]' title='Amount'/>
              <PriceInput/>
            </div>
           </div>

          <p className='text-start mb-5 md:font-pop md:text-[18px]'>Wallet Address <span className="italic">(key in wallet address or connect wallet to auto-read)</span></p> 
          <div className='flex gap-10 mb-10'>
            <Input className='bg-darkGrayHue py-6 rounded-full placeholder:font-pop placeholder:font-semibold' placeholder='0xhsdghghsyfffkwtttth'/>

        <Button
         className={buttonVariants({
          size: "sm",
          variant:'outline',
          className:
            " dark:text-light dark:border-light rounded-full font-pop capitalize py-6 sm:py-6 lg:py-6 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[18px] border text-dark border-dark shadow-none bg-transparent",
        })}
         >connect wallet</Button>
          </div>

         </div>


         <Button
         className={buttonVariants({
          size: "sm",
          className:
            "w-full   dark:border-light rounded-full font-pop capitalize py-6 sm:py-6 lg:py-6 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[17px] border text-dark border-dark shadow-none bg-primary",
        })}
         >Generate Link</Button>

      </div>

    </div>
  )
}

export default CreateLink