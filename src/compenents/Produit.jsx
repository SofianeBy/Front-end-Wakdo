import { useState, useEffect } from "react";
import axios from "axios";
import Category from "../../categories.json";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Produits = () => {
  const [produit, setProduit] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axios.get(
          `https://s3.eu-west-3.amazonaws.com/cdn.alpha.tech/646736d86ed3050008a172d0/exercises/wakdo/produits.json`
        );
        console.log(response.data);

        setProduit(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduit();
  }, []);
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      {console.log(
        produit)}
      <p className="menu-nav">Produit</p>
    </>
  );
};
export default Produits;
