import React from "react";

//link
import { Link } from "react-router-dom";

import firebase from "../firebase";

export default function Login() {

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });


  const login = (e) => {
    e.preventDefault();
    if( !payload.email || !payload.password ){
      alert("Please fill all the fields");
    } else {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        alert("Signed in");
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
    }
  };

  const handleChange  = (event) =>{
    const {name, value} = event.target;
    setPayload({ ...payload, [name]: value });
  }

  return (
    <div style={{textAlign: "center", paddingTop: 150}}>

      <h1>Authentication with firebase</h1>

      <p>Email : </p>
      <input 
        type="text"
        name="email"
        onChange={handleChange}
        value={payload.email}
      />

      <p>Password : </p>
      <input 
        type="password"
        name="password"
        onChange={handleChange}
        value={payload.password}
      /><br /><br />

      <button 
        style={{
          width:180,
          height: 30,
          marginBottom: 10
        }}
        onClick={login}>Login</button><br />

      <Link to="/signup">  
        <button   
          style={{
            width:180,
            height: 30
          }}> Sign up </button> 
      </Link>

      
    </div>
  );
}
