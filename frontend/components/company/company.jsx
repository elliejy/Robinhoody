import React from 'react';
// import NavContainer from '../nav/nav_container';
import Chart from '../chart/chart';
import GreetingContainer from '../greeting/greeting_container';
import {Link} from 'react-router-dom';
import WatchlistContainer from '../watchlist/watchlist_container';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

class Company extends React.Component {
    constructor(props){
        super(props)
        this.ticker= this.props.ticker
        
        // if ( this.props.loggedIn ) {
        //     this.props.fetchWatchlists()
        // }
    }

    componentDidMount() {
        const ticker = this.props.match.params.ticker;
        if ( !this.props.company || this.props.ticker !== ticker ) {
                this.props.fetchStockInfo( ticker )
                this.props.fetchStock( ticker )
                this.props.fetch1mStock(ticker)
        }
    }
    componentDidUpdate(prevProps){
        const ticker = this.props.match.params.ticker;
        if ( prevProps.ticker!==this.props.ticker){
  
            this.props.fetchStockInfo( this.props.match.params.ticker)
            this.props.fetchStock( this.props.match.params.ticker);
            this.props.fetch1mStock( this.props.match.params.ticker )

        }
    }

    render(){
        if ( !this.props.company || !this.props.company.info || !this.props.company.stock || !this.props.company.stocks || !this.props.ticker) {

            return <div>Loading...</div>
        }
       
        const close = Object.values( this.props.company.stocks ).map( stock => ( stock.close ) )
        let min = -Infinity
        let max = Infinity
        if ( close.length >= 1 ) {
            min = close.reduce( ( acc, el ) => ( Math.min( acc, el ) ) )
            max = close.reduce( ( acc, el ) => ( Math.max( acc, el ) ) )

            Object.values( this.props.company.stocks ).forEach( stock => { stock.datetime = stock.date + ' ' + ( stock.minute || '' ) } )
        }
        return (
            <>
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
                

               <div className='company-container'>
                    <h2 id="company-name">{ this.props.company.info.companyName }</h2> 
                    <h5 id="price">${ this.props.company.stock.latestPrice }</h5> 
                    <h5 id="pchange">{ this.props.company.stock.changePercent.toFixed( 2) }%</h5> 

                        <LineChart width={ 1030 } height={ 250 } data={ Object.values( this.props.company.stocks ) }
                            margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>

                            <XAxis dataKey="dateTime" hide={ true } />
                            <YAxis dateKey="close" hide={ true } domain={ [min, max] } />
                            <Tooltip />

                            <Line type="monotone" dataKey="close" dot={ false } stroke='#21ce99' yAxisId={ 0 } />
                        </LineChart>

                    <div className="chart-range">
             
                            <button onClick={()=> this.props.fetch1dStock(this.props.ticker)} value="1D">1D</button>
                            <button onClick={()=> this.props.fetch1wStock(this.props.ticker)} value="1W">1W</button>
                            <button onClick={()=> this.props.fetch1mStock(this.props.ticker)} value="1M">1M</button>
                            <button onClick={()=> this.props.fetch3mStock(this.props.ticker)} value="3M">3M</button>
                            <button onClick={()=> this.props.fetch1yStock(this.props.ticker)} value="1Y">1Y</button>
                            <button onClick={()=> this.props.fetch5yStock(this.props.ticker)} value="5Y">5Y</button>
      
                    </div>
                <div className="about">
                    <h2 id="about">About</h2>
                    <p id="description">{ this.props.company.info.description }</p>
                        <table>
                            <tbody>
                            <tr>
                                <td>CEO</td>
                                <td>Employees</td>
                                <td>Headquarters</td>
                                <td>Founded</td>
                            </tr>
                            <tr>
                                <td>{ this.props.company.info.CEO }</td>
                                    <td>{ this.props.company.info.employees} </td>
                                <td>Headquarters</td>
                                <td>Founded</td>
                            </tr>
                            </tbody>
                        </table>
                </div>

                <div className="add">
                    {/* <h5>Buy { this.props.ticker}</h5>
                    <p>Unavailable</p>
                    <p id="appr">You can start trading once your account is approved</p> */}
                    <div id="addwatch">
                        <WatchlistContainer ticker={this.ticker}/>
                    </div>
                </div>
              </div>
            </div>
            </>
        )
        
    }
}

export default Company;
