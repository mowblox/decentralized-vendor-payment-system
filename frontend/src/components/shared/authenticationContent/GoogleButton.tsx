'use client'
import Image from 'next/image'
import React from 'react'
import GoogleImage from '../../../../public/images/authImagePage/googleIcon.png'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'



function GoogleButton() {
  const {data: session} = useSession();

  const handleAuthClick=()=>{
    if(session){
      signOut()
    }else{
      signIn('google')
    }
  }
  return (
    <Button onClick={handleAuthClick} className="w-full flex items-center justify-center space-x-3 p-5 py-6 bg-white border border-gray-300 rounded-full hover:bg-gray-100">

      <Image src={GoogleImage} alt="Google logo" width={30} height={30} />
      <span className="ml-2 font-pop text-[18px] text-dark">
        {session ? "Sign out" : "Sign in with Google"}
        </span>
    </Button>
  );
}

export default GoogleButton;