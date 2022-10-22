import React from 'react';
import { Link } from 'react-router-dom';
 

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>
                Login
            </h2>
            <form >
                <div className="form-control">
                    <label htmlFor="email"> Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="conform-password">Conform Password</label>
                    <input type="password" name='conform-password' required />
                </div>
                <div className="form-control">
                     <input className='form-submit-btn' type="submit" value="Submit" />
                </div>
                <p > Already Have an Account<Link to="../login"> Log in</Link></p>
            </form>
        </div>
    );
};

export default Login;