const { add } = require('./calculator.js');

// test away!
describe('calculator.js', () => {
  describe('calculator', () => {
    describe('calculator.add()', () => {});
    // test case
    it('should add two numbers', () => {
      // assertions
      expect(add(2, 2)).toBe(4);
      expect(add(1, 1)).toBe(2);
      expect(add(20, -1)).toBe(19);
    });

    it('should return the passed value, if only one value provided', () => {
      // assertions
      expect(add(1)).toBe(1);
      expect(add(99)).toBe(99);
    });

    it('should calculate the sum of any number of arguments separated by comma', () => {
      expect(add(1, 2, 3)).toBe(6);
      expect(add(1, 2, 3, 4)).toBe(10);
    });

    // should handle an array of numbers
    it('should handle an array of numbers', () => {
      expect(add([1, 2, 3, 4])).toBe(10);
      expect(add([1, 2])).toBe(3);
    });

    it.todo('passing strings');
    it.todo('not passing values');
    it.todo('passing strings');
  });
});
