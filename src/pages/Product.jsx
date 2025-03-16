import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../css/product.css";

const Product = () => {
  const params = useParams();
  // console.log(params);

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
        console.log(response.data);
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

    return { imageOffer, price, offerDetails };
  };
  let infosToUse;
  !isLoading && (infosToUse = fullInfos());
  console.log(infosToUse);

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
            <p></p>
            <p></p>
            <div>
              <div></div>
              <p></p>
            </div>
          </div>
          <button>Acheter</button>
        </div>
      </div>
    </main>
  );
};

export default Product;
