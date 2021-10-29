import React,{Fragment,useState} from 'react'
import CartDropdown from './CartDropdown'
import Mycartcontainer from './Mycartcontainer'
import Navbar from './Navbar'
const Container = () => {
    let [toggle,settoggle]=useState(false)
    let [toggle1,settoggle1]=useState(false)

    const handlewishlist1 = (x) =>{
        settoggle(x)
    }
    const handlecart1 = (y) =>{
        settoggle1(y)
    }

    return (
        <Fragment>
      <div className="container">
      <Navbar handlewishlist1={handlewishlist1} handlecart1={handlecart1}/>

    <Mycartcontainer />
    </div>
    <span className="cart">
        <span className="one"><CartDropdown toggle={toggle}/></span>
        <span className="two"><CartDropdown toggle1={toggle1}/></span>
    </span>
        </Fragment>
    )
}

export default Container
