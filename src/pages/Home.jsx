import img from "../img/hero.jpg";
import Offers from "../components/Offers";
import placeholder from "../img/placeholder.jpg";
import { useState, useEffect } from "react";
import axios from "axios";
//https:$//site--vinted-like--d7bkrd25789m.code.run/
//http:$//localhost:3000/
const Home = ({ search, priceHandle }) => {
  // console.log(homePricing);
  let sorting;
  // console.log(priceHandle.sort);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // console.log("here");

      try {
        priceHandle.sort ? (sorting = "asc") : (sorting = "desc");
        const response = await axios.get(
          `http://localhost:3000/offers?title=${search}&sort=${sorting}`
        );
        setData(response.data);
        setIsLoading(false);
        // console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search, priceHandle]);
  //   console.log(data);
  const offers = data;
  // console.log(priceHandle);

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
          return (
            <div key={offer._id} className="offer">
              <Offers offerInfo={offer} placeholder={placeholder} />
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default Home;
