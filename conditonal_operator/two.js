// Write a js program to find maximum between three numbers using conditional operator.

function gretaestThreeNo(num1, num2, num3) {
  let result =
    num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
  return result;
}

const result = gretaestThreeNo(23, 45, 67);
console.log(`greatest of three no is ${result}`);
