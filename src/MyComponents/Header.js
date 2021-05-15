import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {

    return (
        <nav id ="metaltag" className="navbar navbar-expand-lg navbar-light bg-secondary"  >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={ (event) => event.preventDefault() } style={{cursor: 'none', margin:"0 3rem 0 auto" }}>{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"style={{color: "black" ,margin:"0 0 0 1rem" }}  ><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{color: "black", margin:"0 0 0 1rem" }}><strong>About</strong></Link>
              </li>  
            </ul>
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
      </nav>
    )
}
//used to define default value of props
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

//used to define types and states of props
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
