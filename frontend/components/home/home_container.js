import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = ({entities, session})=> ({
    loggedIn: Boolean( session.currentUserId ),
    currentUser: session.currentUserId
})

const mapDispatchToProps =(dispatch)=>({
    logout: () => dispatch( logout() ),
    // fetchUserInfo: user => dispatch( fetchUserInfo( user ) ),
    // fetchUserPortfolio: user => dispatch( fetchUserWatchlist( user ) )
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);