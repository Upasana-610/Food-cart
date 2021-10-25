import React,{useEffect,useState} from 'react'
import MyCart from './MyCart'
const Mycartcontainer = () => {
    let [data,setdata]=useState([]);
    useEffect(() => {

        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        
        const fetchData = async() => {
        
        try {
        const response = await fetch(url); 
        const json = await response.json();
        console.log(json);
        let {categories}=json;
        console.log(typeof categories)
        setdata(categories);
        } catch (error) {
        
        console.log("error", error);
        
        }
        
        };
        
        fetchData();
        
        }, []);

    return (
        <div>
            <MyCart data={data}/>
        </div>
    )
}

export default Mycartcontainer
