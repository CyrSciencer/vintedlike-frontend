import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cookies from "js-cookie";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
const App = () => {
  const [infoPayment, setInfoPayment] = useState({});
  const [search, setSearch] = useState("");
  const [priceHandle, setPriceHandle] = useState({
    sort: true,
    priceMin: 10,
    priceMax: 100,
  });
  const [token, setToken] = useState(Cookies.get("token") || null);
  // console.log({ infoPayment });

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
          <Route
            path={`/`}
            element={
              <Home
                setPriceHandle={setPriceHandle}
                search={search}
                priceHandle={priceHandle}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<Product setInfoPayment={setInfoPayment} />}
          />
          <Route
            path="/signup"
            element={<SignUp token={token} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
          <Route path="/publish" element={<Publish />} />
          <Route
            path="/payment"
            element={<Payment infoPayment={infoPayment} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
