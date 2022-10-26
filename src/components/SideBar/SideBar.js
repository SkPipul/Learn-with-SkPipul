import React, { useState } from 'react';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <h2>this is side effect {courses.length}</h2>
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