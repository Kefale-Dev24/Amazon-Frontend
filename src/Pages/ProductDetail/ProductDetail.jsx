import React, { useState, useEffect } from "react";
import "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
