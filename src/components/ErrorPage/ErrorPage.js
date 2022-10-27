import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Card from 'react-bootstrap/Card';


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <div className='text-center d-flex align-items-center justify-content-center my-5'>
                <Card style={{ width: '28rem' }}>
                    <Card.Body className='bg-light shadow'>
                        <Card.Title><h2 className='text-center'>Ops! An Error Ocurred!</h2></Card.Title>
                        {error && (
                            <Card.Text>
                                <h3 className='text-danger'>{error.statusText || error.message}</h3> <br />
                                <h4>{error.status}</h4>
                            </Card.Text>
                        )}
                        <Link to='/'>Go Home</Link>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}

export default ErrorPage