import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/userActions';
import LoginForm from './LoginForm';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === true) {
      const { history } = this.props;
      history.push('/dashboard');
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      email,
      password,
    } = this.state;

    const payload = {
      email,
      password,
    };

    const { loginUser } = this.props;
    loginUser(payload);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      email,
      password,
    } = this.state;
    const { loading } = this.props;
    return (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={email}
        password={password}
        loading={loading}
      />
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
  loading: PropTypes.bool,
};

Login.defaultProps = {
  isLoggedIn: false,
  loading: false,
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { loginUser })(Login);
