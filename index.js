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





// Below is a programme of speed detector
// Prompt the user to enter the speed of the car
const carSpeed = prompt("Enter the speed of the car in km/h");

// Convert the speed to a number
const carSpeedNumber = Number(carSpeed);

// Define the speed limit and the demerit points increment
const speedLimit = 70;
const demeritPointsIncrement = 5;
const maxDemeritPoints = 12;

// Calculate the number of demerit points based on the speed of the car
let demeritPoints = 0;
if (carSpeedNumber > speedLimit) {
  demeritPoints = Math.floor((carSpeedNumber - speedLimit) / demeritPointsIncrement);
}

// Output the total number of demerit points
console.log(`Points: ${demeritPoints}`);

// Check if the driver's license should be suspended
if (demeritPoints > maxDemeritPoints) {
  console.log("License suspended");
} else {
  console.log("Ok");
}






// Prompt the user to enter the basic salary and benefits
// Define KRA, NHIF, and NSSF rates
const KRA_RATE = 0.3;
const NHIF_RATES = [1500, 3000, 5000, 7000];
const NHIF_CONTRIBUTIONS = [150, 300, 400, 500];
const NSSF_RATE_EMPLOYEE = 0.06;
const NSSF_RATE_EMPLOYER = 0.06;

// Define function to calculate Payee Tax
function calculatePayeeTax(salary) {
  // Calculate taxable income
  const taxableIncome = salary - 24300; // Subtract personal relief of 28,800 per year

  // Apply progressive tax rates
  if (taxableIncome <= 12298) {
    return 0.1 * taxableIncome;
  } else if (taxableIncome <= 23885) {
    return 1229.80 + 0.15 * (taxableIncome - 12298);
  } else if (taxableIncome <= 35472) {
    return 3064.30 + 0.2 * (taxableIncome - 23885);
  } else if (taxableIncome <= 47059) {
    return 5441.30 + 0.25 * (taxableIncome - 35472);
  } else {
    return 8518.30 + 0.3 * (taxableIncome - 47059);
  }
}

// Define function to calculate NHIF contribution
function calculateNHIFContribution(salary) {
  // Find index of salary range
  let index = 0;
  while (index < NHIF_RATES.length && salary > NHIF_RATES[index]) {
    index++;
  }

  // Use corresponding contribution amount
  return NHIF_CONTRIBUTIONS[index];
}

// Define function to calculate NSSF deductions
function calculateNSSF(salary) {
  const employeeContribution = NSSF_RATE_EMPLOYEE * salary;
  const employerContribution = NSSF_RATE_EMPLOYER * salary;
  return { employeeContribution, employerContribution };
}

// Define function to calculate net salary
function calculateNetSalary(salary, benefits) {
  // Calculate total deductions
  const payeeTax = calculatePayeeTax(salary);
  const nhifContribution = calculateNHIFContribution(salary);
  const { employeeContribution, employerContribution } = calculateNSSF(salary);
  const totalDeductions = payeeTax + nhifContribution + employeeContribution;

  // Calculate net salary
  return salary + benefits - totalDeductions;
}

// Example usage
const basicSalary = 40000;
const benefits = 5000;
const netSalary = calculateNetSalary(basicSalary, benefits);
console.log(`Net Salary: ${netSalary}`);
