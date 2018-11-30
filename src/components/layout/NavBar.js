import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
  <React.Fragment>
    <nav className="navbar fixed navbar-expand-lg nav-bg">
      <div className="">
        <Link className="nav-link active nav-bar-brand-text" exact to="/">My Diary </Link>
      </div>
      <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link active theme-text" exact to="signup">Signup</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link active theme-text" exact to="login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  </React.Fragment>
);

export default NavBar;
