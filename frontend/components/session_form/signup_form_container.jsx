import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType = "Sign Up";
  return {
    errors: state.errors,
    formType,
    navLink: <Link to="/login">Log in here.</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
