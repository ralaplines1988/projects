// Write your function here:
const finalGrade = (num1, num2, num3) =>
  {
    if (
      (num1 < 0 || num1 > 100)||
      (num2 < 0 || num2 > 100)||
      (num3 < 0 || num3 > 100)
      ) {
        return 'You have entered an invalid grade.';
    }

    if (num1 === undefined || num2 === undefined || num3 === undefined){
      return 'You must type three grades in.'
    }

    const average = (num1+num2+num3)/3;
    /*if(average < 60){
      return 'F';
    } else if (average < 70) {
      return 'D';
    } else if (average < 80) {
      return 'C';
    } else if (average < 90) {
      return 'B';
    } else if (average <= 100) {
      return 'A';
    }*/
    
    /*switch written, use return to stop switch function*/
    switch (true) {
      case average < 60 : return 'F';
      case average < 70 : return 'D';
      case average < 80 : return 'C';
      case average < 90 : return 'B';
      case average < 101 : return 'A';
      default: return "Error occurs."
    }
  }

console.log(finalGrade(80, 80, 80));



// Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!