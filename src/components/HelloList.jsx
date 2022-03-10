import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";
import HelloItems from "./HelloItems";




function HelloList() {
  const [hello, sethello] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(movieCollectionRef, (snapshot) => {
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
     
        {hello.map((item)=> <HelloItems item={item.data}/>)}
   
         </div>
      </div>

  );
}

export default HelloList;
