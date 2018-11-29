import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/userActions';
import RegisterForm from './RegisterForm';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registerUserSuccess === true) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      first_name,
      last_name,
      email,
      password,
    } = this.state;

    const payload = {
      first_name,
      last_name,
      email,
      password,
    };

    const { registerUser } = this.props;
    registerUser(payload);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
    } = this.state;
    const { loading } = this.props;
    return (
      <RegisterForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        first_name={first_name}
        last_name={last_name}
        email={email}
        password={password}
        loading={loading}
      />
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  registerUserSuccess: PropTypes.bool,
  loading: PropTypes.bool,
};

Register.defaultProps = {
  registerUserSuccess: false,
  loading: false,
};

const mapStateToProps = state => ({
  registerUserSuccess: state.user.registerUserSuccess,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { registerUser })(Register);
