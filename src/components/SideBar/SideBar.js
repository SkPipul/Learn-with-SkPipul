import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://learn-with-skpipul-server.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='position-sticky top-0'>
            <h3 className='text-center my-3 fw-bolder text-primary'>Course list</h3>
            {
                courses.map(course => <p key={course.id}>
                    <ListGroup>
                        <ListGroup.Item><Link className='text-decoration-none' to={`/courses/${course.id}`}>{course.name}</Link></ListGroup.Item>
                    </ListGroup>
                </p>)
            }
        </div>
    );
};

export default SideBar;