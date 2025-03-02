"use client";
import { useContext, useState } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const CryptoList = () => {
  const { cryptos } = useContext(CryptoContext)!;
  const [search, setSearch] = useState<string>('');

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Cryptocurrency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <ul>
        {filteredCryptos.map((crypto) => (
          <li key={crypto.id} className="border p-2 mb-2">
            {crypto.name}: ${crypto.current_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
