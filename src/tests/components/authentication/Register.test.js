import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Register } from '../../../components/authentication/Register';

describe('Register component', () => {
  const mockStore = configureMockStore();
  let wrapper;

  const nextProps = {
    registerUserSuccess: true,
  };
  const props = {
    history: { push: jest.fn() },
    registerUser: jest.fn(),
    handleChange: jest.fn(),
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
    wrapper = shallow(<Register
      {...props}
    />);
  });


  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should call registerUser action when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.registerUser).toBeCalled();
  });

  it('should set state when handleChange function is called', () => {
    wrapper.instance().handleChange(getEvent('first_name', 'Samuel'));
    expect(wrapper.state().first_name).toEqual('Samuel');
  });

  it('should not redirect to login signup was not successful', () => {
    wrapper.setProps({ registerUserSuccess: false });
    expect(props.history.push).toBeCalledTimes(0);
  });

  it('should redirect once the nextProps have registerUserSuccess as true', () => {
    wrapper.setProps({ ...nextProps });
    expect(props.history.push).toBeCalledWith('/login');
  });
});
