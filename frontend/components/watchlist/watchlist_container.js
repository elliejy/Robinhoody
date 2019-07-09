import Watchlist from './watchlist';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createWatchlist, fetchWatchlists, removeWatchlist} from '../../actions/watchlist_actions';


const mapStateToProps = (state, ownProps) => {

    return {
        watchlists: state.watchlists,
        ticker: ownProps.ticker,
        currentUserId: state.session.currentUserId}
};

const mapDispatchToProps = dispatch => {
    return ({
    createWatchlist: ( currentUserId, ticker ) => dispatch( createWatchlist(currentUserId, ticker)),
    fetchWatchlists: ( currentUserId) => dispatch( fetchWatchlists( currentUserId)),
//  removeWatchlist: (ticke)=>dispatch(removeWatchlist(ticker))
    })
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watchlist));
