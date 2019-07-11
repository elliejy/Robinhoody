import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
    // this.handleLogout = this.handleLogout.bind(this)
    // this.handleDropDown = this.handleDropDown.bind(this)

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
            <ul className="dropdown-content">
              <li><h4>{this.props.currentUser ? this.props.currentUser.username : "Aloha~*"}</h4></li>
              <li><h6><img src={window.images.help} className="dropdown-img"/> Help</h6></li>
              <li><h6><img src={ window.images.disclose } className="dropdown-img" />Disclosure</h6></li>
              <li onClick={ this.handleLogout }><h6><img src={ window.images.logouticon } className="dropdown-img"/>Log out</h6></li> 
            </ul>
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
