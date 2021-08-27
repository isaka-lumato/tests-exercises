function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    return null;
  }
}

function reverseString(string) {
  let arrStr = string.split('');
  let newStr = arrStr.reverse().join('');
  return newStr;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
}
function capitalize(str){
  strArr = str.split('');
  strCap = strArr.shift();
  strCap2 = strCap.toUpperCase();
  strArr2 = strArr.unshift(strCap2);
  capStr = strArr.join(''); 
return capStr;
}

capitalize('hello');
module.exports = {
  stringLength: stringLength,
  reverseString: reverseString,
  calculator: calculator, 
  capitalize: capitalize,
};
