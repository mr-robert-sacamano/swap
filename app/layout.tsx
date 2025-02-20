import type { Metadata } from "next";
import { DynaPuff, Inter } from "next/font/google";
import Image from 'next/image';
import AppWalletProvider from "./_components/other/AppWalletProvider";

import "./globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import Links from "./_components/ui/links";
import Wallet from "./_components/ui/wallet";
import beth from '../public/image/beth.png';


const dynapuff = DynaPuff({
  variable: '--font-dynapuff',
  subsets: ["latin"],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BethSwap",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable } antialiased`}
      >
        <AppWalletProvider>
          <div className="flex flex-col h-screen justify-between">
            <header
              className="w-100 bg-[#222222] pl-4 flex justify-between shadow-md">
              <div className="flex justify-between py-4">
                <Image
                  alt="BETH Swap"
                  src={beth.src}
                  width={48}
                  height={48}
                  className="rounded-md w-[32px] h-[32px] sm:w-[48px] sm:h-[48px]"
                  />
                
                <div className={`${dynapuff.variable } flex pl-1 sm:pl-2 text-sm/4 sm:text-xl/5 items-center logo`}>
                  BETH <br/>
                  SWAP
                </div>
              </div>

              <div className={`flex items-center items-stretch text-xs sm:text-2xl font-medium text-[#666666]`}>
                <Links />
              </div>
            </header>
            <main>
              {children}
            </main>
            <footer className="sticky bottom-0 text-center p-4 text-[#ca41c5] text-lg bg-[#222222]">
              <Wallet />
            </footer>
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}
