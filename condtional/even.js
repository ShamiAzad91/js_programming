// Write a js program to check whether a number is even or odd.

function isEven(num){
    if(num%2 == 0){
        return 'even'
    }else{
        return "odd"
    }
}

const result = isEven(66);
console.log(`no is ${result}`);
