import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
  let count = 0;
  let str = s2.split("");
  let s;
    for(s of s1){
      let index = str.findIndex(a => a === s);
      if(index >= 0){
        count++;
       str.splice(index, 1);
      }
    }
    return count;
  }
  
  
