import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let arr=n.toString().split('').map(el=>parseInt(el))
  const getSum = (arr) => arr.reduce((a, b) => a + (+b), 0); 
  
    while (arr.length != 1) {
     let sum = getSum(arr);
      arr = sum.toString().split('');
    }

    return parseInt(arr[0]);
  }

