// Write a js program to print multiplication table of any number


function printTable(num){
    for (let i = 1; i <=10; i++){
        console.log(`${num} * ${i} = ${num*i}`)      
    }
}

printTable(5);