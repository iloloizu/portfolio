import React from 'react'
import avatar from "../../public/images/avatar.jpeg"
import {NavLink} from 'react-router-dom'


export default function NavBar() {
  return (
    <div className="NavBar">
        <div className="profile">
            <img src={avatar} alt="Ilolo Izu" />
        </div>
        <nav className="nav">
            <ul className='nav-items'>
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/" exact activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/" exact activeClassName="active">
                        Portfolio
                    </NavLink>
                    <NavLink to="/" exact activeClassName="active">
                        Blog
                    </NavLink>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}
