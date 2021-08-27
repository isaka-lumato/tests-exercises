const jestFun = require('./jestTests');

test('return string length', () => {
  expect(jestFun.stringLength('hello')).toBe(5);
  expect(jestFun.stringLength('')).toBe(null);
  expect(jestFun.stringLength('helooeveryone')).toBe(null);
})



test('return reversed string', () => {
  expect(jestFun.reverseString('hello')).toBe('olleh');
})

describe( 'calculations', () => {
test('add numbers', () => {
  expect(jestFun.calculator.add(3,4)).toBe(7);
})
test('subtract numbers', () => {
  expect(jestFun.calculator.subtract(5,4)).toBe(1);
})
test('multiply numbers', () => {
  expect(jestFun.calculator.multiply(4,4)).toBe(16);
})
test('divide numbers', () => {
  expect(jestFun.calculator.divide(4,4)).toBe(1);
})
})

test('capitalize', () => {
  expect(jestFun.capitalize('brother')).toBe('Brother');
})