const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('returns 0 for an empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('returns the number for a single number string', () => {
    expect(calculator.add('1')).toBe(1);
  });

  test('returns the sum of two numbers', () => {
    expect(calculator.add('1,5')).toBe(6);
  });

  test('returns the sum of multiple numbers', () => {
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  test('handles new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(calculator.add('//;\n1;2;3')).toBe(6);
  });

  test('throws an error for negative numbers', () => {
    expect(() => calculator.add('1,-2,3,-4')).toThrow(
      'Negative numbers not allowed: -2, -4'
    );
  });
});
