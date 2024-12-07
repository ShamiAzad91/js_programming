// Write a js program to find maximum between two numbers.

function maxTwoNo(num1,num2){
    if(num1 > num2){
        return num1
    }else{
        return num2
    }
}


const result = maxTwoNo(67,56);
console.log(`max no  : ${result}`);
