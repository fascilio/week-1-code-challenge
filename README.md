# Creating student grade generator,speed detector, and net salary calculator

# A grade generator
In this challenge one is supposed to write a program that prompts the user to input student marks between 0 and 100, and then outputs the corresponding grade.
If the user enters a valid mark between 0 and 100,the program will output the corresponding grade. If the user enters an invalid mark, 
the program will prompt them to enter a valid mark.
The function prompts the user to enter the student marks using 
the prompt function.
If the input is a valid number between 0 and 100, the program calculates the
grade based on the following criteria:
A > 79
B > 60 to 79
C > 49 to 59
D > 40 to 49
E > less than 40

The program then outputs the corresponding grade to the console using the console.log function.
If the input is not a valid number between 0 and 100, the program will prompt
the user to enter a valid mark and repeat the process until a valid mark is entered.

# generating a speed detector
This is a simple programme to detect speed of a car
and calculates demerit points based on the speed limit.
To use this program, simply run the carSpeed function 
with the speed of the car as the argument. For example:
     carSpeed(80);
This will output:
     Points: 2
The carSpeed function takes a single argument, speed, which 
is the speed of the car in kilometers per hour (km/h).
If the speed is less than or equal to 70 km/h, the function prints "Ok" to the console.
If the speed is greater than 70 km/h, the function calculates
the number of demerit points based on the formula: 
      (speed - 70) / 5
For example, if the speed is 80 km/h, the number of demerit points would be (80 - 70) / 5 = 2.
If the number of demerit points is greater than 12, the function prints "License suspended" to the console.

for example;
    detectSpeed(60);  Output: Ok
    detectSpeed(80);  Output: Points: 2
    detectSpeed(130);  Output: License suspended

# net salary generator
In this programme what it does is that it alculates the net salary of an employee given their basic salary and benefits.
The program also calculates the Payee Tax, NHIF, and NSSF 
deductions based on the rates provided by the KRA and NHIF websites.
To use this program, simply run the calculateNetSalary function
and provide the employee's basic salary and benefits
as arguments. For example:
   calculateNetSalary(50000, 5000, 10000);
This will calculate the net salary for an employee with a basic salary 
of 50000, a housing allowance of 5000, and a transport
allowance of 10000. The program will output the Payee Tax, NHIF, NSSF
deductions, and the net salary.

The program uses the following rates for the Payee Tax,
NHIF, and NSSF deductions:

Payee Tax
Up to 24,000: 10%
24,001 to 40,000: 15%
40,001 to 960,000: 20%
Above 960,000: 25%

NHIF
Up to 5,999: 150
6,000 to 7,999: 300
8,000 to 11,999: 400
12,000 to 14,999: 500
15,000 to 19,999: 600
20,000 to 24,999: 750
25,000 to 29,999: 850
30,000 to 34,999: 900
35,000 to 39,999: 950
40,000 and above: 1,000

NSSF
Employee Contribution: 6%
Employer Contribution: 6%

The program then calculates the net salary by subtracting the Payee Tax, 
NHIF, and NSSF deductions from the total gross salary.

# resourses
https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  
https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

