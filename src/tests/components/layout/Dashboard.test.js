import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '../../../components/layout/Dashboard';

it('renders Dashboard correctly', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
});
