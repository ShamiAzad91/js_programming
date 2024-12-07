// Write a js program to calculate sum of digits of a number.


function getSumofDigit(num){
    let sum = 0;

    while (num>0) {

        sum = sum + num%10;
        num = parseInt(num /10);
        
    }
    console.log(`sum of digit of no is ${sum}`);
    
}

getSumofDigit(3436);