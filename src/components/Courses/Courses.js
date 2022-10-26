import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from '../CourseDetail/CourseDetail';
import SideBar from '../SideBar/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block'>
                        <SideBar></SideBar>
                    </Col>
                    <Col lg="8">
                        <div>
                            <h1 className='text-center mt-4 text-secondary fw-bold'>All Courses</h1>
                            {
                                courses.map(course => <CourseDetail key={course.id} course={course}></CourseDetail>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;