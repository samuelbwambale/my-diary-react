import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import RegisterForm from '../../../components/authentication/RegisterForm';

describe('RegisterForm component', () => {
  const mockStore = configureMockStore();
  let wrapper;
  const props = {
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    loading: false,
  };

  beforeEach(() => {
    mockStore({});
    wrapper = shallow(<RegisterForm
      {...props}
    />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSubmit when the form is submitted', () => {
    wrapper.find('#register-form').simulate('submit');
    expect(props.handleSubmit).toBeCalled();
  });

  it('should call handleChange whenever there is an input', () => {
    wrapper.find('#first_name').simulate('change');
    expect(props.handleChange).toBeCalled();
  });
});
