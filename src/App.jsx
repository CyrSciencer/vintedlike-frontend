import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import axios from "axios";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
const App = () => {
  const [search, setSearch] = useState("");
  const [priceHandle, setPriceHandle] = useState({});
  useEffect(() => {
    setPriceHandle({
      HighPriceFirst: false,
      minPrice: 10,
      maxPrice: 100,
    });
  }, []);

  return (
    <>
      <Router>
        <header>
          <Header
            search={search}
            setSearch={setSearch}
            priceHandle={priceHandle}
            setPriceHandle={setPriceHandle}
          />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
