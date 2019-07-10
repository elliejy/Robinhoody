import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';
import { fetchWatchlists } from '../../actions/watchlist_actions';
import { fetchBatchStocks} from '../../actions/company_actions';

const mapStateToProps = ({entities, session})=> ({
    loggedIn: Boolean( session.currentUserId ),
    currentUser: session.currentUserId, 
})

const mapDispatchToProps =(dispatch)=>({
    logout: () => dispatch( logout() ),
    fetchWatchlists: () => dispatch( fetchWatchlists(  ) ),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);