import React, { useState } from "react";
import "./payment.css";
import { FaRupeeSign } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Payment = ({ value1 }) => {
  let [sum, setSum] = useState(0);
  let [couponcode, setCouponcode] = useState([
    {
      ["coupon"]: "sourav",
      ["discount"]: 10,
    },
    {
      ["coupon"]: "arpan",
      ["discount"]: 20,
    },
    {
      ["coupon"]: "upasana",
      ["discount"]: 30,
    },
  ]);

  let [togglecoupon, settogglecoupon] = useState(false);

  let [onchangeinput, setonchangeinput] = useState("");

  let [discount, setDiscount] = useState(0);

  value1.forEach((element) => {
    sum += Number(element.price.substring(2));
    console.log(sum);
  });

  const onchangeCoupon = (e) => {
    setonchangeinput(e.target.value);
  };
  const showpaid = () =>{
    notify("ORDER PLACED")
  }
  const notify=(text)=>{
    toast(`🦄${text} `, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const toggleCoupon = (e) => {
    e.preventDefault();
    let coupon = onchangeinput;
    couponcode.forEach((item) => {
      if (item.coupon.trim() === coupon.trim()) {
        setDiscount(item.discount);
      }
    });
    setonchangeinput("");
    settogglecoupon(!togglecoupon);
  };

  // setSum(sum)

  return (
    <div className="payment">
    <ToastContainer/>
      <h3>
        <span>
          <FaRupeeSign />
        </span>{" "}
        Payment Summary
      </h3>
      <div className="paymentdetails">
        <ul>
          <li>Total Price</li>
          <li>
            Coupon Discount{" "}
            <form>
              <span>
                <input
                  type="text"
                  placeholder="coupon"
                  value={onchangeinput}
                  className={togglecoupon ? "" : "hidden"}
                  onChange={onchangeCoupon}
                />
              </span>
              <span>
                <button className="couponButton" onClick={toggleCoupon}>
                  {togglecoupon ? "Submit" : "Apply Coupon"}
                </button>
              </span>
            </form>
          </li>

          <li className="total">Total Amount Payble</li>
        </ul>
        <ul>
          <li>₹ {sum}</li>
          <li className="coupon">₹ -{discount || 0}</li>

          <li className="total">₹ {sum - discount}</li>
        </ul>
      </div>
      <div>
        <button onClick={
          showpaid
        }>Procced to Pay</button>
      </div>
    </div>
  );
};

export default Payment;
