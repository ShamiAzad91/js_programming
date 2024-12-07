// Write a js program to find sum of all natural numbers between 1 to n.

function printSumNaturalNo(num){
   
    let sum=0;
    for (let i = 1; i <=num; i++) {
        sum = sum + i;
        
        
    }
    return sum;

}

const result = printSumNaturalNo(10);
console.log(result);
