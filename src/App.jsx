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
const App = () => {
  const [search, setSearch] = useState("");
  const [priceHandle, setPriceHandle] = useState({
    sort: true,
    priceMin: 10,
    priceMax: 100,
  });
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [homePricing, setHomePricing] = useState(true);

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
            homePricing={homePricing}
          />
        </header>
        <Routes>
          <Route
            path={`/`}
            element={
              <Home
                setPriceHandle={setPriceHandle}
                setHomePricing={setHomePricing}
                search={search}
                priceHandle={priceHandle}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<Product setHomePricing={setHomePricing} />}
          />
          <Route
            path="/signup"
            element={
              <SignUp
                token={token}
                setToken={setToken}
                setHomePricing={setHomePricing}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                token={token}
                setToken={setToken}
                setHomePricing={setHomePricing}
              />
            }
          />
          <Route
            path="/publish"
            element={<Publish setHomePricing={setHomePricing} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
