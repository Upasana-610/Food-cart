import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Mycartcontainer from "./Mycartcontainer";
import CartDropdown from "./CartDropdown";
import "./parent.css";
import Navbar from "./Navbar";
import { Children } from "react";
const ParentContainer = () => {
  //   let [toggleCart, setToggleCart] = useState(false);
  //   let [toggleHeart, setToggleHeart] = useState(false);
  //   const CartDrop = () => {
  //     setToggleCart(!toggleCart);
  //     console.log("object");
  //   };
  //   const HeartDrop = () => {
  //     setToggleHeart(!toggleHeart);
  //   };

  let [dropArray, setdropArray] = useState([]);
  const DataReceivefromMycart = (data) => {
    setdropArray([...dropArray, data]);
    console.log(dropArray);
  };
  return (
    <Fragment>
      <div className="parent">
        <Navbar />
        <div className="container"></div>
        <Mycartcontainer DataReceivefromMycart={DataReceivefromMycart} />
        <div className="heart hidden">
          <CartDropdown />
        </div>

        <div className="cart hidden">
          <CartDropdown />
        </div>
      </div>
    </Fragment>
  );
};

export default ParentContainer;
