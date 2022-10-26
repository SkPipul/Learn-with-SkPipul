import React from 'react';

const Register = () => {
    return (
        <form>
            <div className='w-50 mx-auto my-5 border-0 p-5 rounded shadow'>
                <h3>Please Register</h3>
                <div className="my-3">
                    <label className='mb-2'>Enter your full name</label>
                    <input
                        type="name"
                        className="form-control"
                        placeholder="Enter name"
                    required />
                </div>
                <div className="my-3">
                    <label className='mb-2'>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    required />
                </div>
                <div className="mb-3">
                    <label className='mb-2'>Password</label>
                    <input
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
                        Register
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Forgot <a href="">password?</a>
                </p>
            </div>
        </form>
    );
};

export default Register;