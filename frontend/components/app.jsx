import React from 'react';
import { Provider } from 'react-redux';
import {
  Switch,
  Link
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Robinhoody</h1>
      </Link>
    </header>
    <Switch>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
