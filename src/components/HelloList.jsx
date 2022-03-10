import { onSnapshot, deleteDoc, doc, query,orderBy } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";
import HelloItems from "./HelloItems";




function HelloList() {
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
    <div className="input">
      <div style={{justifyContent:"center" }} className="row">
     
        {hello.map((item)=> <HelloItems key={item.id} item={item.data}/>)}
   
         </div>
      </div>

  );
}

export default HelloList;
