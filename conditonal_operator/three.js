// Write a js program to check whether year is leap year or not using conditional operator.

function checkLeapYear(year){
    let result = ((year%4 == 0 && year%100!=0) || (year%400 == 0) ) ?'leap ':'not a leap';
    return result
}

const result = checkLeapYear(2016);
console.log(`the year is ${result} year`);
