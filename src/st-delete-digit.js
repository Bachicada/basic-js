import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n=n.toString();
  let ar=[];
  for (let i=0;i<n.length;i++){
  let numb=n.substr(0, i)+n.substr(i+1, n.length);
  ar.push(numb);
  }
  ar.sort(function(a,b){return b-a})
  return parseInt(ar[0])
  }

