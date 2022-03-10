import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";

function HelloItems({ item, id }) {
  const random = Math.floor(Math.random() * 10);
  const colors = [ 
    
    "#6680B3",
    "#66994D",
    "#4DB3FF",
    "#00E680",
    "#4D8066",
    "#809980",
    "#999933",
  
    "#4D80CC",
    "#E64D66",
    "#4DB380",
   
  ];
  const a =
    item.social[0] == "h" && item.social[1] == "t"
      ? item.social
      : "http://" + item.social;

  function deleteHi(id) {
    localStorage.clear();
    const docRef = doc(db, "sayhello", id);
    deleteDoc(docRef)
      .then(() => (window.location = "/"))
      .catch((error) => console.log(error.message));
  }
  return (
    <>
      <div
        style={{
          
          width: "300px",
          margin: "10px",
          padding:"0px",
          boxShadow: "2px 3px #888888",
          border: "2px solid",
        }}
        className="card border-dark mb-3 carddd"
      ><a style={{textDecoration:"none", color:"black"}} href={a} target="_blank" rel="noopener noreferrer">
        <div style={{ fontSize: "22px", backgroundColor: colors[random], }} className="card-header">
          {item.name.length>23 ? `${item.name.slice(0,23)}...` : item.name}
        </div></a>
        <div className="card-body">
        <a style={{textDecoration:"none", color:"black"}} href={a} target="_blank" rel="noopener noreferrer">
          <div
            style={{
              display: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            <span>👋 Said Hi!</span>
          </div></a>

          {JSON.parse(localStorage.getItem("hello")) === id && (
            <div>
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <div></div>
                <div>
                  <button
                    onClick={() => deleteHi(id)}
                    className="btn btn-black"
                  >
                    ✖
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HelloItems;
