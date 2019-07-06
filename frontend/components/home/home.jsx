import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.loggedIn = this.props.loggedIn;
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout;
    }

    render() {
        if ( this.loggedIn) {
          return (this.loggedInPath())
        }else {
          return (this.loggedOutPath())
        }
    }

    loggedInPath(){
        return(<>
            <body className="loggedin-body">
            <header className="header">
                <Link to="/" className="header-link">
                    <img src={ window.images.logowhite } className="logowhite" />
                    <div className="search-bar-black">
                        <img src={ window.images.magwhite } className="magwhite" />
                        <input type="search" placeholder="Search" className="search-input-black" />
                    </div>
                    <GreetingContainer />
                </Link>
            </header>
        
            </body>
            
        </>)
    }
    loggedOutPath(){
        return ( <>
            <header className="header">
                <Link to="/" className="header-link">
                    <img src={ window.images.logo } className="logo" /><h4>robinhoody</h4>
                    <div className="search-bar">
                        <img src={ window.images.maggrey } className="mag" />
                        <input type="search" placeholder="Search" className="search-input" />
                    </div>
                    <GreetingContainer />
                </Link>
            </header>

            <div className="home-container">
                <div className="home-free">
                    <h1 className="home-h1">Invest Commision-Free</h1>
                    <p>Invest in stocks, ETs, options and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
                    <Link to="/signup" className="below-free">Sign up</Link>
                    <h3>Commisions Disclosure</h3>
                </div>
                <div className="two-phones">
                    <img src={ window.images.splash } alt="Splash" />
                </div>

            </div>
        </>)
    }


}

export default Home;