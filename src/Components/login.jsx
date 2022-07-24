import React from 'react';
import './style/login.scss';

class RememberMe extends React.Component {
  static displayName = "RememberMe";

  state = {
    email: "",
    password: "",
    isChecked: false
  };

  componentDidMount() {
    if (localStorage.checkbox && localStorage.email !== "") {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password
      });
    }
  }

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onChangeCheckbox = (event) => {
    this.setState({
      isChecked: event.target.checked
    });
  };

  loginSubmit = () => {
    const { email, password, isChecked } = this.state;
    if (isChecked && email !== "") {
      localStorage.username = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
  };

  render() {
    const { email, password, isChecked } = this.state;
    return (
      <>
        <div className="login">
          <div className="info">
            <div className="continue">To Continue</div>
            <div className="name-email">We need your Name & Email</div>
          </div>
          <div className="form">
            <input type="email" placeholder='Email' name='email' value={email} onChange={this.onChangeValue} />
            <input type="password" placeholder='Password' name='password' value={password} onChange={ this.onChangeValue } />
            <button type="submit" value="Login" onClick={this.loginSubmit}>Log In</button>
            <div className="remember-me">
              <input type="checkbox" checked={isChecked}
                  name="lsRememberMe"
                  onChange={this.onChangeCheckbox} id="remember" />
              <span>Remember Me</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RememberMe;
