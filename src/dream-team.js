import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!members|| (!Array.isArray(members))){return false}
  else{
  let ar=[];
  ar=members.filter(el=>typeof el==='string' && el != '');
  
  if (ar.length!==0){
    let name=[];
    name=ar.map(function(str){return str.toUpperCase().trim().slice(0,1)} )
    return name.sort().join('') 
  }
  else{ return false}
  
}
}
