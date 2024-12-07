// Write a js program to check whether an alphabet is vowel or consonant using switch case.

function checkVowel(alpha) {
  alpha.toLowerCase();
  switch (alpha) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":

    console.log('vowel');
    break;
    

    default:
        console.log('consonant');
      break;
  }
}


console.log(checkVowel('i'));
