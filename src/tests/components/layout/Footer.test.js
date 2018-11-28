import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../../components/layout/Footer';

it('renders Footer correctly', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
