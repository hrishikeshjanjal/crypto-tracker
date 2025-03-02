"use client";
import { useContext, useState, useEffect } from "react";
import { CryptoContext } from "../context/CryptoContext";
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";

const CryptoList = () => {
  const { cryptos, loading, fetchCryptos } = useContext(CryptoContext)!;
  const [search, setSearch] = useState<string>("");
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setIsLoadingDelayed(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
    setIsLoadingDelayed(false);
  }, [loading]);

  if (isLoadingDelayed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <TextField
        label="Search Cryptocurrency"
        variant="outlined"
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        margin="normal"
      />
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cryptocurrency</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCryptos.map((crypto) => (
              <TableRow key={crypto.id}>
                <TableCell>{crypto.name}</TableCell>
                <TableCell>${crypto.current_price.toLocaleString()}</TableCell>
                <TableCell>${crypto.market_cap.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CryptoList;
