module.exports = function check(str, bracketsConfig) {
  let arrOpenBrackets = [],
  arrCloseBrackets = [],
  arrIdenticals = [],
  stack = [];
  for(let arrElems of bracketsConfig) {
    if(arrElems[0] === arrElems[1]) {
      arrIdenticals.push(arrElems[0]);
    }
    else {
      arrOpenBrackets.push(arrElems[0]);
      arrCloseBrackets.push(arrElems[1]);
    }
  }
  for(let i = 0; i < str.length; i++) {
    if(arrIdenticals.includes(str[i])) {
      if(stack.length === 0 || stack[stack.length - 1] != str[i]) {
        stack.push(str[i]);
        continue;
      }
      else {
        stack.pop();
        continue;
      }
    }
    else if(arrOpenBrackets.includes(str[i])) {
      stack.push(str[i]);
    }
    else if(arrCloseBrackets.includes(str[i]) && stack.length != 0) {
      if ( arrOpenBrackets.indexOf(stack[stack.length - 1]) 
        === arrCloseBrackets.indexOf(str[i]) ) {
          stack.pop();
          continue;
        }
      else return false;
    }
    else return false;
  }
  if(stack.length === 0) return true;
  else return false;
}
