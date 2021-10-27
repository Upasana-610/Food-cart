import React, { Fragment, useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import "./myclass.css";
const MyCart = ({ data, DataReceive }) => {
  //   console.log(data);
  let [dropdownArray, setdropdownArray] = useState([]);

  const addToDropdown = (Array) => {
    setdropdownArray([...dropdownArray, Array]);
  };
  DataReceive(dropdownArray);
  return (
    <Fragment>
      {data.map((item, idx) => {
        if (item.visibility === true) {
          return (
            <div className="card" key={idx}>
              <img src={item.strCategoryThumb} />
              <div className="text">
                <h3>{item.strCategory}</h3>
                <p>{item.strCategoryDescription}</p>
                <h3>{item.price}</h3>
                <p>
                  <span
                    onClick={() => {
                      addToDropdown({
                        ["item"]: item.strCategory,
                        ["price"]: item.price,
                      });
                    }}
                  >
                    <AiFillHeart />
                  </span>
                  <span>
                    <AiOutlineShoppingCart />
                  </span>
                </p>
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
};

export default MyCart;
