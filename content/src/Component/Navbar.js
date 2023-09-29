import { useEffect, useState } from 'react'
import React from 'react'
import {Link, useLocation} from 'react-router-dom'

export const Navbar = () => {
const [url, seturl] = useState("")
    const location = useLocation()
    
    useEffect(() => {
        console.log("This is a pathname",location.pathname)
        seturl(location.pathname)
      }, [location]);

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto navul">
                <li className="nav-item">
                  <Link className={`${url === "/" ? "nav-link active": "nav-link"}`} to="/" id="home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${url=== "/Hastags"? "nav-link active" : "nav-link"}`} to="/Hastags" id="hastags">
                    Hastags
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${url=== "/media"?"nav-link active" : "nav-link"}`} to="/media" id="media">
                    Media
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`${url === "/products" ? "nav-link active" : "nav-link"}`} to="/products" id="media">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/contact" id="contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/services" id="service">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/download" id="service">
                    Download
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/login" id="service">
                    Login
                  </Link>
                </li>
              </ul>
            
            </div>
          </div>
        </nav>

    </>
  )
}
