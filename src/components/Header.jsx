import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Cookies from "js-cookie";
const Header = ({
  search,
  setSearch,
  priceHandle,
  setPriceHandle,
  token,
  setToken,
}) => {
  const sort = priceHandle.HighPriceFirst;

  return (
    <>
      <div>
        <Link to="/" className="home-link">
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

        <div className="sorting">
          <div>
            <p>Trier par prix</p>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => {
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
        <button>Vends tes articles</button>
      </div>
    </>
  );
};
export default Header;
