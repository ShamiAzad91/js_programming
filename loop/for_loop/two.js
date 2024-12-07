// Write a js program to print all alphabets from a to z. – using for loop


function displayAlphabet(){
    for (let i = 97; i <=122; i++) {
      console.log(String.fromCharCode(i));   
    }
}

displayAlphabet();