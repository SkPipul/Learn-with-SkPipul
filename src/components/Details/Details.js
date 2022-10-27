import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FiDownload } from 'react-icons/fi';
import Pdf from "react-to-pdf";
import '../Courses/Courses.css'

const ref = React.createRef();

const Details = () => {
    const detail = useLoaderData().details;

    console.log(detail);
    return (
        <div className='container  mt-3 mb-5' ref={ref}>
            <h3 className='text-center mb-2 fw-bold text-success'>{detail.name}</h3>

            <Pdf targetRef={ref} filename="Course_detail.pdf">
                {({ toPdf }) => <span onClick={toPdf} className=' d-flex justify-content-around'>
                    <FiDownload className='download fs-2 fw-bold text-danger mb-4'></FiDownload>
                </span>}
            </Pdf>

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