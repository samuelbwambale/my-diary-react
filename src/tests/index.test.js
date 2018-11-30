import Index from '../index';

it('renders correctly', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});
