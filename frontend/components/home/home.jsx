import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import WatchlistItemsContainer from '../watchlist/watchlist_items_containers';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout;   
        
        this.state = {
            loggedIn: Boolean( this.props.loggedIn),
            currentUser: this.currentUser,
        }
        // if ( this.state.loggedIn ) {
        //     this.props.fetchWatchlists() 
        // }
    }

    componentDidMount() {
        this.props.fetchWatchlists();
    }

    componentDidUpdate(prevProps) {
        // if(prevProps.location !== this.props.location){
        //     this.props.fetchWatchlists();
        // }
    }

    render() {
        if ( this.currentUser) {
          return (this.loggedInPath())
        }else {
          return (this.loggedOutPath())
        }
    }

    loggedInPath(){

        if(!this.props.watchlists){
            return(<div>Loading...</div>)
        }

        return(<>
           <div className="loggedin">
            <header className="header">
                <Link to="/" className="header-link">
                    <img src={ window.images.logowhite } className="logowhite" />
                    <div className="search-black">
                        <img src={ window.images.magwhite } className="magwhite" />
                        <input type="search" placeholder="Search" className="search-input-black" />
                    </div>
                    <GreetingContainer />
                </Link>
            </header>
            <div className="loggedin-body">
                <h1 className="loggedin-h1">Welcome to Robinhoody</h1>
                <img className="default-chart" src={window.images.defchart} alt="Default Chart"/>
                <div className="review">
                    <h6 id="app-review">Application Under Review</h6>
                    <h6>You'll have a free stock soon. Get started by searching for your favorite companies</h6>
                </div>
                <div className="company-watchlist">
                    <ul className="watchlist-ul">
                        <li id="watchlist-header">Watchlist</li>
                        <WatchlistItemsContainer  />
                     </ul>
                </div>
            
            </div>
            </div>
        </>)
    }
    loggedOutPath(){

        return ( <>
            <header className="header">
                <Link to="/" className="header-link">
                    <img src={ window.images.logo } className="logo" /><h4>robinhoody</h4>
                    <div className="default-searchbar">
                        <img src={ window.images.maggrey } className="mag" />
                        <input type="search" placeholder="Search" className="search-input" />
                    </div>
                    <GreetingContainer />
                </Link>
            </header>

            <div className="home-container">
                <div className="home-free">
                    <h1 className="home-h1">Invest Commision-Free</h1>
                    <p className="home-p">Invest in stocks, ETs, options and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
                    <Link to="/signup" className="below-free">Sign up</Link>
                    
                </div>
                <div className="two-phones">
                    <img src={ window.images.splash } alt="Splash" />
                </div>

            </div>
        </>)
    }


}

export default Home;