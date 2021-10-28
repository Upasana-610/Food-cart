import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

import "./myclass.css";
const MyCart = ({ data, setvalue1, setvalue11 }) => {
  //   console.log(data);
  let [dropdownArray, setdropdownArray] = useState([]);
  let [dropdownArray1, setdropdownArray1] = useState([]);

  const addToDropdown = (Array) => {
    setdropdownArray([...dropdownArray, Array]);
  };

  const addToDropdown1 = (Array) => {
    setdropdownArray1([...dropdownArray1, Array]);
  };
  // console.log(setvalue11);
  setvalue11(dropdownArray1);

  setvalue1(dropdownArray);
  // console.log(dropdownArray);
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
                        ["id"]: uuidv4(),
                      });
                    }}
                  >
                    <AiFillHeart />
                  </span>
                  <span
                    onClick={() => {
                      addToDropdown1({
                        ["item"]: item.strCategory,
                        ["price"]: item.price,
                        ["id"]: uuidv4(),
                      });
                    }}
                  >
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
