import React from "react";
import firebase from "../firebase";

export default function Signup() {

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
    confPassword: ""
  });

  const register = (e) => {
    e.preventDefault();

    if(!payload.email || !payload.password || !payload.confPassword){
      alert("Please fill all the fields");
    } else if (payload.password !== payload.confPassword){
      alert("Password not match");
    }else {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then((userCredential) => {
        alert("Sign up successful");
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

      <h1>Create new account</h1>

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
      /><br />

      <p>Confirm Password : </p>
      <input 
        type="password"
        name="confPassword"
        onChange={handleChange}
        value={payload.confPassword}
      /><br /><br />

      <button 
        style={{
          width:180,
          height: 30,
          marginBottom: 10
        }}
        onClick={register}>Register</button><br />

      

      
    </div>
  );
}
