import React, { useState, Fragment } from "react";
import "./navbar.css";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({setdata12,setdata21}) => {
  let [toggle,settoggle]=useState(false);

  let [toggle1,settoggle1]=useState(false);
  const handletoggle = () =>{
    settoggle(!toggle)
    if(toggle1===true){
      settoggle1(false);

    }
  }
  const handletoggle1 = () =>{
    settoggle1(!toggle1)
    if(toggle===true){
      settoggle(false);
      
    }

  }
  setdata12(toggle)
  setdata21(toggle1)
  return (
    <Fragment>
      <nav>
        <div className="logo">
          <h1>FOOD APP</h1>
        </div>
        <ul>
          <li onClick={handletoggle}>
            <AiFillHeart />
          </li>
          <li onClick={handletoggle1}>
            <AiOutlineShoppingCart />
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
