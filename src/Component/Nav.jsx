import React, { useState } from 'react'
import "./style.css"
import { Link, useLocation } from 'react-router-dom'
function Nav() {
  // Get the current location object using the useLocation hook from react-router-dom
  const location = useLocation();
  const [isSolid, setIsSolid] = useState(false);
  const [filter, setFilter] = useState(false);

  const handleClick1 = () => {
    setIsSolid(!isSolid);
    // console.log(isSolid)
  };
  const handleClick2 = () => {
    setFilter(!filter);
    // console.log(isSolid)
  };




  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Udemy</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id='nav_dropdown'>
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                {/* <li><hr className="dropdown-divider"></hr></li> */}
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className='nav-item'>
              <form className="d-flex align-items-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-bar" />
                <button className="btn btn-outline-success" id='search-btn' type="submit">Search</button>
                <i className="fa-solid fa-magnifying-glass" typeof='submit' id='glass'></i>
                <i className={`${isSolid ? "fa-solid fa-heart-circle-check" : "fa-regular fa-heart"}  wishlist`} onClick={handleClick1}></i>
                <i className={`${filter ? "fa-regular fa-filter " : "fa-light fa-filter"} filterbox`} onClick={handleClick2}></i>
                {/* <i class="fa-regular fa-heart"></i> */}

              </form>

            </li>




          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end" id="navbar-end">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/Courses' ? 'active' : ''}`} to="/Courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" tabIndex="-1">about</Link>
            </li>
            <li>
              <form>
                <button type="button" className="btn btn-dark me-md-3" id='login_btn'>LogIn</button>
              </form>
            </li>
            <li>
              <form>
                <button type="button" className="btn btn-primary me-md-3" id='signup-btn'>Sign Up</button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav