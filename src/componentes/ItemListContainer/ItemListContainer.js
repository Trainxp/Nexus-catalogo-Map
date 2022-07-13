import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { celulares } from "../../mock/celulares";
import  ItemList  from "./ItemList";


const ItemListContainer = ({greeting}) => {
    const [items,setItems]= useState([]);
     useEffect(() => {
        const traerCelulares = new Promise ((res,rej)=>{
            setTimeout(() => {
                res(celulares)
            }, 2000 );
        });
        traerCelulares.then((data)=>{
            setItems(data);
        }).catch((error)=>{
            console.log(error)})

     },[]);


    return <div >
        <>
        <h1>{greeting}</h1>
        <div><ItemCount  stock = {15} initial= {1}   /></div>
        <ItemList itemsCelulares ={items} />
        </>
    </div>
}

export default ItemListContainer;
