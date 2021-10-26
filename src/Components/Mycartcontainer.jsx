import React,{useEffect,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./mycartcontainer.css"
import MyCart from './MyCart'
import ViewMore from './ViewMore';
const Mycartcontainer = () => {
    let [data,setdata]=useState([]);
    // let [array,setArray]=useState([])
    useEffect(() => {

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        
        const fetchData = async() => {
        
        try {
        const response = await fetch(url); 
        const json = await response.json();
        console.log(json);
        let {categories}=json;
        console.log( categories)

        
        let array=[];
        categories=categories.map((item,idx)=>{
            return item={...item,["price"]:` ₹ ${parseInt(Math.random()*1000+200)}`,["saveForLater"]:false,["addToCart"]:false,["visibility"]:idx<=3?true:false,["id"]:uuidv4(),["strCategoryDescription"]:item.strCategoryDescription.substr(0,100)}
        

        
        })
        setdata(categories)
        } catch (error) {
        
        console.log("error", error);
        
        }
        
        };
        
        fetchData();
        
        }, []);

    return (
        <div className="mycartcontainer">
            <MyCart data={data}/>
            <ViewMore data={data}  setdata={setdata}/>
        </div>
    )
}

export default Mycartcontainer
