import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";
function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          {/* <FiMenu /> */}
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
