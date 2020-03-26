import React, { useState } from "react";
import "./Auth.css"
import Login from "./Login";
import Register from "./Register";


const Auth = () => {
const [newUser, setNewUser] = useState(true);

  return newUser ? <Register setNewUser={setNewUser} /> : <Login setNewUser={setNewUser}/>;
}

export default Auth;