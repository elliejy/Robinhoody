import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Link,
  Route,
  Redirect
} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util'

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />  
      <Route exact path='/' component={ HomeContainer } />
      <Redirect to='/' />
    </Switch>
  </div>
);

export default App;
