import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Home extends React.Component {
    render(){
        return( 
            <>
            <header className="header">
                <Link to="/" className="header-link">
                    <img src={ window.images.logo } className="logo" />
                    <GreetingContainer />
                </Link>
            </header>
        
            <div className="home-container">
                <div className="home-free">
                    <h1>Invest Commision-Free</h1>
                    <p>Invest in stocks, ETs, options and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
                        <Link to="/signup" className="below-free">Sign up</Link>
                    <h3>Commisions Disclosure</h3>
                </div>
                <div className="two-phones">
                    <img src={ window.images.splash } alt="Splash" />
                </div>
                
            </div>
        </>
        )
    }
   
}

export default Home;