import WatchlistItems from './watchlist_items';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchWatchlists} from '../../actions/watchlist_actions';
import { fetch1mStock, fetchStock, fetchBatchStocks} from '../../actions/company_actions';
import {asArray} from '../../reducers/selector';


const mapStateToProps = ( state ) => {

    return {
        watchlists: asArray(state.entities.watchlists),
        currentUserId: state.session.currentUserId,
        multiStocks: asArray(state.entities.companies)
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


export default connect( mapStateToProps, mapDispatchToProps )( WatchlistItems );
