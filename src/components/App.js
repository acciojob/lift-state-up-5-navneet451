
import React from "react";
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const handleLogin= () => {
    setIsLoggedIn(true);
  }
  return (
    <div>
        <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  )
}

export default App
