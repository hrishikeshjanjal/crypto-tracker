"use client"; // Mark this as a client component

import { useContext } from 'react';
import { CryptoContext } from './context/CryptoContext';
import { CryptoProvider } from './context/CryptoContext';
import CryptoList from './components/CryptoList';
import Loading from './components/Loading';

const Home = () => {
  const context = useContext(CryptoContext);

  if (!context) {
    throw new Error("CryptoContext not found. Please ensure the provider is wrapping the component tree.");
  }

  const { loading, fetchCryptos } = context;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto Dashboard</h1>
      <button
        onClick={fetchCryptos}
        className="bg-blue-500 text-white p-2 mb-4"
      >
        Refresh Prices
      </button>
      {loading ? <Loading /> : <CryptoList />}
    </div>
  );
};

const Page = () => {
  return (
    <CryptoProvider>
      <Home />
    </CryptoProvider>
  );
};

export default Page;
