import { shallow } from 'enzyme';
import React from 'react';
import NavBar from '../../../components/layout/NavBar';

it('renders NavBar correctly', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper).toMatchSnapshot();
});
