import React from 'react'


const Index = () => {
  return (
    <div style={{backgroundColor: "black"}}>
    <footer className="footer mt-auto py-3" >
    <div className="container">
      <div className="row">
        <div className="col-md-3 white_color">
          <h5 className = 'h5_style '>Address</h5>
          <ul className="list-unstyled">
            <p>
            2 ,East End Enclave , Radhu Palace Road, Near Nirman Vihar Metro Station, Delhi-110092.
            </p>
          </ul>
        </div>
        <div className="col-md-3 white_color">
          <h5 className = 'h5_style'>Overview</h5>
          <ul className="list-unstyled">
            <li><a href="#">Faculty</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </div>
        <div className="col-md-3 white_color">
          <h5 className = 'h5_style'>Contact Us</h5>
          <ul className="list-unstyled">
            <li>B-7, Sector-65, Noida, Uttar Pradesh-201301</li>
            <li>9958884192</li>
            <li> support@shikshakul.com</li>

          </ul>
        </div>
        <div className="col-md-3 white_color" >
          <h5 className = 'h5_style'>Follow Us On</h5>
          <ul className="list-unstyled">
            <li>InstaGram</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </div>
    <p className='p_style white_color' >
    © Copyright Shikshakul.com 2023. All rights are reserved. .
    </p>
  </footer>


    </div>
  )
}

export default Index