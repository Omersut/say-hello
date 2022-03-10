import { onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import { useState, useEffect } from "react";
import db from "../db/Firebase";

function HelloItems({ item, id }) {
  const random = Math.floor(Math.random() * 28);
  const colors = [
    "#FFB399",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#999966",
    "#99FF99",

    "#E6B3B3",
    "#6680B3",
    "#CCFF1A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#CC9999",

    "#00E680",
    "#4D8066",
    "#809980",

    "#999933",

    "#66E64D",
    "#4D80CC",
    "#E64D66",
    "#4DB380",
    "#99E6E6",
    "#6666FF",
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
          backgroundColor: colors[random],
          width: "300px",
          margin: "10px",
          boxShadow: "2px 3px #888888",
          border: "2px solid",
        }}
        className="card border-dark mb-3 carddd"
      ><a style={{textDecoration:"none", color:"black"}} href={a} target="_blank" rel="noopener noreferrer">
        <div style={{ fontSize: "22px" }} className="card-header">
          {item.name}
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
