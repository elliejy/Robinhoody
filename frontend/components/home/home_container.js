import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';
import { fetchWatchlists} from '../../actions/watchlist_actions';

const mapStateToProps = ({entities, session})=> ({
    loggedIn: Boolean( session.currentUserId ),
    currentUser: session.currentUserId, 
    // company: entities.companies[action.ticker]

})

const mapDispatchToProps =(dispatch)=>({
    logout: () => dispatch( logout() ),
    fetchWatchlists: user => dispatch( fetchWatchlists( user ) ),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);