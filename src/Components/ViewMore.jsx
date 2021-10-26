import React,{useState} from 'react'
import './viewmore.css'
import { MdKeyboardArrowDown } from 'react-icons/md';

const ViewMore = ({data,setdata}) => {
    let [noOfview,setnoOfview]=useState(3);
    const showThreeMore=()=>{
        data=data.map((item,idx)=>{
            if(idx>noOfview && idx<(noOfview+3) ){
                item={...item,["visibility"]:true}
                console.log(item)
                
                return item; 
            }
            console.log("aaaa")
            return item;
           
        })
        setnoOfview(noOfview+3);
        setdata(data);
        console.log(data);


    }
    return (
        <div className="viewMore">
            <button onClick={showThreeMore}>View More <span><MdKeyboardArrowDown/> </span></button>
        </div>
    )
}

export default ViewMore
