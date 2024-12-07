// Write a js program to check whether a number is even or odd using switch case.

function isEven(num){
    switch (true) {
        case num%2 == 0:
            console.log('no is even');
            
            break;
    
        default:
            console.log('no is odd');
            break;
    }
}

isEven(34);