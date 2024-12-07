// Write a js program to enter a number and print its reverse.


function getReverseNum(num){
let rem = 0;
let rev = 0;

while (num>0) {
    rem = num % 10;
    rev = rev*10 + rem;
    num = parseInt(num/10)
    
}
console.log(`reverse of no is ${rev}`);

    
}

getReverseNum(3272);
