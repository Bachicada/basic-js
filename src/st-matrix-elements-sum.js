import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let n=matrix[0].length;
  let ar=[];
  ar.push(matrix[0])
  
  for(let j=0;j<n;j++){
            for(let i=1;i<matrix.length;i++){
                 if (matrix[i-1][j]!==0){ar.push(matrix[i][j])}
                                            }
                      }
  return (ar.flat().reduce(function(a,b){return a+b}))
  }

