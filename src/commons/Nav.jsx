import React from 'react';
import '../css/Nav.css';

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container container-fluid">
          <a className="navbar-brand" href="/">Pokemon Shards</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className="nav-link" href="#">EJEMPLO</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">EJEMPLO</a>
              </li>
          </ul>
          <span className="navbar-text">
              TEXTO DE EJEMPLO
          </span>
          </div>
      </div>
    </nav>
  )
}
