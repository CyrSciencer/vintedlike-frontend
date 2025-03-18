import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../css/publish.css";
const Publish = () => {
  const token = Cookies.get("token");

  //éléments à envoyer en back
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [quality, setQuality] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  //identification
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object body pour POST
    const formData = new FormData();
    formData.append("title", title);
    formData.append("picture", file);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("condition", quality);
    formData.append("color", color);
    formData.append("city ", city);

    try {
      const response = await axios.post(
        "http://localhost:3000/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleChange = (event, setState) => {
    setState(event.target.value);
  };
  return token ? (
    <section className="publication">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="filing">+ Ajouter une photo</label>
          <input
            type="file"
            // multiple={true} => pour pouvoir sélectionner plusieurs fichiers
            onChange={async (event) => {
              setFile(event.target.files[0]);
            }}
            id="filing"
          />
        </div>
        <div>
          <div>
            <label htmlFor="titre">Titre</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setTitle);
              }}
              value={title}
              id="titre"
            />
          </div>
          <div>
            <label htmlFor="desc">Décrit ton article</label>
            <textarea
              onChange={(event) => {
                handleChange(event, setDescription);
              }}
              value={description}
              id="desc"
            ></textarea>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="brand">Marque</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setBrand);
              }}
              value={brand}
              id="brand"
            />
          </div>
          <div>
            <label htmlFor="size">Taille</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setSize);
              }}
              value={size}
              id="size"
            />
          </div>
          <div>
            <label htmlFor="color">Couleur</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setColor);
              }}
              value={color}
              id="color"
            />
          </div>
          <div>
            <label htmlFor="quality">Etat</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setQuality);
              }}
              value={quality}
              id="quality"
            />
          </div>
          <div>
            <label htmlFor="city">Lieu</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setCity);
              }}
              value={city}
              id="city"
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="price">Prix</label>
            <input
              type="text"
              onChange={(event) => {
                handleChange(event, setPrice);
              }}
              value={price}
              id="price"
            />
          </div>
          <div>
            <input type="checkbox" />
            <p>Je suis intéressé(e) par les échanges</p>
          </div>
        </div>
        <button>Ajouter</button>
      </form>
    </section>
  ) : (
    <Navigate to="/" />
  );
};
export default Publish;
