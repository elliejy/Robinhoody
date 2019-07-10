import WatchlistButton from './watchlist_button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createWatchlist, fetchWatchlists, removeWatchlist} from '../../actions/watchlist_actions';
import {asArray} from '../../reducers/selector';

const mapStateToProps = (state, ownProps) => {

    return {
        watchlists: state.watchlists,
        ticker: ownProps.ticker,
        currentUserId: state.session.currentUserId
    }
};

const mapDispatchToProps = dispatch => {
    return ({
    createWatchlist: ( ticker ) => dispatch( createWatchlist(ticker)),
    fetchWatchlists: ( ) => dispatch( fetchWatchlists()),
    removeWatchlist: (ticker)=>dispatch(removeWatchlist(ticker))
    })
};


export default withRouter( connect( mapStateToProps, mapDispatchToProps )( WatchlistButton));
