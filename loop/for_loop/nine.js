// Write a C program to swap first and last digits of a number.
function getSwapNo(num){
    let first = 0;
    let last = 0;
    let temp = num;
    last = temp%10;

    while (num>0) {
        first = num;
        num = parseInt(num/10);
    }

 console.log(`first value ${first} and last value is ${last}`)
 let swap = 0;
  swap = first;
  first = last;
  last = swap;

  console.log(`afer swappinng first value is ${first} and last valueis ${last}`);
  

}

getSwapNo(34245);