import WatchlistButton from './watchlist_button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createWatchlist, fetchWatchlists, removeWatchlist} from '../../actions/watchlist_actions';


const mapStateToProps = (state, ownProps) => {
  
    return {
        watchlists: state.entities.watchlists,
        ticker: ownProps.ticker,
        currentUserId: state.session.currentUserId,
        following: Boolean(state.entities.watchlists[ownProps.ticker.toLowerCase()]) 
    }
};

const mapDispatchToProps = dispatch => {
    return ({
    createWatchlist: (ticker) => dispatch( createWatchlist(ticker)),
    fetchWatchlists: () => dispatch( fetchWatchlists()),
    removeWatchlist: (id)=>dispatch(removeWatchlist(id))
    })
};


export default withRouter( connect( mapStateToProps, mapDispatchToProps )( WatchlistButton));
