import React from 'react';
import Chart from '../chart/chart';
import {asArray} from '../../reducers/selector';


class WatchlistItems extends React.Component{
  
    componentDidUpdate(prevProps) {

        if ( this.props.watchlists.length !== prevProps.watchlists.length ) {
            this.props.fetchBatchStocks(
                this.props.watchlists.map(watchlist=>watchlist.ticker)
                )
        }

    }

    render()  {
        
        if(!this.props.watchlists.length){
            return ( 
                <div>Loading...</div>
            )
        }
        return (
            <ul className="home-watchlist-items">
               { this.props.multiStocks.map( stock => {
                return (
                <li className="home-watchlist-items" key={ stock.quote.symbol  }>
                    { stock.quote.symbol}
                    <Chart chart={stock.chart} className="home-chart" />
                    { stock.quote.close }
                </li>
                )}
            )}
            </ul> )
        }
}


export default WatchlistItems