import React,{useEffect} from 'react'
import { ImCross } from 'react-icons/im';

import { Fragment,useState } from 'react/cjs/react.development'
import "./paymentform.css"

const PaymentForm = ({toggleFormData}) => {
    let [toggleForm,settoggleForm]=useState(false)
    let [data,setdata]=useState({
    })
    let [data1,setdata1]=useState({
    })

    const toggleFormdata = ()  =>{
        settoggleForm(!toggleForm)
    }
    if(toggleForm===false){
        document.body.style.overflow="hidden"
    }else{
        document.body.style.overflowY="scroll"

    }
    const formchangedata =(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submitvalue = (e) =>{
        e.preventDefault();
        setdata1({...data})
        console.log(data1)
    }
    toggleFormData(toggleForm)
    return (
        <div className="blackcurtain">
        <form className="form1"
              onChange={formchangedata}
              onSubmit={submitvalue}>
        <span className="cross-sign"
              onClick={toggleFormdata}><ImCross/></span>

<div className="form-box">

    <input type="text" placeholder="ENTER YOUR NAME" name="Name" />

</div>
<div className="form-box">

    <input type="email" placeholder="ENTER YOUR EMAIL" name="Email"/>

</div>
    
   
    <button type="submit" onClick={toggleFormdata}>Login</button>

</form>
</div>

        
    )
}

export default PaymentForm
