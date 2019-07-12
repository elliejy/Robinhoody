import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';
import { fetchWatchlists } from '../../actions/watchlist_actions';
import { fetchBatchStocks} from '../../actions/company_actions';

const mapStateToProps = (state, ownProps)=> {
    return ({
    loggedIn: Boolean( state.session.currentUserId ),
    currentUser: state.session.currentUserId, 
    watchlists: state.entities.watchlists,
    location: ownProps.location.pathname})
}

const mapDispatchToProps =(dispatch)=>({
    logout: () => dispatch( logout() ),
    fetchWatchlists: () => dispatch( fetchWatchlists(  ) ),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);