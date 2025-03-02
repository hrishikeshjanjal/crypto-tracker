"use client";

import { createContext, useState, useEffect, ReactNode } from 'react';

interface Crypto {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
}

interface CryptoContextType {
  cryptos: Crypto[];
  loading: boolean;
  fetchCryptos: () => void;
}

export const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptos = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,litecoin,cardano'
      );
      const data = await res.json();
      setCryptos(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptos, loading, fetchCryptos }}>
      {children}
    </CryptoContext.Provider>
  );
};
