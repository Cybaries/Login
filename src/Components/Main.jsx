import './style/main.scss';
import bg from './images/bg.png';
import RememberMe from './login';
import Signup from './signup';
import { useState } from 'react';

function Main() {
  let [ isLogin, setIsLogin ] = useState(true);
  let [ isSignup, setIsSignup ] = useState(false);
  const slider = document.querySelector('.slider');
  const toggleLogin = () => { 
    setIsLogin(true);
    setIsSignup(false);
    slider.style.transform = 'translateX(0)';
  }
  const toggleSignup = () => { 
    setIsLogin(false);
    setIsSignup(true);
    slider.style.transform = 'translateX(4.5rem)';
  }
  return (
    <div className="container">
      <div className="bgImage">
        <img src={bg} alt="bgimage" />
      </div>
      <div className="form-box">
        <div className="head">
          <button className="login" onClick={toggleLogin}>Log In</button>
          <button className="signup" onClick={toggleSignup}>Sign Up</button>
          <div className="slider"></div>
        </div>
        <div className="border"></div>
        {isLogin && <RememberMe />}
        {isSignup && <Signup />}
      </div>
    </div>
  )
}
export default Main