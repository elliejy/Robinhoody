import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemoLogin(e){
    e.preventDefault();
    this.props.demoLogin( {username: 'user', password: 'testing'}).then(()=>this.props.history.push('/'))
  };

  handleSubmit(e) {
    e.preventDefault();

    // const user = Object.assign({}, this.state);
    this.props.processForm(this.state).then(()=>this.props.history.push('/'));
  };

  componentWillUnmount(){
    // this.props.receiveErrors();
  }
  renderErrors() {
    return (
      <ul>
        { this.props.errors.map( ( error) => (
          <li key={ error } className= "error">
            { error }
          </li>
        ) ) }
      </ul>
    );
  }

  render() {
    return (
      <>
        
        <div className="login-form-container">
          <img src={ window.images.loginpic } className="login-pic" />
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1 >Welcome to Robinhoody</h1>
            <br />
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label><h6>Username</h6>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br />
              <label><h6>Password</h6>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br />
              <h6>Already have an account?  { this.props.navLink } </h6>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
              <button className= "demo" onClick={this.handleDemoLogin}>Demo Login</button>
            </div>
          </form>
        </div>
       </>
    );
  }
}

export default withRouter(SessionForm);