import React from 'react';
import { shallow } from 'enzyme';
import SingleEntry from '../../../components/entries/SingleEntry';

describe('SingleEntry Component', () => {
  let wrapper;
  const entry = { title: 'This is the ttile', description: 'This is the description' };

  beforeEach(() => {
    wrapper = shallow(<SingleEntry entry={entry} />);
  });

  it('should render the SingleEntry Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
