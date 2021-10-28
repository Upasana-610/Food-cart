import React from 'react'
import { Fragment,useState } from 'react/cjs/react.development'
import "./paymentform.css"


const PaymentForm = ({toggleFormData}) => {
    let [toggleForm,settoggleForm]=useState(false)
    const displayForm = ()=>{
     settoggleForm(!toggleForm)  
    }
    toggleFormData(toggleForm)
    return (
   

<form className="form1 ">
<div className="form-box">

    <input type="text" placeholder="ENTER YOUR NAME" />

</div>
<div className="form-box">

    <input type="email" placeholder="ENTER YOUR EMAIL" />

</div>
    
   
    <button onClick={displayForm}>Pay</button>
    <button>Cancel</button>

</form>
  
        
        
    )
}

export default PaymentForm
