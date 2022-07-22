import React from 'react';
import logo from "../assets/images/img-logo.svg";
import { Link } from 'react-router-dom';
import '../App.css';
import './Navbar.css';
import { hover } from '@testing-library/user-event/dist/hover';

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand ms-5 mb-0 text-white">
                Jacky
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white px-3 my-2">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Resume" className="nav-link text-white px-3 my-2">
                            Resume
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Projects" className="nav-link text-white px-3 my-2">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link text-white px-3">
                            <button className="btn btn-outline-light" style={{fontWeight: "bold", borderRadius: "0.2rem"}}>Contact</button>
                        </Link>
                    </li>               
                </ul>
                <form className="container-fluid justify-content-start fa-2x">
                    <a href="https://www.facebook.com/jacky.yip.908" target="_blank"><i className="fa-brands fa-facebook px-3"/></a>
                    <a href="https://www.linkedin.com/in/jacky-yip-81953318b" target="_blank"><i className="fa-brands fa-linkedin px-3" /></a>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
