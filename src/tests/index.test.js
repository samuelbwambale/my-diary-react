import Index from '../index';
  it('renders without correctly', () => {
    expect(
      JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
      ),
   ).toMatchSnapshot();
});
