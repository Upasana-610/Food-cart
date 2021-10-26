import React from 'react'
import { FaTrash} from "react-icons/fa";
import { Fragment } from 'react/cjs/react.production.min';
import "./cartdropdown.css" 
const CartDropdown = ({toggleHeart,toggleCart}) => {
    return (
       
          
            <ul className={`cartdropdown ${toggleHeart?"":"hidden"}`}>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            <li><span>Beef</span><span>$400</span><span><FaTrash/></span></li>
            

        </ul>
        
       
        
        
        
    )
}

export default CartDropdown
