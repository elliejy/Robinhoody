import { connect } from 'react-redux';
import Company from './company';
import { logout } from '../../actions/session_actions';
import {
    fetchStock,
    fetchStockInfo,
    fetch1mStock,
    fetch5yStock,
    fetch1dStock,
    fetch3mStock,
    fetch1yStock,
    fetch1wStock
    
} from '../../actions/company_actions';
import { fetchWatchlists} from '../../actions/watchlist_actions';

const mapStateToProps = ( state, ownProps ) => {
    const ticker = ownProps.match.params.ticker
    debugger
    return {
        company: state.entities.companies[ticker],

        ticker: ownProps.match.params.ticker,
        loggedIn: Boolean( state.session.currentUserId ),
        
    };
};

const mapDispatchToProps = dispatch => {
    return{
    fetchWatchlists: () => dispatch( fetchWatchlists() ),
    fetchStock: ticker => dispatch( fetchStock( ticker ) ),
    fetch1mStock: ticker => dispatch ( fetch1mStock(ticker)),
    fetch1dStock: ticker => dispatch( fetch1dStock(ticker)),
    fetch1wStock: ticker => dispatch( fetch1wStock(ticker)),
    fetch3mStock: ticker => dispatch( fetch3mStock(ticker)),
    fetch1yStock: ticker => dispatch( fetch1yStock(ticker)),
    fetch5yStock: ticker => dispatch( fetch5yStock(ticker)),
    fetchStockInfo: ticker => dispatch( fetchStockInfo( ticker ) ),
    logout: () => dispatch(logout())}
} ;

export default connect( mapStateToProps, mapDispatchToProps )( Company );
