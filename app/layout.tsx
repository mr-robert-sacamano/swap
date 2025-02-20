import type { Metadata } from "next";
import { DynaPuff } from "next/font/google";
import Image from 'next/image';

import "./globals.css";
import Links from "./_components/ui/links";
import beth from '../public/image/beth.png';

const dynapuff = DynaPuff({
  variable: "--font-dynapuff",
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
        className={`${dynapuff.variable} ${dynapuff.variable} antialiased`}
      >
        <div className="w-100 bg-[#222222] p-4 flex justify-between shadow-md">
          <div className="flex justify-between">
            <Image
              alt="BETH Swap"
              src={beth.src}
              width={50}
              height={50}
              className="rounded-md"
              />
            
            <div className="flex pl-2 text-xl/5 items-center">
              BETH <br/>
              SWAP
            </div>
          </div>

          <div className="flex items-center gap-8 text-2xl uppercase text-[#ca41c5]">
            <Links />
          </div>

          <div className="flex items-center text-[#ca41c5] text-xl">
            CONNECT WALLET
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
