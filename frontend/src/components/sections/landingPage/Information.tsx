import React from 'react'

function Information() {
  return (
    <div className="mx-5 md:mx-10 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-10 lg:items-center">
    
      <div className="mt-5 mb-3 lg:mt-10 lg:mb-5">
        <h1 className="font-nowy text-2xl md:text-3xl lg:text-5xl leading-tight md:leading-snug lg:leading-tight dark:bg-custom-gradient dark:text-transparent dark:bg-clip-text">
          Seamless Crypto Payments for Digital Creators
        </h1>
      </div>

  
      <div className="mt-3 lg:mt-0">
        <p className="font-pop text-base md:text-lg lg:text-xl dark:text-light">
          Accept payments globally without boundaries. Create product links in seconds, share instantly, and receive crypto payments seamlessly. No complex integrations. No coding required.
        </p>
      </div>
    </div>
  );
}


export default Information