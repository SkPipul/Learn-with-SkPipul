import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData().details;

    console.log(detail);
    return (
        <div className='container'>
            <img className='w-100 mt-5 mb-2' src={detail.img} alt="" />
            <p>{detail.description}</p>
        </div>
    );
};

export default Details;