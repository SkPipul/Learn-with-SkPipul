// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { ListGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const SideBar = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/course-categories')
//             .then(res => res.json())
//             .then(data => setCategories(data))
//     }, [])

//     return (
//         <div>
//             <h2>this is side effect {categories.length}</h2>
//             {
//                 categories.map(category => <p key={category.id}>
//                     <ListGroup>
//                         <ListGroup.Item><Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link></ListGroup.Item>
//                     </ListGroup>
//                 </p>)
//             }
//         </div>
//     );
// };

// export default SideBar;