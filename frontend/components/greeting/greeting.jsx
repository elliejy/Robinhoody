import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


class Greeting extends React.Component { 
  constructor(props){
    super(props)
    this.logout = this.props.logout
    this.currentUser = this.props.currentUser
    this.state = {
      loggedIn: Boolean( this.props.loggedIn)
    }
    this.sessionLinks = this.sessionLinks.bind(this)
    this.logoutLink = this.logoutLink.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  

  sessionLinks(){
    return(
    <nav className="login-signup">
      <Link to="/login" className="login-button">Log In</Link>
      <Link to="/signup" className="signup-button">Sign up</Link>
    </nav>
    )
  };
 
  handleLogout( e ) {
    e.preventDefault();
    this.logout().then( () => this.setState( { loggedIn: false } ) )
  };

  logoutLink() {
    return(
        <button className="logout-button" onClick={ this.handleLogout }><h6>Log Out</h6></button>

    )
  };
  
   render() { 
      if ( !this.state.loggedIn){
        return this.sessionLinks();
      }
      else{
        return this.logoutLink();
      }
   }

};


export default Greeting;
