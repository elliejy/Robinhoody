import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType= 'Sign In'
  return {
    errors: state.errors,
    formType,
    navLink: <Link to="/signup" id="sessionlink">Don't have an account?  Sign up here.</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: user => dispatch(login(user)),
    receiveErrors: errors => dispatch( receiveErrors( errors ) )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
