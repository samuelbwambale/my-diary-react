import React from 'react';
import { shallow } from 'enzyme';
import { EntriesList } from '../../../components/entries/EntriesList';

describe('EntryList Component', () => {
  let wrapper;
  const fetchAllEntries = jest.fn();
  const entriesPayload = [{
    title: 'Title',
    description: 'Description',
  }];

  beforeEach(() => {
    wrapper = shallow(
      <EntriesList fetchAllEntries={fetchAllEntries} entriesPayload={entriesPayload} />,
    );
  });

  it('should render the EntriesList Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
