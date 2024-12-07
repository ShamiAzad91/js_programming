// Write a js program to count number of digits in a number.
//3453==4digit

function countNumber(num){

    let count = 0;

    while (num!=0) {
        num = parseInt(num/10);
        count++;

    
    }
    return count;
}

// const result = countNumber(4568);
const result = countNumber(4562348);

console.log(`no of digit is ${result}`);
