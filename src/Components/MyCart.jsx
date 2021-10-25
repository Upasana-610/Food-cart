import React,{useEffect} from 'react'
import  "./myclass.css"
const MyCart = ({data}) => {
    return (
        <div>
            {data.map((item,idx)=>
                <div className="card" key={idx}>
                    <img src={item.strCategoryThumb}/>
                    <div className="text">
                        <h3>{item.strCategory}</h3>
                        <p>{item.strCategoryDescription}</p>
                        <h3>₹ 700</h3>



                </div>
            </div>

            )}
        </div>
    )
}

export default MyCart
