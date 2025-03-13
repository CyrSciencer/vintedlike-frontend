import axios from "axios";
import { useState } from "react";
const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    newsletter: false,
  });
  console.log(data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      data
    );
  };
  const handleUsername = (event) => {
    setData({ ...data, username: event.target.value });
  };
  const handleEmail = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const handlePassword = (event) => {
    setData({ ...data, password: event.target.value });
  };
  const handleNewsletter = (event) => {
    setData({ ...data, newsletter: !data.newsletter });
  };
  const username = data.username;
  const email = data.email;
  const password = data.password;
  const newsletter = data.newsletter;

  return (
    <section>
      <h2></h2>
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
        {/* <Link> */}
        <p>Tu as déjà un compte ? Connecte-toi !</p>
        {/* </Link> */}
      </div>
    </section>
  );
};
export default SignUp;
