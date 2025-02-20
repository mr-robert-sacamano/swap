import type { Metadata } from "next";
import { DynaPuff, Inter } from "next/font/google";
import Image from 'next/image';

import "./globals.css";
import Links from "./_components/ui/links";
import beth from '../public/image/beth.png';

const dynapuff = DynaPuff({
  subsets: ["latin"],
});

const inter = Inter({
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
        className={`antialiased`}
      >
        <div className="w-100 bg-[#222222] px-4 flex justify-between shadow-md">
          <div className="flex justify-between py-4">
            <Image
              alt="BETH Swap"
              src={beth.src}
              width={50}
              height={50}
              className="rounded-md"
              />
            
            <div className={`flex pl-2 text-xl/5 items-center logo`}>
              BETH <br/>
              SWAP
            </div>
          </div>

          <div className={`flex items-center items-stretch gap-2 text-2xl font-medium text-[#666666]`}>
            <Links />
          </div>

          <div className="flex items-center py-4 text-[#ca41c5] text-lg">
            Connect Wallet
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
