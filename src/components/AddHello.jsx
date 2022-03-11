import { useState,useEffect } from "react";
import { addDoc,serverTimestamp  } from "firebase/firestore";
import { onSnapshot, query,orderBy } from "firebase/firestore";
import { movieCollectionRef } from "../db/firebase-collection";
import db from "../db/Firebase";


function AddHello() {
  const [name, setname] = useState("");
  const [social, setsocial] = useState("");
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
          style={{margin:"3px"}}
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
          style={{margin:"3px",width:"230px"}}
            value={social}
            onChange={(e) => setsocial(e.target.value)}
            type="text"
            className="form-control"
            id="inputPassword2"
            placeholder="Link Your Social Media"
          />
        </div>

        {!JSON.parse(localStorage.getItem("hello")) ? <div className="col-auto">
          <button
          
            style={{ boxShadow: "5px 5px 5px rgba(1,0,0,0.5)",margin:"5px" }}
            type="submit"
            className="btn btn-primary"
          >
            Send Hello
          </button>
        </div>:<div className="col-auto">
          
          <label htmlFor="inputPassword2" className="visually-hidden">
            name
          </label>
          <button
          style={{ border: "solid 1px black",margin:"3px" }}
          className="btn btn-warning"
          type="button"
        >
          ▼ Nice to meet you <span className="badge bg-dark">{hello.length}</span>
        </button>
        </div>}
      </form>
    </div></div>
  );
}

export default AddHello;
