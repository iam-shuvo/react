import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
const Navigation = ( ) =>{


return(
    <nav className="container">
        <div className="logo">
            <img src="/images/logo.png" alt="logo"/>
            
       
        </div>

        <ul>
            <Link to="/"className="Nav-link">Home</Link>
            <Link to="/gallery" className="Nav-link">Gallery</Link>
            <Link to="/about"className="Nav-link" >About</Link>
            <Link to="/contact" className="Nav-link">Contact</Link>
            <Link to="/login" className="Nav-link">logdash</Link>
            


        </ul>

        <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Log-in
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/login_admin">As Admin</Dropdown.Item>
        <Dropdown.Item href="/login_photo">As Photographer</Dropdown.Item>
        <Dropdown.Item href="/login_cine">As cinematographer</Dropdown.Item>
        <Dropdown.Item href="/login_edit">As Editor</Dropdown.Item>
        <Dropdown.Item href="/login_user">As User</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </nav>
)
}
export default Navigation


