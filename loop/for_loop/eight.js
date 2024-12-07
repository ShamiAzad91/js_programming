// Write a js program to find  sum first and last digit of a number.
//ex 23245 first = 2 and last = 5

function getDigit(num){
    let first = 0;
    let temp = num;
    let last = temp%10;
    let sum = 0;

    while (num>0) {
        first = num;
        num = parseInt(num/10);
        
    }
    sum = first + last;
     console.log(`first no is ${first} and last no is ${last} and sum is ${sum}`);
     
}

// getDigit(23245)
getDigit(783638);
