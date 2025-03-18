import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/connection.css";
const Login = ({ token, setToken }) => {
  // const [token,setToken]

  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/user/login",
        data
      );
      setToken(response.data.token);
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (error) {
      error.response && setErrorMessage(error.response.status);
      console.log(errorMessage);
    }
  };
  const handleEmail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const handlePassword = (event) => {
    setData({ ...data, password: event.target.value });
  };
  // console.log(data);

  return (
    <section className="login">
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Adresse email"
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
        />
        <button>Se connecter</button>
      </form>
      <div>
        <p>
          <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
        </p>
      </div>
    </section>
  );
};
export default Login;
