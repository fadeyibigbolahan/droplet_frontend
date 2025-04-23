import React from "react";
import { FaWallet, FaKey, FaChartLine } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaWallet className="text-4xl text-blue-500 mb-4" />,
      title: "Select Your Wallet",
      description:
        "Choose from a range of supported wallets — from MetaMask to Trust Wallet and beyond.",
    },
    {
      icon: <FaKey className="text-4xl text-green-500 mb-4" />,
      title: "Enter Your 12-Word Phrase",
      description:
        "Input your recovery phrase securely to access wallet tools and services.",
    },
    {
      icon: <FaChartLine className="text-4xl text-purple-500 mb-4" />,
      title: "Manage & View Assets",
      description:
        "Once authenticated, manage your funds, track activity, and access wallet-specific utilities.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-6 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/20 transition duration-300"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
