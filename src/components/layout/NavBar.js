import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
  <React.Fragment>
    <nav className="navbar fixed navbar-expand-lg nav-bg">
      <div className="">
        <Link className="nav-bar-text" exact to="/">My Diary </Link>
      </div>
      <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
        <Link className="nav-link active float-right" exact to="signup">Signup</Link>
        <Link className="nav-link active float-right" exact to="login">Login</Link>
      </div>
    </nav>
  </React.Fragment>
);

export default NavBar;
