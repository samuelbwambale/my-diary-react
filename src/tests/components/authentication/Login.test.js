import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Login } from '../../../components/authentication/Login';

describe('Login component', () => {
  const mockStore = configureMockStore();
  let wrapper;

  const nextProps = {
    isLoggedIn: true,
  };
  const props = {
    history: { push: jest.fn() },
    loginUser: jest.fn(),
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<Login
      {...props}
    />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call loginUser action when handleSubmit function is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.loginUser).toBeCalled();
  });

  it('should set state when handleChange function is called', () => {
    wrapper.instance().handleChange(getEvent('email', 'samuel@gmail.com'));
    expect(wrapper.state().email).toEqual('samuel@gmail.com');
  });

  it('should not redirect to dashboard if login was not successful', () => {
    wrapper.setProps({ isLoggedIn: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect once the nextProps have isLoggedIn as true', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/dashboard');
  });
});
