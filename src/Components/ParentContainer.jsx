import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Mycartcontainer from "./Mycartcontainer";
import CartDropdown from "./CartDropdown";
import "./parent.css";
import Navbar from "./Navbar";
import PaymentForm from "./PaymentForm";
const ParentContainer = () => {
  let [value, setvalue] = useState([]);
  let [value1, setvalue2] = useState([]);
  let [data, setdata] = useState([]);
  let [data1, setdata1] = useState([]);
  let [toggleForm,settoggleForm]=useState(false)
  const setvalue1 = (value1) => {
    console.log("object");
    setvalue(value1);
    console.log(value);
  };
  const toggleFormData=(item)=>{
    settoggleForm(item)
  }
  const setvalue11 = (value11) => {
    setvalue2(value11);
  };
  const setdata12 = (d) => {
    setdata(d);
  };
  const setdata21 = (d) => {
    setdata1(d);
  };

  return (
    <Fragment>
      <div className="parent">
        <Navbar setdata12={setdata12} setdata21={setdata21} />
        <div className="container"></div>
        <Mycartcontainer
          setvalue1={setvalue1}
          setvalue11={setvalue11}
          value1={value1}
        />
        <div className={`heart ${data ? "" : "hidden"}`}>
          <CartDropdown value={value} setvalue1={setvalue1} />
        </div>

        <div className={`cart ${data1 ? "" : "hidden"}`}>
          <CartDropdown value1={value1} />
        </div>
        <div className={`form ${toggleForm?"":"hidden"}`}>
        <PaymentForm toggleFormData={toggleFormData}/>
        </div>
      </div>
      
    </Fragment>
  );
};

export default ParentContainer;
