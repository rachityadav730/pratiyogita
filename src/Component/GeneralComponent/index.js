import React from 'react'
import Button from 'react-bootstrap/Button';


const Index = (props) => {
  return (
    <div style={{padding: "20px"}}>

      <div>
        {
          props.heading_req == true ?  <h1 className='h1_style'>{props.heading}</h1>  : ""
        }
        <div style={{width: "100%"}}>
          <span style={{width: "20%"}}>
          <h4 style={{width: "20%"}}>{props.heading3} </h4>
          </span>
          <span style={{width: "60%"}}>
          <p style={{width: "60%"}}>{props.paragraph}</p>
          </span>
        </div>
      </div>
        <div style={{textAlign: "Center", padding: "10px"}}>
        {
          props.button_req == true ? 
          <>
            <Button variant="success">Enroll</Button>
              <Button variant="success">Register</Button>
            </>
          
          : ""
        }
        </div>
    </div>
  )
}

export default Index

