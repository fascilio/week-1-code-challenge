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
