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
    <div className="row">
      <Loader loaded={!loading}>
        <div className="col-12">
          <div className="bg-login" />
          <form id="login-form" className="registerForm mt-5" onSubmit={handleSubmit}>
            <h3 className="text-center">Login</h3>
            <div className="form-group">
              <label className="control-label" htmlFor="email">Email</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-envelope" /></div>
                </div>
                <input type="text" name="email" className="form-control" id="email" value={email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="password">Password</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-key" /></div>
                </div>
                <input type="password" className="form-control" name="password" id="password" value={password} onChange={handleChange} required />
              </div>
            </div>
            <button className="btn btn-block theme-btn" type="submit" value="Submit">Submit</button>
            <div className="form-group">
              <Link className="redirect-login" exact to="/signup">Have no account?</Link>
            </div>
          </form>
        </div>
      </Loader>
    </div>
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
