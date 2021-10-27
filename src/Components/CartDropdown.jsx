import React from "react";
import { FaTrash } from "react-icons/fa";
import { Fragment } from "react/cjs/react.production.min";
import "./cartdropdown.css";
const CartDropdown = ({ value }) => {
  return (
    <div className="dropdownParent">
      <div class="triangle-up"></div>
      <ul className={`cartdropdown }`}>
        {(value || []).map((item, idx) => (
          <li>
            <span>{item.item}</span>
            <span>{item.price}</span>
            <span>
              <FaTrash />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDropdown;
