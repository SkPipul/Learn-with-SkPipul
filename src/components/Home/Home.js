import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/image1.avif';
import image2 from '../../assets/image2.avif';
import image3 from '../../assets/image3.avif';

const Home = () => {
    return (
        <div>
            <h1 className='text-danger my-2 mx-5'>
                Study is important for us. We able to know and gain our skills buy reading and practicing every types of things.
            </h1>
            <Carousel className='container img-fluid w-75 my-5' slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We need to take note everything</h3>
                        <p>If we are take notes we can revised it when we need any part</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Practice makes a man perfect</h3>
                        <p>After learning or watching class we have to practice everything for growing our skills day by day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Reading books is good habit</h3>
                        <p>
                            By reading book we able to know some out knowledge which is effective for us.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;