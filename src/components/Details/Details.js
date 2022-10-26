import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Details = () => {
    const detail = useLoaderData().details;

    console.log(detail);
    return (
        <div className='container  mt-3 mb-2'>
            <h3 className='text-center mb-3 fw-bold text-success'>{detail.name}</h3>

            <Card className='w-75 mx-auto'>
                <Card.Img variant="top" src={detail.img} />
                <Card.Body>
                    <button className='btn btn-success mb-2'><Link className='text-decoration-none text-white' to='/checkout'>Get Premium Access</Link></button>
                    <Card.Text>
                        <p><small>{detail.description}</small></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Details;