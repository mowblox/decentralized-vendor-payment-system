import React from 'react'
import DefaultText from '../landingPage/DefaultTititle'
import { Button, buttonVariants } from '../../ui/button'
import FastImage from '../../../../public/images/landingPage/misc.png';
import ArrowImage from '../../../../public/images/landingPage/arrow_down.png'
import WriggleImage from '../../../../public/images/landingPage/wriggle.png';
import Card from '../../ui/card'

function ChoosePayFlow() {
  return (
    <div className='mb-10'>
      <DefaultText className='mb-5 dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text md:text-[50px] md:pb-10'title='why choose PayFlow?'/>

    <div className='grid overflow-hidden grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mx-5 md:mx-10 lg:mx-10'>

    <Card 
    title="Instant Setup" 
    image={FastImage} 
    buttonClassName="mt-10 ml-10"
    imageClassName="top-28 right-20"    
    description="Create your merchant account and start accepting payments in under 2 minutes. No lengthy verification processes or complex integrations required."
/>

<Card 
    title="lower fees" 
    image={ArrowImage} 
    buttonClassName="mt-[20rem] ml-5"
    imageClassName="top-[13rem] right-[-2rem]"    
    description="Say goodbye to hefty payment processing fees. Pay only 1% per successful transaction, with no hidden charges or monthly subscriptions."
/>


<Card 
    title="flexible fees" 
    image={WriggleImage} 
    buttonClassName="mt-[20rem] ml-5"
    imageClassName="top-[2rem] right-[1rem]"    
    description="Share your payment links anywhere – social media, email, messaging apps, or your website. One link works everywhere."
/>

      </div>


      <DefaultText className ="m-10 text-nowrapm md:text-custom-gradient dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text md:pt-20"title='How it works'/>

      <div className="grid grid-cols-1 gap-4 px-10 sm:px-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">

<Button
  className={buttonVariants({
    size: "sm",
    className:
      "hover:bg-custom-gradient dark:text-light dark:border-light rounded-full font-pop capitalize py-7  sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-transparent",
  })}
>
  create your account
</Button>

<Button
  className={buttonVariants({
    size: "sm",
    className:
      "hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-pop capitalize py-7 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-transparent",
  })}
>
  add your product
</Button>

<Button
  className={buttonVariants({
    size: "sm",
    className:
      "hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-pop capitalize py-7 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-transparent",
  })}
>
  share your link
</Button>

<Button
  className={buttonVariants({
    size: "sm",
    className:
      "hover:bg-custom-gradient dark:text-light  dark:border-light rounded-full font-pop capitalize py-7 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-transparent",
  })}
>
  receive payments
</Button>

</div>


    </div>
  )
}

export default ChoosePayFlow