import React,{Fragment, useEffect} from 'react'
import  "./myclass.css"
const MyCart = ({data}) => {
    console.log(data);
    return (
        <Fragment>
            {  
             data.map((item,idx)=>{
              if(item.visibility===true){
               return <div className="card" key={idx}>
                    <img src={item.strCategoryThumb}/>
                    <div className="text">
                        <h3>{item.strCategory}</h3>
                        <p>{item.strCategoryDescription}</p>
                        <h3>{item.price}</h3>



                    </div>
                </div>
              }
             }
            )}
        </Fragment>
            
        
    )
}

export default MyCart
