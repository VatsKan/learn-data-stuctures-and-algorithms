const { factorial, sumOfIntegers } = require('../solutions/1-recursion')

describe('factorial function', ()=>{
  test('factorial(3)=6', () => {
    expect(factorial(3)).toBe(6);
  });
  test('factorial base case', () => {
    expect(factorial(0)).toBe(1);
  });
  test('factorial(8)=40320', () => {
    expect(factorial(8)).toBe(40320);
  });
  // test('factorial of negative number', () => {
  //   expect(factorial(-5)).toBe(undefined);
  // });
});

describe('sum of first n integers of array', ()=>{
  test('sum 3 integers in array of length 4', ()=>{
    expect(sumOfIntegers([2, 1, 4, 5], 3)).toBe(7);
  })
  test('sum 7 integers in array of length 11', ()=>{
    expect(sumOfIntegers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 7)).toBe(7);
  })
  test('sum 4 integers in array of length 6', ()=>{
    expect(sumOfIntegers([2, 5, 1, 7, 9, 12], 4)).toBe(15);
  })
  // test('empty array', ()=>{
  //   expect(sumOfIntegers([], 4)).toBe(undefined);
  // })
  // test('some invalid inputs', ()=>{
  //   expect(sumOfIntegers([5, 2, 1], '1')).toBe(undefined);
  //   expect(sumOfIntegers([5, 2, 1], 1.5)).toBe(undefined);
  //   expect(sumOfIntegers('hello', 100)).toBe(undefined);
  //   expect(sumOfIntegers({'0': 3, '1': 6}, 2)).toBe(undefined);
  // })
  // test('empty array with 0 index', ()=>{
  //   expect(sumOfIntegers([], 0)).toBe(undefined);
  // })
  // test('negative index to be undefined', ()=>{
  //   expect(sumOfIntegers([1, 4, 11], -2)).toBe(undefined);
  // })
})