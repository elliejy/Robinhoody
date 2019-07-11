import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'


class Greeting extends React.Component { 
  constructor(props){
    super(props)
    this.logout = this.props.logout
    this.state = {
      loggedIn: Boolean( this.props.loggedIn),
      open: false,
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

  handleDropDown() {
    this.setState(state => {
      return { open: !state.open}
    });
  }
  accountDropDown() {

    return(
        <div className="dropdown">
    
          <button onClick= {()=>this.handleDropDown()} className="account-button">Account</button>
           {this.state.open && (
           <div className="dropdown-content">
            <ul >
              <li><h4>{this.props.currentUser ? this.props.currentUser.username : "Aloha~*"}</h4></li>
              <li><h4>Help</h4></li>
              <li><h4>Disclosure</h4></li>
              <li id= "li-logout"onClick={ this.handleLogout }><h4>Log out</h4></li> 
            </ul>
           </div>
           )}
        </div>
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
