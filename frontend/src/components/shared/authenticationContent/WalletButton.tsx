import { Button } from '@/components/ui/button';
import { ConnectKitButton } from 'connectkit';
import React from 'react'

function WalletButton() {
  return (
    <ConnectKitButton.Custom>
    {({ isConnected, show, truncatedAddress, ensName }) => {
      return (
        <Button
          onClick={show}
          className="text-nowrap dark:text-light dark:border-light rounded-full font-pop capitalize py-6 sm:py-6 lg:py-6 px-4 sm:px-8 lg:px-5 text-[16px] sm:text-[18px] lg:text-[18px] border text-dark border-dark shadow-none bg-transparent"
        >
          {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
        </Button>
      );
    }}
  </ConnectKitButton.Custom>
  )
}

export default WalletButton