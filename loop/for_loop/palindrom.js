// Write a C program to check whether a number is palindrome or not.



function checkPalindrom(num){

    let temp = num;
    let rem = 0;
    let rev = 0;
    
    while (num>0) {
        rem = num % 10;
        rev = rev*10 + rem;
        num = parseInt(num/10)
        
    }
    console.log(`reverse of no is ${rev}`);

    num = temp;

    let result = (rev === num) ?'palindrom' :'not a palindrome';
    console.log(result);
    
    
        
    }
    
    // checkPalindrom(3272);
    checkPalindrom(1221);
    