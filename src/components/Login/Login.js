import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
import { Toast } from 'bootstrap';

const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
            Toast.success("Log in successfully",{
                position:"top-center"
            })
        })
        .catch( error => {
            console.error(error);
        })
    }

    const handleGoogle = () => {
        googleSignIn(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch( error => console.error(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='w-50 mx-auto my-5 border-0 p-5 rounded shadow'>
                <h3>Login</h3>
                <div className="my-3">
                    <label className='mb-2'>Email address</label>
                    <input
                        name='email'
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    required />
                </div>
                <div className="mb-3">
                    <label className='mb-2'>Password</label>
                    <input
                        name='password'
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    required />
                </div>
                <div className="mb-3">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        required />
                        <label className="custom-control-label mx-2" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary mb-2 px-5">
                        Login
                    </button>
                </div>
                <div className='my-3'>
                    <FcGoogle onClick={handleGoogle} className='fs-2 me-4 google-icon'></FcGoogle>
                    <FaGithub className='fs-2 github-icon'></FaGithub>
                </div>
                <p className="text-right">
                   New User? <Link to='/register'>Please Register</Link>
                </p>
            </div>
            <ToastContainer />
        </form>
    );
};

export default Login;