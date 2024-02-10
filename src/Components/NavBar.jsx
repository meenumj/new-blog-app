import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blog App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/addpost">Add Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewpost">View All Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/viewmypost">View My Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
