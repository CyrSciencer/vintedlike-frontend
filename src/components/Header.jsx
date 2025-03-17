import logo from "../img/logo.png";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import { useEffect } from "react";
const Header = ({
  search,
  setSearch,
  priceHandle,
  setPriceHandle,
  token,
  setToken,
  homePricing,
}) => {
  useEffect(() => {
    console.log(Cookies.get("token"));
    console.log(Cookies.get(token));
  }, []);
  const sort = priceHandle.HighPriceFirst;

  // console.log(homePricing);
  //gérer si le token existe, alors autoconnect
  return (
    <>
      <div>
        <Link to={`/`} className="home-link">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {homePricing && (
          <div className="sorting">
            <div>
              <p>Trier par prix</p>
              <label className="switch">
                <input
                  type="checkbox"
                  onClick={() => {
                    console.log(sort);

                    setPriceHandle({ ...priceHandle, HighPriceFirst: !sort });
                  }}
                />

                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <p>Prix entre</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <div>
          <button>
            {token !== null ? (
              <p
                onClick={() => {
                  setToken(null);
                  Cookies.remove("token");
                }}
              >
                Déconnection
              </p>
            ) : (
              <Link to="/signup">S'inscrire</Link>
            )}
          </button>
          <button>
            <Link to="/login">Se connecter</Link>
          </button>
        </div>
        <button>
          <Link to={`/publish`}>Vends tes articles</Link>
        </button>
      </div>
    </>
  );
};
export default Header;
