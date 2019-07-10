import React from 'react';
import Chart from '../chart/chart';
import {asArray} from '../../reducers/selector';


class WatchlistItems extends React.Component{
    constructor(props){
        super(props)
        this.watchlists= this.props.fetchWatchlists();
        this.tickers = this.getTickers();
        this.batchStocks = this.props.fetchBatchStocks( tickers )
    }
    // if(!props.watchlists) {
    //     debugger
    //      watchlists = Object.values(props.fetchWatchlists())
    // }else { watchlists = Object.values(props.watchlists)}

    getTickers(){
        let tickers = [];
        if(!this.watchlists){
            this.watchlists = this.props.fetchWatchlists()
        } else {
        this.watchlists.map( ( watchlist ) => {
        tickers.push( watchlist.ticker )
        return tickers
        })
    }
}

    componentDidUpdate(prevProps){

        if(this.props.watchlists.length!==prevProps.watchlists.length){
            
            const batchStocks = this.props.fetchBatchStocks( this.tickers )
            this.getAllTheInfo(batchStocks);
    }}

    getAllTheInfo(multistocks){
        arrStocks = asArray(multistocks);
        arrStocks.map(stock=>{
            return (
                <li className="home-watchlist-items" key={stock.quote[symbol]}>
                {stock.quote[symbol]} 
                <Chart props={ stock.chart } />
                {stock.quote[close]}</li>
            )
        })
        
    }
    render()  {

        const getwatchlists = this.getAllTheInfo( this.batchStocks)

        return (
            <ul className="home-watchlist-items">
                {getwatchlists}
            </ul> )
        }
    

}


export default WatchlistItems