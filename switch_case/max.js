// Write a js program to find maximum between two numbers using switch case.

function greatest(num1, num2) {
    switch (true) {
      case num1 > num2:
        console.log("num1 is greater");
        break;
      case num1 < num2:
        console.log("num2 is greater");
        break;
      default:
        console.log("Both numbers are equal");
        break;
    }
  }
  
  // Test the function
  greatest(23, 45); // Output: num2 is greater
  greatest(45, 23); // Output: num1 is greater
  greatest(30, 30); // Output: Both numbers are equal
  


console.log(greatest(23,45));