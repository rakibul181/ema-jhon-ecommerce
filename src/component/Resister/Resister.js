import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Resister.css'


const Login = () => {
    const{createUser} = useContext(AuthContext)
    const[error,setError] = useState()
    const handelSubmitNewUser = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confrimPassword = form.confrim.value
        if(password !== confrimPassword){
           setError('You Password Did Not Match') 
           return
        }
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error=>console.error(error))
        
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>
                Login
            </h2>
            <form  onSubmit={handelSubmitNewUser}>
                <div className="form-control">
                    <label htmlFor="email"> Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password"> Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="conform-password">Confrim Password</label>
                    <input type="password" name='confrim' required />
                </div>
                <div className="form-control">
                    <input  className='form-submit-btn' type="submit" value="Submit"/>
                </div>
                <p > Already Have an Account<Link to="../login"> Log in</Link></p>
                <p className='error-text'>{error}</p>
            </form>
        </div>
    );
};

export default Login;