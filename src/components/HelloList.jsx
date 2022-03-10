import { onSnapshot, deleteDoc, doc, query,orderBy } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";
import HelloItems from "./HelloItems";




function HelloList() {
  const random = Math.floor(Math.random() * 10)
  const colors =['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
  const [hello, sethello] = useState([]);

  useEffect(() => {
    const q = query(movieCollectionRef,orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot( q ,(snapshot) => {
      sethello(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []); 
  console.log(hello)
  return (
  
    <div className="container">
      <div style={{justifyContent:"center" }} className="row">
     
        {hello.map((item)=> <HelloItems color={colors[random]} key={item.id} item={item.data} id={item.id}/>)}
   
         </div>
      </div>

  );
}

export default HelloList;
