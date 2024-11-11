'use client'
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
    <div className="h-auto flex items-center flex-col justify-center py-10 dark:bg-darkGray dark:text-light w-96 p-6 rounded-lg shadow-lg">
      <h1 className="text-[35px] font-semibold mb-5 dark:text-light font-nowy">
        Join <span className="uppercase ">Payflow!</span>
      </h1>
      
  
      <div className="flex flex-col gap-4 mb-4">
        <GoogleButton />
          <Divider/>
        <WalletButton />
      </div>

 
      <p className="text-sm mt-5 dark:text-light ">
        {isLogin ? (
          <div className="text-[15px] font-pop">
            Don't have an account?{' '}
            <span className="text-mouve font-extrabold cursor-pointer">Sign Up</span>
          </div>
        ) : (
          <div className="text-[15px] font-pop">
            Already have an account?{' '}
            <span className="cursor-pointer text-mouve font-extrabold">Login</span>
          </div>
        )}
      </p>
    </div>
  );
}


export default AuthForm