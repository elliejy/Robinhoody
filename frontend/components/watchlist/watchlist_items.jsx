import React from 'react';
import Chart from '../chart/chart';
import {asArray} from '../../reducers/selector';
import {Link} from 'react-router-dom';

class WatchlistItems extends React.Component{
  
    componentDidUpdate(prevProps) {

        if ( this.props.watchlists.length !== prevProps.watchlists.length ) {
            this.props.fetchBatchStocks(
                this.props.watchlists.map(watchlist=>watchlist.ticker)
                )
        }

    }

    render()  {
        
        if(!this.props.watchlists.length ||!this.props.multiStocks){
            return ( 
                <div>Loading...</div>
            )
        }
        return (
            <>
               { this.props.multiStocks.map( stock => {
                return (
                    <li className="company-li" key={stock.quote.symbol}>
                        <Link to={`/companies/${stock.quote.symbol}`} id="watchlist-link">
                            <div id="watch-item"> { stock.quote.symbol }</div>
                            <div><Chart chart={ stock.chart } percentChange= {stock.quote.changePercent} className="watchlist-chart" /></div>
                            <div id="watch-item">${ stock.quote.close.toFixed(2) }</div>
                        </Link>
                  
                    </li> 
                    )
                }
            
            )}
            </>
        )
        }
}


export default WatchlistItems