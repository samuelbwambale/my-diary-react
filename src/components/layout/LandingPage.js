import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <React.Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 jumbotron mx-auto bg-landingpage">
          <p className="mt-5 thick">Write about anything!!!</p>
          <Link exact to="login">
            <button type="button" className="btn theme-btn">Add an Entry</button>
          </Link>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default LandingPage;
