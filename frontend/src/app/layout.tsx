import type { Metadata } from "next";
import {Poltawski_Nowy, Poppins} from 'next/font/google'
import "./globals.css";

const nowy = Poltawski_Nowy({
  variable: '--font-nowy',
  weight: ['400', '500', '700'], 
});

const poppins = Poppins({
  variable: '--font-pop',
  weight: ['300', '600'], 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${poppins.variable} ${nowy.variable} antialiased bg-grayTint dark:bg-dark `}
      >
        {children}
      </body>
    </html>
  );
}
