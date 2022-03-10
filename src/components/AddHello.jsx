import { useState,useEffect } from "react";

import { addDoc, collection,serverTimestamp  } from "firebase/firestore";
import db from "../db/Firebase";
import { movieCollectionRef } from "../db/firebase-collection";

function AddHello() {
  const [name, setname] = useState("");
  const [social, setsocial] = useState("");



  

  

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" && social ==="") {
      return;
    }
    //const moviesCollRef = collection(db, "movies");
    addDoc(movieCollectionRef, { name: name, social: social,   timestamp: serverTimestamp(),})
      .then((response) => {
        localStorage.setItem("hello",JSON.stringify(response.id))
        setname("")
        setsocial("")
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
 
  return (
    <div className="container">
    <div className="input">
      <form onSubmit={handleSubmit} className="row input">
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            name
          </label>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="name"
          />
        </div>

        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            social
          </label>
          <input
            value={social}
            onChange={(e) => setsocial(e.target.value)}
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Link Your Social Media"
          />
        </div>

        {!JSON.parse(localStorage.getItem("hello")) && <div className="col-auto">
          <button
          
            style={{ boxShadow: "5px 5px 5px rgba(1,0,0,0.5)" }}
            type="submit"
            className="btn btn-primary"
          >
            Send Hello
          </button>
        </div>}
      </form>
    </div></div>
  );
}

export default AddHello;
