import React from 'react';
import avatar from '../images/avatar.jpeg'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.scss'


function NavBar() {
  return (
    <div className="NavBar">
        <nav className="nav">
        <div className="profile">
            <img src={avatar} alt="Ilolo Izu"/>
        </div>
            <ul className='nav-items'>
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" exact activeClassName="active">
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" exact activeClassName="active">
                        Portfolio
                    </NavLink>
                </li>    
                <li className="nav-item">
                    <NavLink to="/blogs" exact activeClassName="active">
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" exact activeClassName="active">
                        Contact
                    </NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>©2022 Ilolo Izu</p>
            </footer>
        </nav>
    </div>
  )
}

export default NavBar;