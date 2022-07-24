import './style/signup.scss';

function signup() {
    
    return (
        <>
            <div className="login">
                <div className="form">
                    <input type="text" placeholder='Name' name='name' />
                    <input type="email" placeholder='Email' name='email' />
                    <input type="password" placeholder='Password' name='password'/>
                    <button type="submit" value="Signup" >Sign up</button>
                </div>
            </div>
        </>
    )
}

export default signup