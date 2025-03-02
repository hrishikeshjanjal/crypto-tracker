
#### `docs/api-integration.md`
```md
---
title: API Integration
---

## API Used
We use the [CoinGecko API](https://www.coingecko.com/en/api) to fetch real-time cryptocurrency prices.

## Fetching Data
We make API calls using `fetch` inside the `CryptoContext`:

```typescript
const fetchCryptos = async () => {
  setLoading(true);
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await res.json();
    setCryptos(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false);
  }
};
