import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsPlusLg } from "react-icons/bs";

const FAQ = () => {
    return (
        <div className='container w-75 my-5 bg-success rounded p-5'>
            <ListGroup>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  এই কোর্স কাদের জন্য?</h5></ListGroup.Item>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  এই কোর্স শুরুর পুর্বে আমার কি কি অভিজ্ঞতা নিয়ে রাখা ভালো?</h5></ListGroup.Item>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  কোর্সের মধ্যে কি কি আছে?</h5></ListGroup.Item>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  কোর্সের ভিডিও গুলো কিভাবে পাবো?</h5></ListGroup.Item>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  এই কোর্সের এন্ট্রি ফি কতো?</h5></ListGroup.Item>
                <ListGroup.Item className='mb-3'><h5><BsPlusLg></BsPlusLg>  এই কোর্স শেষ হতে কতদিন সময় লাগবে?</h5></ListGroup.Item>
                
            </ListGroup>
        </div>
    );
};

export default FAQ;