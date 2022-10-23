import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css'

const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handelSignIn = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(form);
        console.log(email);

        userLogin(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            form.reset()
            navigate( from, {replace:true})
        })
        .catch(error=> console.error(error))
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>
                Login
            </h2>
            <form onSubmit={handelSignIn} >
            <div className="form-control">
                    <label htmlFor="email"> Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name='password' required />
                </div>

                <div className="form-control">
                    <input className='form-submit-btn' type="submit" value="Submit" />
                </div>
                <p > New to Ema jhon<Link to="../resister"> Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;