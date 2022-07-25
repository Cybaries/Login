import React from 'react';
import './style/login.scss';
import users from './users.json';
// import Home from './Home';

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
    if (users.users.find(user => user.email === email && user.password === password)) {
      localStorage.setItem("username", email);
      localStorage.setItem("password", password);
      localStorage.setItem("checkbox", isChecked);
      // const root = document.getElementById("root");
      // root.render(<Home />);
    }
    else if (users.users.find(user => user.email === email && user.password !== password)) {
      const msg = document.querySelector('.msg');
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');
      email.style.border = '1px solid red';
      password.style.border = '1px solid red';
      msg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Email and password do not match';
      msg.style.visibility = "visible";
    }
    else{
      const msg = document.querySelector('.msg');
      const email = document.querySelector('#email');
      email.style.border = '1px solid red';
      msg.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>Please enter a valid email';
      msg.style.visibility = "visible";
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
            <input id='email' type="email" placeholder='Email' name='email' value={email} onChange={this.onChangeValue} />
            <input id='password' type="password" placeholder='Password' name='password' value={password} onChange={this.onChangeValue} />
            <div className="msg"></div>
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
