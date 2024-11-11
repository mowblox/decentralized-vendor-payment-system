'use client'
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import React from "react";




const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        ` https://ethereum-rpc.publicnode.com/${process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string,

    // Required App Info
    appName: "PAYFLOW",

    // Optional App Info
    appDescription: "A decentralized payment app for easier Convenience using Crypto",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }:{children:React.ReactNode}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
      <ConnectKitProvider
         customTheme={{
         "--ck-accent-color": "#00D54B",
        "--ck-accent-text-color": "#ffffff",
        }}
>
  {children}
</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
