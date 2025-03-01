import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  // navigate=useNavigate();
  const { image, title, id, rating, price, description } = product;
  // console.log(  product)
  const [state, dispatch] = useContext(DataContext);
  // console.log(state)

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
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {/* {renderDesc && <div>{description}</div>} */}
        {renderDesc && <div style={{ maxWidth: "500px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/*count  */}
          <small>{rating?.count}</small>
        </div>
        <div className={classes.price}>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>

        {/* <button className={classes.button} onClick={addToCart}>
          add to cart
        </button> */}
        <br /> <br />
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
}
export default ProductCard;
