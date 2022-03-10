import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";

function HelloItems({ item,id,color }) {
  const random = Math.floor(Math.random() * 50)
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
          backgroundColor:colors[random],
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
