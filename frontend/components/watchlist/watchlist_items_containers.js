import WatchlistItems from './watchlist_items';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWatchlists} from '../../actions/watchlist_actions';
import { fetch1mStock, fetchStock, fetchBatchStocks} from '../../actions/company_actions';
import {asArray} from '../../reducers/selector';


const mapStateToProps = ( props ) => {

    return {
        watchlists: asArray(props.entities.watchlists),
        currentUserId: props.session.currentUserId,
        multiStocks: props.entities.companies
    }
};

const mapDispatchToProps = dispatch => {
    return ( {
        fetchWatchlists: () => dispatch( fetchWatchlists() ),
        fetchStock: ( ticker ) => dispatch( fetchStock( ticker )),
        fetch1mStock: ( ticker ) => dispatch( fetch1mStock(ticker)),
        fetchBatchStocks: (tickers ) => dispatch( fetchBatchStocks( tickers))
    } )
};


export default withRouter( connect( mapStateToProps, mapDispatchToProps )( WatchlistItems ) );
