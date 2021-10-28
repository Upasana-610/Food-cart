import React, { useState } from "react";
import "./payment.css";
import { FaRupeeSign } from "react-icons/fa";

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
        <button>Procced to Pay</button>
      </div>
    </div>
  );
};

export default Payment;
