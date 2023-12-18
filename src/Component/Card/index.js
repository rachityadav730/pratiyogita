import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import upsc from '../../Images/upsc.jpg'
import ssc from '../../Images/ssc_card.jpg'
import delhi_police from '../../Images/Police.jpg'
const Index = () => {
  return (
    <div className='global_container'>
        <div>
            <h1 className='h1_style'>Courses</h1>
        </div>
        <div className="d-flex justify-content-around">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={upsc} />
                <hr/>
                <Card.Body>
                <Card.Title>UPSC</Card.Title>
                <Card.Text>
                At Pratiyogita, we believe in nurturing future leaders and shaping destinies. With a commitment to excellence, we stand as a beacon of guidance for aspirants preparing for the prestigious UPSC exams. Our coaching center is not just an institute; it's a platform where dreams meet dedication and perseverance.
                </Card.Text>
                <Button variant="success">View Courses</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{height: '286px'}} src={ssc} />
                <hr/>
                <Card.Body>
                <Card.Title>SSC</Card.Title>
                <Card.Text>
                Welcome to Pratiyogita, where we are dedicated to guiding and mentoring aspirants to excel in SSC exams. Our mission is to provide top-notch coaching, personalized attention, and comprehensive study materials to help you achieve your dream of a successful career in government services.
                </Card.Text>
                <Button variant="success">View Courses</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" style={{height: '286px'}}  src={delhi_police} />
                <hr/>
                <Card.Body>
                <Card.Title>Delhi police</Card.Title>
                <Card.Text>
                Welcome to Pratiyogita, where we are dedicated to helping you achieve success in the Delhi Police recruitment exams. Our coaching center is committed to providing expert guidance, comprehensive study materials, and personalized coaching to ensure that you are well-prepared for the challenges of the Delhi Police exams.
                </Card.Text>
                <Button variant="success">View Courses</Button>
                </Card.Body>
            </Card>
            </div>
    </div>
  )
}

export default Index