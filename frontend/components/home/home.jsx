import React from 'react';

class Home extends React.Component {
    componentDidMount(){

    }
   
    render(){
        return( 
        <div className="home-container">
            <div className="home-free">
                <h1>Invest Commision-Free</h1>
                <p>Invest in stocks, ETs, options and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
            </div>
            <div className="two-phones">
                <img src={ window.images.splash } alt="Splash" />
            </div>
            
        </div>
        )
    }
   
}

export default Home;