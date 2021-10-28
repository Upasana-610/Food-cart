import React from "react";
import { FaTrash } from "react-icons/fa";
import { Fragment } from "react/cjs/react.production.min";
import "./cartdropdown.css";
const CartDropdown = ({ value, value1, setvalue1 }) => {
  const deleteFromDropdown = (id) => {
    // let val1 = [...value1].filter((item) => item.id !== id);
    let val = [...value].filter((item) => item.id !== id);
    setvalue1(val);
    console.log("aa");
    console.log(val);
  };
  // setvalue2(value1 || []);

  return (
    <div className="dropdownParent">
      <div class="triangle-up"></div>
      <ul className={`cartdropdown }`}>
        {(value || value1 || []).map((item, idx) => (
          <li key={idx}>
            <span>{item.item}</span>
            <span>{item.price}</span>
            <span
              onClick={() => {
                deleteFromDropdown(item.id);
              }}
            >
              <FaTrash />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDropdown;
