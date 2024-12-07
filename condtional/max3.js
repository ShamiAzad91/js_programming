// Write a js program to find maximum between 3 numbers.

function maxTwoNo(num1, num2, num3) {
    let  result;
  if (num1 > num2) {
    if (num1 > num3) {
      result =  num1;
    } else {
      result =  num3;
    }
  } else {
    if (num2 > num3) {
      result =  num2;
    } else {
      result =  num3;
    }
  }
  return result;
}

// const result = maxTwoNo(67, 56,555);
// const result = maxTwoNo(2990, 56,555);
const result = maxTwoNo(67, 5236,555);


console.log(`max no  : ${result}`);
