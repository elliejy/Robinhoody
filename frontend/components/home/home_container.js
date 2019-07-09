import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';
import {fetchStock} from '../../actions/company_actions'

const mapStateToProps = ({entities, session})=> ({
    loggedIn: Boolean( session.currentUserId ),
    currentUser: session.currentUserId, 
    // company: entities.companies[action.ticker]

})

const mapDispatchToProps =(dispatch)=>({
    logout: () => dispatch( logout() ),
    fetchStock: ticker => dispatch( fetchStock( ticker ) ),
    // fetchUserInfo: user => dispatch( fetchUserInfo( user ) ),
    // fetchUserPortfolio: user => dispatch( fetchUserWatchlist( user ) )
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);