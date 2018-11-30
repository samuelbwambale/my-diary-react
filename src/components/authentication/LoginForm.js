import React from 'react';
import Loader from 'react-loader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginForm = ({
  handleSubmit,
  handleChange,
  email,
  password,
  loading,

}) => (
  <div className="container">
    <Loader loaded={!loading}>
      <div className="row">
        <div className="col-12 bg-login">
          <form className="registerForm" id="login-form" onSubmit={handleSubmit}>
            <h3 className="text-center"> Log in </h3>
            <div className="form-group">
              <label className="control-label" htmlFor="email">Email</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-envelope" /></div>
                </div>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  value={email}
                  placeholder="Enter email address"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="password">Password</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-key" /></div>
                </div>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button id="login_submit" type="submit" className="btn theme-btn btn-block">
              Login
            </button>
            <div className="form-group">
              <Link className="theme-text center-text" exact to="/forgotPassword">Have no account?</Link>
            </div>
          </form>
        </div>
      </div>
    </Loader>
  </div>
);

LoginForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginForm;
