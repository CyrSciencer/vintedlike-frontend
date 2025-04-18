import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import placeholder from "../img/placeholder.jpg";
import "../css/product.css";
import Cookies from "js-cookie";
const Product = ({ setInfoPayment }) => {
  const params = useParams();
  // console.log(params);
  // console.log(homePricing);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--vinted-like--d7bkrd25789m.code.run/offers/" + params.id
        );
        setData(response.data);
        // console.log(response.data);
        setIsLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  // console.log(data);
  // console.log(response.data);

  //   console.log(params); // {id: '777'}
  // console.log(data.offers);
  // console.log(params.id);
  const fullInfos = () => {
    // console.log(data);
    const imageOffer = data.product_image;
    const price = data.product_price;
    const productDetail = data.product_details;
    const productName = data.product_name;
    const productDescription = data.product_description;
    let owner = "none";
    data.owner && (owner = data.owner.account.username);
    let avatar = placeholder;

    let offerDetails = {};
    for (let i = 0; i < productDetail.length; i++) {
      productDetail[i].MARQUE &&
        (offerDetails.marque = productDetail[i].MARQUE);
      productDetail[i].TAILLE &&
        (offerDetails.taille = productDetail[i].TAILLE);
      productDetail[i].ÉTAT && (offerDetails.état = productDetail[i].ÉTAT);
      productDetail[i].COULEUR &&
        (offerDetails.couleur = productDetail[i].COULEUR);
      productDetail[i].EMPLACEMENT &&
        (offerDetails.emplacement = productDetail[i].EMPLACEMENT);
    }
    // console.log(placeholder);

    return {
      imageOffer,
      price,
      offerDetails,
      productName,
      productDescription,
      owner,
      avatar,
    };
  };
  let infosToUse;
  !isLoading && (infosToUse = fullInfos());
  // console.log(infosToUse);

  return isLoading ? (
    <p>chargement</p>
  ) : (
    <main className="offer-main">
      <div>
        <img src={infosToUse.imageOffer} alt="" />
      </div>
      <div>
        <div>
          <div>
            <p>{infosToUse.price} €</p>

            <div className="offer-infos">
              {infosToUse.offerDetails.marque && (
                <div>
                  <p>MARQUE</p>
                  <p>{infosToUse.offerDetails.marque}</p>
                </div>
              )}
              {infosToUse.offerDetails.taille && (
                <div>
                  <p>TAILLE</p>
                  <p>{infosToUse.offerDetails.taille}</p>
                </div>
              )}
              {infosToUse.offerDetails.état && (
                <div>
                  <p>ÉTAT</p>
                  <p>{infosToUse.offerDetails.état}</p>
                </div>
              )}
              {infosToUse.offerDetails.couleur && (
                <div>
                  <p>COULEUR</p>
                  <p>{infosToUse.offerDetails.couleur}</p>
                </div>
              )}
              {infosToUse.offerDetails.emplacement && (
                <div>
                  <p>EMPLACEMENT</p>
                  <p>{infosToUse.offerDetails.emplacement}</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <p>{infosToUse.productName}</p>
            <p>{infosToUse.productDescription}</p>
            <div>
              <img src={infosToUse.avatar} alt="" />
              <p>{infosToUse.owner}</p>
            </div>
          </div>
          <button>
            {Cookies.get("token") ? (
              <Link
                to="/payment"
                onClick={() => {
                  setInfoPayment({ ...infosToUse });
                }}
              >
                Acheter
              </Link>
            ) : (
              <Link to="/login">Acheter</Link>
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
