function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addedAndMultiplied = addAndMultiplyBy5(10, 5);
console.log('added and multiplied:', addedAndMultiplied);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var multipliedAndDivided = multiplyAndDivideBy5(35, 10);
console.log('multiplied and divided:', multipliedAndDivided);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var fullName = getFullName('Joseph', 'Nguyen');
console.log('full name:', fullName);

function cube(x) {
  return x * x * x;
}
var cubed = cube(5);
console.log('cubed:', cubed);
