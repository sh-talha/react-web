import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <>
          <header id="header" className="fixed-top" style={{background:'#000'}}>
    <div className="container-fluid">

      <div className="row justify-content-center">
        <div className="col-xl-9 d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="index.html">KnightOne</a></h1>
         
          <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
          </nav>

          <Link to="/About" className="get-started-btn scrollto">Get Started</Link>
        </div>
      </div>

    </div>
  </header>
        </>
    )
}
export default Header;