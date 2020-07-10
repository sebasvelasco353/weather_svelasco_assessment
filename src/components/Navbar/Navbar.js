import React from 'react'
//  Routing
import { Link } from "react-router-dom";
// menu
import './Navbar.css';
import { slide as Menu } from 'react-burger-menu'

export default function Navbar() {

  return (
    <div className="menuContainer">
      <Menu>
        <nav>
            <ul>
              <li>
                <Link className="menu-item" to="/">Home</Link>
              </li>
              <li>
                <Link className="menu-item" to="/recent">recent</Link>
              </li>
            </ul>
          </nav>
        </Menu>
      <h3>Weather app</h3>
    </div>
  )
}
