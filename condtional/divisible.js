// Write a js  program to check whether a number is divisible by 5 and 11 or not.

function checkDivisiblity(num){
    let result ;

    if(num % 5 == 0 && num%11 == 0){
        result = 'no is divisble by both 5 and 11'
    }else{
        result = `not divisble by both 5 and 11`
    }
  return result
}


// const result = checkDivisiblity(55);
const result = checkDivisiblity(500);

console.log(result)