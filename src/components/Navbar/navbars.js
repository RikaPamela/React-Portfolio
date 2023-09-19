import React from 'react';
import './navbar.css';

function NavigationMenu() {
  return (
    <section className="navbar">
  <img src="/assets/PC.png" alt="Your Logo" />

    <ul className="nav justify-content-end">
    <li className="nav-item">
        <a className="nav-link" href="Home">
         Home
        </a>
        </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="About">
       About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Projects">
         Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="Contact">
         Contact
        </a>
      </li>
    </ul>
  </section>

  );
}

export default NavigationMenu;
