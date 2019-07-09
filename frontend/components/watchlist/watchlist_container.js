import Watchlist from './watchlist';
import {connect} from 'react-router-dom';
import {createWatchlist, fetchWatchlists, removeWatchlist} from '../../actions/watchlist_actions';


const mapStateToProps = (state, ownProps) => ({
    watchlists: Object.values(state.watchlists),
    ticker: ownProps.match.params.ticker,
    currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
 createWatchlist: dispatch(createWatchlist(ticker)),
 fetchWatchlists: dispatch(fetchWatchlists(user)),
 removeWatchlist: dispatch(removeWatchlist(user, ticker))
});


export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
