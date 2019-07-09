import React from 'react';
// import NavContainer from '../nav/nav_container';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts';
import GreetingContainer from '../greeting/greeting_container';
import {Link} from 'react-router-dom'

class Company extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loading: true
        }
        this.handleClick = this.handleClick.bind(this)
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
    //  && prevProps.company.info.symbol.toLowerCase() !== this.props.match.params.ticker

    handleLoading(){
        if ( !this.props.company || !this.props.company.info || !this.props.company.stock || !this.props.company.stocks ) {
            return <div>Loading...</div>
        // } else {
        //     this.setState({loading:false})
        }
    }
    handleClick(e){
        e.preventDefault();
        
    }
    render(){
        
        // if (this.state.loading === true){
        //     this.handleLoading()
        // }
        if ( !this.props.company || !this.props.company.info || !this.props.company.stock || !this.props.company.stocks ) {
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
                    <h5 id="pcahnge">{ this.props.company.stock.changePercent }%</h5> 


                <LineChart width={ 1030 } height={ 250 } data={ Object.values(this.props.company.stocks) }
                    margin={ { top: 5, right: 30, left: 20, bottom: 5 } }>
            
                    <XAxis dataKey="dateTime" hide={ true } />
                    <YAxis dateKey="close" hide={true} domain={[min, max]}/>
                    <Tooltip />

                    <Line type="monotone" dataKey="close" dot={ false } stroke='#21ce99' yAxisId={ 0 } />
                </LineChart>

                <div className="about">
                    <h2 id="about">About</h2>
                    <p id="description">{ this.props.company.info.description }</p>
                            <h5>{ this.props.company.info.CEO }</h5>

                </div>

                <div className="add">
                    {/* <h5>Buy { this.props.ticker}</h5>
                    <p>Unavailable</p>
                    <p id="appr">You can start trading once your account is approved</p> */}
                    <div id="addwatch">
                        <button onClick={this.handleClick}><p id="addp">Add to Watchlist</p></button>
                    </div>
                </div>
              </div>
            </div>
            </>
        )
        
    }
}

export default Company;
