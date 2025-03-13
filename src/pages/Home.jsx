import img from "../img/hero.jpg";
import Offers from "../components/Offers";
import placeholder from "../img/placeholder.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      console.log("here");

      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
  //   console.log(data);
  const offers = data.offers;
  let counter = 0;

  return isLoading ? (
    <p>chargement</p>
  ) : (
    <main>
      <div>
        <img src={img} alt="home img" className="home-img" />
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          <button>Commencer à vendre</button>
        </div>
      </div>
      <div className="offers">
        {offers.map((offer) => {
          if (counter < 9 * 5) {
            counter++;
            return (
              <div key={offer._id} className="offer">
                <Offers offerInfo={offer} placeholder={placeholder} />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
};
export default Home;
