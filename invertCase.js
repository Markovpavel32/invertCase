import { length, toUpperCase, toLowerCase } from './strings'; // eslint-disable-line

const invertCase = str => {
  let newStr = '';
  for(let i = 0; i < length(str); i++){
    if(str[i] === toLowerCase(str[i])){
      newStr += toUpperCase(str[i]);
      } else {
        newStr += toLowerCase(str[i])
      }
    }
    return newStr;
  }

  export default invertCase;
