// Here is a program for a grade generator!
// Prompt the user to enter the student's marks
const marks = prompt("Enter the student's marks (between 0 and 100)");

// Convert the marks to a number
const marksNumber = Number(marks);

// Check if the marks are between 0 and 100
if (marksNumber >= 0 && marksNumber <= 100) {
  // Determine the grade based on the marks
  let grade;
  if (marksNumber > 79) {
    grade = "A";
  } else if (marksNumber >= 60 && marksNumber <= 79) {
    grade = "B";
  } else if (marksNumber >= 50 && marksNumber <= 59) {
    grade = "C";
  } else if (marksNumber >= 40 && marksNumber <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output the grade to the console
  console.log(`The student's grade is ${grade}`);
} else {
  // Output an error message if the marks are not between 0 and 100
  console.log("Error: Marks should be between 0 and 100");
}
