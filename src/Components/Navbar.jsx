import React ,{useState,Fragment} from 'react'
import "./navbar.css"
import { AiFillHeart,AiOutlineShoppingCart} from 'react-icons/ai';
import CartDropdown from './CartDropdown';


const Navbar = () => {
 
    let [toggleCart,setToggleCart]=useState(false);
    let [toggleHeart,setToggleHeart]=useState(false);

    const CartDrop=()=>{
        setToggleCart(!toggleCart);
        console.log("object")
    }
    const HeartDrop=()=>{
        setToggleHeart(!toggleHeart);
    }
    return (
        <Fragment>
            <nav>
            <div className="logo">
                <h1>FOOD APP</h1>
            </div>
            <ul>
                <li onClick={CartDrop}><AiFillHeart/></li>
                <li onClick={HeartDrop}><AiOutlineShoppingCart/></li>
            </ul>

        </nav>
        <div toggleCart={toggleCart} toggleHeart ={toggleHeart}><CartDropdown/></div>
        </Fragment>
        
    )
}

export default Navbar
