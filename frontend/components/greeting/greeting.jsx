import React from 'react';
import { Link, Router } from 'react-router-dom';
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
    this.handleLogout = this.handleLogout.bind(this)
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
    this.props.logout().then( () => window.location.reload());
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
              <li><h4>
                {this.props.currentUser ? this.props.currentUser.username : "Hi!"}
                <br/>
                {/* <button>Add your bank account to trade</button>  */}
              </h4></li>
              <li><h6>
              <Link id="logout-link" to="https://support.robinhood.com/hc/en-us?help=&zdc=10">
                  <img src={ window.images.help } className="dropdown-img" /> 
                  Help
                </Link></h6></li>
              <li><h6>
              <Link id="logout-link" to="https://brokerage-static.s3.amazonaws.com/disclosures/WebDisclosures.pdf">
                  <img src={ window.images.disclose } className="dropdown-img" />
                  Disclosure
                </Link></h6></li>
            
              <li onClick={ this.handleLogout }><h6>
                <Link to="/" id="logout-link">
                  <img src={ window.images.logouticon } className="dropdown-img"/>
                Log out
                </Link></h6>
              </li> 
           
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
