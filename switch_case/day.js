// Write a js program to print day of week name using switch case.

function printDay(weekName) {
    switch (weekName) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Invalid day'; // Handles invalid inputs
    }
  }
  
console.log(printDay(3))