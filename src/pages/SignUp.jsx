import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "../css/connection.css";
const SignUp = ({ token, setToken, setHomePricing }) => {
  setHomePricing(false); //deactivate the price handling ui
  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    newsletter: false,
  });
  //   console.log(data);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://site--vinted-like--d7bkrd25789m.code.run/user/signup`,
        data
      );

      setToken(response.data.token);
      Cookies.set("token", response.data.token);
      navigate("/");
    } catch (error) {
      error.response && setErrorMessage(error.response.status);
      console.log("AntiCrash");
    }
  };
  const handleUsername = (event) => {
    setData({
      ...data,
      account: {
        username: event.target.value,
      },
    });
  };
  const handleEmail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const handlePassword = (event) => {
    setData({ ...data, password: event.target.value });
  };
  const handleNewsletter = () => {
    setData({ ...data, newsletter: !data.newsletter });
  };

  return (
    <section className="sign-up">
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={handleUsername}
        />
        <input type="email" placeholder="Email" onChange={handleEmail} />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={handlePassword}
        />
        <div>
          <div>
            <input type="checkbox" onChange={handleNewsletter} />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
        </div>
        <button>S'inscrire</button>
      </form>
      <div>
        <p>
          <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
        </p>
      </div>
    </section>
  );
};
export default SignUp;
