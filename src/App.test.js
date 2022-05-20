const App = require('./App.js');

test('Tests handleClick', () => {
  const result = App.clear('12345678');
  expect(result).toBe('');
});
