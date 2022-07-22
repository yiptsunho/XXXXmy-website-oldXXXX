import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
        <div className="App-header">
            <div className="container-fluid text-left px-5">
                <div className="row justify-content-start">
                    <h2 className="col-sm-auto bg-dark border">
                        Welcome to my portfolio
                    </h2>
                </div>
                <div className="row justify-content-start">
                    <h1 className="col-6 display-1 text-start">
                        <strong>Hi! I'm Jacky, a web developer</strong>
                    </h1>
                </div>
                <div className="row justify-content-start">
                    <h5 className="col-6">
                        I enjoy building websites and apps. You can find my resume, projects and contact information here. ENJOY! 
                    </h5>
                </div>
                <br></br>
                <div className="row justify-content-start">
                    <Link to="/Contact" className="nav-link">
                        Let's Connect <i className="fa-solid fa-circle-arrow-right fa-beat" />
                    </Link>
                </div>
            </div>
        </div>
    </>
    /*
    <div className="row justify-content-center">
        <div className="col-10 btn-group btn-group-lg">
            <button className="btn btn-outline-light btn-lg" type="button">Resume</button>
            <button className="btn btn-outline-light btn-lg" type="button">Projects</button>
            <button className="btn btn-outline-light btn-lg" type="button">Contact</button>
        </div>
    </div>
    */
  )
}

export default HeroSection
