import { Link } from "react-router-dom";

const Offers = ({ offerInfo, placeholder }) => {
  //   console.log(offerInfo._id);
  const id = offerInfo._id;
  const owner = offerInfo.owner.account.username;
  let avatar = placeholder;
  if (offerInfo.owner.account.avatar) {
    avatar = offerInfo.owner.account.avatar.secure_url;
  }
  //   console.log(offerInfo);
  const imageOffer = offerInfo.product_pictures[0].secure_url;
  const price = offerInfo.product_price;
  const productDetail = offerInfo.product_details;
  let detailSearch = {};
  //   const size = offerInfo.product_details
  //   const brand = offerInfo.product_details
  for (let i = 0; i < productDetail.length; i++) {
    productDetail[i].MARQUE && (detailSearch.marque = productDetail[i].MARQUE);
    productDetail[i].TAILLE && (detailSearch.taille = productDetail[i].TAILLE);
  }
  //   console.log(detailSearch);

  return (
    <>
      <div>
        <img src={avatar} alt="" />
        <p>{owner}</p>
      </div>
      <Link to={`/product/${id}`} className="offer-link">
        <div className="offer-img">
          <div>
            <img src={imageOffer} alt="" />
          </div>
          <div>
            <p>{price}</p>
            <p> {detailSearch.marque} </p>
            <p> {detailSearch.taille} </p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Offers;
