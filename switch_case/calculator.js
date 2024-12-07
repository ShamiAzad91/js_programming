// Write a js program to create Simple Calculator using switch case.
function myCalci(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;

      break;

    case "-":
      result = num1 - num2;

      break;
    case "*":
      result = num1 * num2;

      break;

    case "/":
      result = num1 / num2;

      break;

    default:
        result = 'invalid operator'
      break;
  }
  return result;
}


const result = myCalci(8,7,'*');
console.log(result)