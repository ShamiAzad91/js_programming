// Write a C program to check whether a number is negative, positive or zero.

function checkNumber(num){
let result;
   
    if(num == 0){
        result = 'zero'
    }else if(num > 0){
        result = 'positive'
    }else{
        result = 'negative'
    }
    return result
}

const result = checkNumber("44");
console.log(`the given no  is ${result}`);
