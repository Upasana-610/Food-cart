import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Mycartcontainer from "./Mycartcontainer";
import CartDropdown from "./CartDropdown";
import "./parent.css";
import Navbar from "./Navbar";
import { Children } from "react";
const ParentContainer = () => {
  let [value, setvalue] = useState([]);
  const setvalue1 = (value1) => {
    setvalue(value1);
  };
  console.log(value);

  return (
    <Fragment>
      <div className="parent">
        <Navbar />
        <div className="container"></div>
        <Mycartcontainer setvalue1={setvalue1} />
        <div className="heart ">
          <CartDropdown value={value} />
        </div>

        <div className="cart hidden">
          <CartDropdown />
        </div>
      </div>
    </Fragment>
  );
};

export default ParentContainer;
