import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from '../../../components/layout/LandingPage';

it('renders Landingpage correctly', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper).toMatchSnapshot();
});
