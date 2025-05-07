import React from "react";
import WalletGrid from "../components/Wallet";
import { Footer, Navbar } from "../components";

const WalletPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-1 mb-2">
        <h2 className="font-bold text-3xl">Wallets</h2>
        <p className="font-semibold text-lg">Choose a wallet</p>
      </div>
      <WalletGrid />
      <Footer />
    </div>
  );
};

export default WalletPage;
