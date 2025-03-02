
#### `docs/state-management.md`
```md
---
title: State Management
---

## Approach Used
We use React Context API to manage global state for cryptocurrencies.

### Why Context API?
- Simple and built into React
- Suitable for small-scale applications

### Implementation

```typescript
export const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCryptos = async () => {
    setLoading(true);
    // Fetch logic here
    setLoading(false);
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  return <CryptoContext.Provider value={{ cryptos, loading, fetchCryptos }}>{children}</CryptoContext.Provider>;
};
