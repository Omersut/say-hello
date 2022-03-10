import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";

function HelloItems({ item,id,color }) {
  const a =
    item.social[0] == "h" && item.social[1] == "t"
      ? item.social
      : "http://" + item.social;

  function deleteMovie(id) {
    localStorage.clear()
    const docRef = doc(db, "sayhello", id);
    deleteDoc(docRef)
      .then(() => console.log("document deleted"))
      .catch((error) => console.log(error.message));
      
    
  }
  return (
    <>
      <div
        style={{
          backgroundColor:color,
          width: "300px",
          margin: "10px",
          boxShadow: "2px 3px #888888",
          border: "2px solid",
        }}
        className="card border-dark mb-3 carddd"
      >
        <div style={{ fontSize: "21px" }} className="card-header">
          {item.name}
        </div>
        <div className="card-body">
          <div
            style={{
              display: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <span>👋 Said Hi!</span>
          </div>

           {JSON.parse(localStorage.getItem("hello")) === id &&  
           <div><hr></hr>
           <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "0px 15px",
            }}
          >
            <div>
              
            </div>
            <div>
              <button
                onClick={() => deleteMovie(id)}
                className="btn btn-black"
              >
                <a style={{textDecoration:"none", color: "black"}} href="/">✖</a>
              </button>
            </div>
          </div></div>}
         
        </div>
      </div>
      
    </>
  );
}

export default HelloItems;
