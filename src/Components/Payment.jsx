import React, { useState } from 'react'
import "./payment.css"
import { FaRupeeSign } from 'react-icons/fa';

const Payment = ({value1}) => {
    let [sum,setSum]=useState(0);
    value1.forEach((element) => {
        sum +=Number(element.price.substring(2));
        console.log(sum)
    });
    // setSum(sum)

    return (
        <div className="payment">
        <h3><span><FaRupeeSign/></span> Payment Summary</h3>
        <div className="paymentdetails">
            <ul>
            <li>Total Price</li>
            <li>Product Discount</li>
            <li>Coupon Discount</li>
            <li>Order Total</li>
            <li className="total">Total Amount Payble</li>
                
            </ul>
            <ul>
            <li>$ 80</li>
            <li>- 10</li>
            <li>$10</li>
            <li>$6</li>
            <li className="total">{sum}</li>

            </ul>
        </div>
        <div>
                <button>Procced to Pay</button>
                <button>Add MOre Products</button>
            </div>

            
        </div>
    )
}

export default Payment
