import React from 'react'
import './Service_section3.css'
import { Link } from 'react-router-dom'

const Service_section3 = () => {
  return (
    <>
      <div className="Serivce_s3_mainContainer">
        <div className="Serivce_s3_mainContainer_textDiv">
          <p className="Serivce_s3_mainContainer_text">
            Any plan to start a project
          </p>
          <h3 className="Serivce_s3_mainContainer_headtext">
            Our Experts always ready to work with you.
          </h3>
          <div className="Serivce_s3_mainContainer_button">
            <Link to="/RegisterUser">GET STARTED</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service_section3