import type { Metadata } from "next";
import { DynaPuff, Inter } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="flex flex-col min-h-screen">
            <header
              className="header">
              <Link
                href="/">
              <div className="flex justify-between py-4">
                <Image
                  alt="BETH Swap"
                  src={beth.src}
                  width={48}
                  height={48}
                  className="logo-img"
                  />
                
                <div className={`logo-text beth-swap`}>
                  BETH <br/>
                  SWAP
                </div>
              </div>
              </Link>

              <div className={`link-wrapper`}>
                <Links />
              </div>
            </header>
            <main
              className="flex-grow"
            >
              <div className="">
                {children}
              </div>
            </main>
            <footer className="footer">
              <Wallet />
            </footer>
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}
