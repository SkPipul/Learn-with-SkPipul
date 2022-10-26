import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({course}) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <button>
                <Link to={`/courses/${course.id}`}>detail</Link>
            </button>
        </div>
    );
};

export default CourseDetail;