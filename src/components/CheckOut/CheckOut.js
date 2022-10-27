import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='container bg-light text-center my-5 border border-0 shadow rounded py-5'>
            <h3 className='fw-bold'><span className='fs-2 text-warning'>Congratulation!!</span> <span className='text-success'>{user.displayName}</span> <br /> You are successfully access the course..</h3>
            <p>Your email is : {user.email}</p>
            <img className='w-25' src={user.photoURL} alt="" />
        </div>
    );
};

export default CheckOut;