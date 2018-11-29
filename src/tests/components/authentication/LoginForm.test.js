import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import LoginForm from '../../../components/authentication/LoginForm';

describe('LoginForm component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const props = {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    email: '',
    password: '',
    loading: false,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<LoginForm
      {...props}
    />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit when the form is submitted', () => {
    wrapper.find('#login-form').simulate('submit');
    expect(props.handleSubmit).toBeCalled();
  });

  it('should call handleChange whenever there is an input', () => {
    wrapper.find('#email').simulate('change');
    expect(props.handleChange).toBeCalled();
  });
});
