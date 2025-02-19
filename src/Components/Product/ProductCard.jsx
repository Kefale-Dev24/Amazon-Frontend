import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
// import { Link } from "react-router-dom";
// import {Link, useNavigate} from 'react-router-dom'
// import { DataContext } from "../DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";

function ProductCard({ product }) {
  // function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // navigate=useNavigate();
  const { image, title, id, rating, price, description } = product;
  // console.log(  product)
  //   const [state, dispatch] = useContext(DataContext);

  // const handleRoute=()=>{
  //   navigate(`/products/${id}`)
  // }

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

  return (
    //  ${ flex ?  classes.product__flexed : "" } //this line of code will be inserted immediately next to code line 38 or classes.card__container
    <div
      className={`${classes.card__container} 

         
      `}
    >
      <a href={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </a>
      <div>
        <h3>{title}</h3>
        {/* {renderDesc && <div>{description}</div>} */}
        {/* {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>} */}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {/* <button className={classes.button} onClick={addToCart}>
          add to cart
        </button> */}

        {/* {renderAdd && ( */}
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
        {/* )} */}
      </div>
    </div>
  );
}

export default ProductCard;
