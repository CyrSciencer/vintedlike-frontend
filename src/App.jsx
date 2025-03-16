import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import axios from "axios";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
const App = () => {
  const [search, setSearch] = useState("");
  const [priceHandle, setPriceHandle] = useState({});
  const [token, setToken] = useState(null);

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
            token={token}
            setToken={setToken}
          />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/signup"
            element={<SignUp token={token} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
