import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {

  const sessionLinks = () => {
    return(
    <nav className="login-signup">
      <Link to="/login" className="login-button">Log In</Link>
  
      <Link to="/signup" className="signup-button">Sign up</Link>
    </nav>
    )
  };
  const personalGreeting = () => {

    return (
    <hgroup>
      <h2>Hi!</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </hgroup>
    )
  };

  if (currentUser===null){
    return sessionLinks();
  }else{
    return personalGreeting();
  }
  
};


export default Greeting;
