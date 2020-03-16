import React from 'react';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="container">
        <div className="row">
          <nav className="nav-items desktop">
            <ul>
              <li className="nav-item">
                <a href="#hello">hello</a>
              </li>
              <li className="nav-item">
                <a href="#resume">resume</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio">portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#blog">blog</a>
              </li>
              <li className="nav-item">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
