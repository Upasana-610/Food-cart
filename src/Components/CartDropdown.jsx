import React from "react";
import { FaTrash } from "react-icons/fa";
import { Fragment } from "react/cjs/react.production.min";
import "./cartdropdown.css";
const CartDropdown = ({ toggleHeart, toggleCart }) => {
  return (
    <div className="dropdownParent">
      <div class="triangle-up"></div>
      <ul className={`cartdropdown }`}>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
        <li>
          <span>Beef</span>
          <span>$400</span>
          <span>
            <FaTrash />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CartDropdown;
