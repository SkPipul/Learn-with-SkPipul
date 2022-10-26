import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseDetail = ({ course }) => {
    return (
        <div>
            <CardGroup>
                <Card className='my-4 shadow'>
                    <Card.Img variant="top" src={course.img} />
                    <Card.Body className='d-flex justify-content-around align-items-center'>
                        <Card.Title><h3>{course.name}</h3></Card.Title>
                        <button className='btn btn-primary'>
                            <Link className='text-decoration-none text-white' to={`/courses/${course.id}`}>Details</Link>
                        </button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default CourseDetail;