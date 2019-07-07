import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


class Greeting extends React.Component { 
  constructor(props){
    super(props)
    this.logout = this.props.logout
    this.state = {
      loggedIn: Boolean( this.props.loggedIn)
    }
    this.sessionLinks = this.sessionLinks.bind(this)
    this.accountDropDown = this.accountDropDown.bind(this)
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

  accountDropDown() {
    return(
        <ul id="menu" className="dropdown">
          <li>
            <h3 className="account-drop">Account</h3>
            <ul className="dropdown-content">
              <li><h3>Link 1</h3></li>
              <li><h3>Link 2</h3></li>
              <li onClick={ this.handleLogout }><h3>Log out</h3></li> 
            </ul>
          </li>
        </ul>
    )
  };
  
   render() { 
      if ( !this.state.loggedIn){
        return this.sessionLinks();
      }
      else{
        return this.accountDropDown();
      }
   }

};


export default Greeting;
