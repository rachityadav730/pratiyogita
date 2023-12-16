import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../Images/logo.png'
import fisrt_image from '../../Images/first_image.jpg'
import ssc from '../../Images/ssc2.jpg'
import Police from '../../Images/Police.jpg'
const Index = () => {
  return (
    <div> 
             <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fisrt_image}
          alt="First slide"
          height='600px'
        />
        <Carousel.Caption>
          <h5>UPSC</h5>
          <p>Test will be come.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Police}
          alt="Second slide"
          height='600px'
        />
        <Carousel.Caption>
          <h5>Police</h5>
          <p>Test will be come.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ssc}
          alt="Third slide"
          height='600px'
        />
        <Carousel.Caption>
          <h5>Ssc</h5>
          <p>
          Test will be come.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}

export default Index