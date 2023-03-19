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
