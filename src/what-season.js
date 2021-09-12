import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  function isValidDate(d) {
    return (d instanceof Date && Object.getOwnPropertySymbols(d).length===0);
  }

  if (!date){return 'Unable to determine the time of year!'}
  else if (!isValidDate(date)){ throw new Error('Invalid date!')}
  else{
  let m=date.getMonth();  
  if ((m===11)||(m<2)){return 'winter'}
  else if ((m>1)&&(m<5)){return 'spring'}
  else if ((m>4)&&(m<8)){return 'summer'}
  else if ((m>7)&&(m<11)){return 'autumn'}
  }
}