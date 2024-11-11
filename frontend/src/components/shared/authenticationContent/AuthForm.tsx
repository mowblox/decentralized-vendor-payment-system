'use client'
import { useState } from "react"
import GoogleButton from "./GoogleButton";
import WalletButton from "./WalletButton";
import Divider from "./Divider";

interface AuthProps{
  isLogin: boolean;
}

interface AuthProps {
  isLogin: boolean;
}

function AuthForm({ isLogin }: AuthProps) {
  return (
    <div className="h-auto flex items-center flex-col justify-center py-10 bg-darkGray w-96 p-6 rounded-lg shadow-lg">
      <h1 className="text-[35px] font-semibold mb-4 dark:text-light font-nowy">
        Join <span className="uppercase ">Payflow!</span>
      </h1>
      
  
      <div className="flex flex-col gap-4 mb-4">
        <GoogleButton />
          <Divider/>
        <WalletButton />
      </div>

      {/* Conditional Text for Login/Register */}
      <p className="text-sm">
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </>
        )}
      </p>
    </div>
  );
}


export default AuthForm