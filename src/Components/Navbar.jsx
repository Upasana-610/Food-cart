import React from 'react'
import "./navbar.css"
import { AiFillHeart,AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>FOOD APP</h1>
            </div>
            <ul>
                <li><AiFillHeart/></li>
                <li><AiOutlineShoppingCart/></li>
            </ul>

        </nav>
    )
}

export default Navbar
