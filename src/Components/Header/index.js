import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../Assets/image';

function Header(props) {
  return (
    <header className="page-header">
      <div className="header-content">
        <div className="logo">
          <h1>
            <Link to="/">
              <img className="logo-img" alt ="" src={Logo} />
            </Link>
          </h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">1.Choose a base</Link>
          </li>
          <li className="nav-item">
            <Link to="/">2.Refine features</Link>
          </li>
          <li className="nav-item">
            <Link to="/">3.Plan delivery</Link>
          </li>
        </ul>
        <ul className="options-list">
          <li className="options-item">
            <button type="button" className="options-button">
              Talk to our experts
            </button>
          </li>
          <li className="options-item">
            <button type="button" className="options-button">
              USD
            </button>
          </li>
          <li className="options-item">
            <button type="button" className="options-button">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
