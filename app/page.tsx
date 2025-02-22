export default function Home() {
  return (
    <>
      <div className="bg-[#ca41c5]">
        <div className="max-w-4xl mx-auto p-12 border-[#222222] rounded-lg text-white text-xl font-light">
          <p><span className="logo">BethSwap</span> represents the next step for the BETH community on Solana—a decentralized exchange (DEX) that blends fun, rewards, and exclusive benefits for BETH holders.</p>
          <br />
          <p>Built on BETH’s memecoin heritage, <span className="logo">BethSwap</span> provides low-fee token swaps, staking rewards, and Club BETH, where holders can interact with one another and the team directly. It’s a platform for swapping, earning, and showing off your BETH tokens.</p>
          <br />
          <p>BETH began as a meme but grew into a thriving community on Solana. <span className="logo">BethSwap</span> continues that momentum in the decentralized finance (DeFi) space, making it simpler and more rewarding for BETH holders to trade, stake, and interact. <span className="logo">BethSwap</span> is more than just a DEX; it’s where the memecoin culture meets genuine utility and community-driven rewards.</p>          
        </div>                      
      </div>
      <div className="max-w-4xl mx-auto p-12 flex flex-col gap-6 text-[#ca41c5] text-lg">
        <div className="p-12 border-[#ca41c5] border-2 shadow-md rounded-lg">
          <span className="font-bold text-5xl dynapuff">Swap</span><br />Swap boasts efficient and optimized token swaps, ensuring users get the best value through intelligent routing and liquidity aggregation on the Solana blockchain.
        </div>

        <div className="p-12 border-[#ca41c5] border-2 shadow-md rounded-lg">
        <span className="font-bold text-5xl dynapuff">Rewards</span><br />The rewards system enable BETH holders to stake their tokens and earn passive income, aligning personal incentives with the ecosystem’s long-term growth.

        </div>

        <div className="p-12 border-[#ca41c5] border-2 shadow-md rounded-lg">
        <span className="font-bold text-5xl dynapuff">Sweep</span><br /> Sweep your dust and unwanted tokens into BETH with BethSweep!

        </div>

        <div className="p-12 border-[#ca41c5] border-2 shadow-md rounded-lg">
        <span className="font-bold text-5xl dynapuff">Club</span><br /> Club BETH is an exclusive space for active BETH holders, offering direct access to the community and team insights.

        </div>                        
      </div>
    </>
  );
}
