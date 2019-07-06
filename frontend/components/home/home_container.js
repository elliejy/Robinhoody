import React from "react";
import {connect} from "react-redux";
import { logout } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps ={
    currentUser: state.entities.users[state.session.currentUserId],
    loggedIn: Boolean( state.session.currentUserId )

}

const mapDispatchToProps ={
    logout: () => dispatch( logout() )
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);