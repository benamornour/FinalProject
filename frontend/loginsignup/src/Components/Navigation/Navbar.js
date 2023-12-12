import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';




export default function Navbar(props) {
  return (

    <div className="div">
      <nav>
        <ul className="menuItems">
        <li>
            <a href="/" >
              <img className="img" src="http://localhost:3000/logo.png" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="/videos" >/VIDEOS</a>
          </li>
          <li>
            <a href="/games" >/GAMES</a>
          </li>
          <li>
            <a href="/profile" >/PROFILE</a>
          </li>
          <li>
            <a href="/logout" >/LOGOUT</a>
          </li>
        </ul>
      </nav>

      </div>

  );
}
    