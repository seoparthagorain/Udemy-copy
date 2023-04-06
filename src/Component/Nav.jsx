import React from 'react'
import "./style.css"
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Udemy</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search-bar"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>
       
        
        
        
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end"id="navbar-end">
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
        <li>
            <form>
            <button type="button" className="btn btn-primary me-md-3">Primary</button>
            </form>
        </li>
        <li>
            <form>
            <button type="button" className="btn btn-primary me-md-3">Primary</button>
            </form>
        </li>
       </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav