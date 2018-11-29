import React from 'react';
import Loader from 'react-loader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RegisterForm = ({
  handleSubmit,
  handleChange,
  first_name,
  last_name,
  email,
  password,
  loading,

}) => (
  <div className="container">
    <div className="row">
      <Loader loaded={!loading}>
        <div className="col-12">
          <div className="bg-login" />
          <form id="register-form" className="registerForm mt-5" onSubmit={handleSubmit}>
            <h3 className="text-center">Register</h3>
            <div className="form-group">
              <label className="control-label" htmlFor="first_name">First Name</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-user" /></div>
                </div>
                <input type="text" className="form-control" name="first_name" id="first_name" value={first_name} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="last_name">Last Name</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text"><i className="fas fa-user" /></div>
                </div>
                <input type="text" className="form-control" name="last_name" id="last_name" value={last_name} onChange={handleChange} required />
              </div>
            </div>
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
              <Link className="redirect-login" exact to="/login">Have an account?</Link>
            </div>
          </form>
        </div>
      </Loader>
    </div>
  </div>
);

RegisterForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RegisterForm;
