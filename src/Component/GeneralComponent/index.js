import React from 'react'
import Button from 'react-bootstrap/Button';


const Index = (props) => {
  return (
    <div style={{padding: "20px"}}>

      <div>
        <h1 className='h1_style'>{props.heading}</h1>
        <p  className='p_style'>{props.paragraph}</p>
      </div>
        <div style={{textAlign: "Center", padding: "10px"}}>
        <Button variant="success">Enroll</Button>{' '}
        <Button variant="success">Register</Button>{' '}

        </div>

        

    </div>
  )
}

export default Index

