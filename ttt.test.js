const ttt = require('./ttt');

test('check function returns a string', () => {
  expect(ttt([])).toBe('the game is not finished yet');
})

test('check functions returns x or 0 or nobody in string otherwise return invalid player', () => {
  expect(ttt(['r','o','b','e','l','s','t','a','x'])).toBe('invalid player');
})

test('check there are less than 9 items in array', () => {
  expect(ttt(['x', '0', 'x'])).toBe('the game is not finished yet');
})

test('check there are no more than 9 items in array', () => {
  expect(ttt(['r','o','b','e','l','s','t','a','x','t'])).toBe('too many moves');
})
