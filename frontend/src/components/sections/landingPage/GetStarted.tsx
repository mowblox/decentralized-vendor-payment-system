import { Button, buttonVariants } from '../../ui/button'
import DefaultText from '../landingPage/DefaultTititle'

function GetStarted() {
  return (
    <div className='mx:5 pt-20 mb-10 flex flex-col justify-center '>
       <DefaultText  className="font-bold text-4xl mb-5 dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text"title='GetStarted Today'/>

       
       <p className='font-pop text-darkGrayHue mx-5 md:mx-32 md:inline-block justify-center lg:mx-60 dark:text-light'>Ready to revolutionize your 
        payment experience? Join thousands 
        of creators who trust PayFlow for
         their crypto payments. No credit card required. Start accepting payments in minutes.</p>
     

  <div className='flex flex-row justify-center mt-5 lg:mt-20'>
  <Button className={buttonVariants({
    size: "sm",
    variant:"outline",
    className: "dark:text-light  dark:border-light rounded-full font-pop capitalize py-7 sm:py-6 lg:py-8 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[20px] border text-dark border-dark shadow-none bg-transparent"
  })}>
    create free account
  </Button>
</div>


      </div>
  )
}

export default GetStarted