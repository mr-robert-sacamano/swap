'use client';

import Link from 'next/link';
import {
	ArrowUpRightIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <div className="bg-[#ca41c5]">
        <div className="max-w-4xl mx-auto p-12 border-[#222222] rounded-lg text-white text-xl font-light">
          <p><span className="beth-swap">BethSwap</span> represents the next step for the BETH community on Solana—a decentralized exchange (DEX) that blends fun, rewards, and exclusive benefits for BETH holders.</p>
          <br />
          <p>Built on BETH’s memecoin heritage, <span className="beth-swap">BethSwap</span> provides low-fee token swaps, staking rewards, and Club BETH, where holders can interact with one another and the team directly. It’s a platform for swapping, earning, and showing off your BETH tokens.</p>
          <br />
          <p>BETH began as a meme but grew into a thriving community on Solana. <span className="beth-swap">BethSwap</span> continues that momentum in the decentralized finance (DeFi) space, making it simpler and more rewarding for BETH holders to trade, stake, and interact. <span className="logo">BethSwap</span> is more than just a DEX; it’s where the memecoin culture meets genuine utility and community-driven rewards.</p>          
        </div>                      
      </div>
      <div className="max-w-4xl mx-auto p-12 flex flex-col gap-6 text-[#ca41c5] text-lg">
        <div className="p-12 border-[#ca41c5] border-4 shadow-md rounded-lg">
          <span className="font-bold text-5xl beth-swap-dark">Swap</span><br />Swap boasts efficient and optimized token swaps, ensuring users get the best value through intelligent routing and liquidity aggregation on the Solana blockchain.
          <div className="mt-3 flex items-center cursor-pointer border-black border-2 text-lg bg-[#00a2ff] dynapuff text-white w-min">
            <Link
              href="/swap"
              className="flex items-center px-6 py-3"
            >
              Swap
              <ArrowUpRightIcon 
                className="ml-2 mb-1 h-5 w-5"  
              />
            </Link>
          </div>
        </div>

        <div className="p-12 border-[#ca41c5] border-4 shadow-md rounded-lg">
          <span className="font-bold text-5xl beth-swap-dark">Rewards</span><br />The rewards system enable BETH holders to stake their tokens and earn passive income, aligning personal incentives with the ecosystem’s long-term growth.
          <div className="mt-3 flex items-center cursor-pointer border-black border-2 text-lg bg-[#00a2ff] dynapuff text-white w-min">
            <Link
              href="/rewards"
              className="flex items-center px-6 py-3"
            >
              Rewards
              <ArrowUpRightIcon 
                className="ml-2 mb-1 h-5 w-5"  
              />
            </Link>
          </div>
        </div>

        <div className="p-12 border-[#ca41c5] border-4 shadow-md rounded-lg">
          <span className="font-bold text-5xl beth-swap-dark">Sweep</span><br /> Sweep your dust and unwanted tokens into BETH with BethSweep!
          <div className="mt-3 flex items-center cursor-pointer border-black border-2 text-lg bg-[#00a2ff] dynapuff text-white w-min">
            <Link
              href="/sweep"
              className="flex items-center px-6 py-3"
            >
              Sweep
              <ArrowUpRightIcon 
                className="ml-2 mb-1 h-5 w-5"  
              />
            </Link>
          </div>
        </div>

        <div className="p-12 border-[#ca41c5] border-4 shadow-md rounded-lg">
          <span className="font-bold text-5xl beth-swap-dark">Club</span><br /> Club BETH is an exclusive space for active BETH holders, offering direct access to the community and team insights.
          <div className="mt-3 flex items-center cursor-pointer border-black border-2 text-lg bg-[#00a2ff] dynapuff text-white w-min">
            <Link
              href="/club"
              className="flex items-center px-6 py-3"
            >
              Club
              <ArrowUpRightIcon 
                className="ml-2 mb-1 h-5 w-5"  
              />
            </Link>
          </div>
        </div>                        
      </div>
    </>
  );
}
