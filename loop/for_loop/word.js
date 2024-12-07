// Write a js program to enter a number and print it in words.
//3467

function printIntoWords(num) {
    num = Math.abs(num);// to get positive value
    console.log(`your no is ${num}`)
  let temp = num;
  let rev = 0;
  let rem = 0;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem; //7643
    num = parseInt(num / 10);
  }

  console.log(`reverse  no  is ${rev}`); //7643;

  while (rev > 0) {
    switch (rev % 10) {
      case 0:
        console.log("zero");

        break;
      case 1:
        console.log("one");

        break;
      case 2:
        console.log("two");

        break;
      case 3:
        console.log("three");

        break;
      case 4:
        console.log("four");

        break;
      case 5:
        console.log("five");

        break;
      case 6:
        console.log("six");

        break;
      case 7:
        console.log("seven");

        break;
      case 8:
        console.log("eight");

        break;
      case 9:
        console.log("nine");

        break;

     
    }
    rev  = parseInt(rev/10);
  }
}


printIntoWords(3467);