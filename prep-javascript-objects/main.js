var person, myCar;
var fullName, longString;

person = {
  firstName: 'Joseph',
  lastName: 'Nguyen',
  hobby: 'tennis'
};

fullName = person.firstName + ' ' + person.lastName;
console.log(person);
console.log("The person's name is: ", fullName);

person.job = 'Kool Kid';
console.log("The person's job is: ", person.job);

person.previousJob = 'Cool Cucumber';
console.log("The person's previous job is: ", person.previousJob);

console.log('The complete person object: ', person);

myCar = {
  make: 'Honda',
  model: 'Accord',
  year: '2019'
};
console.log('Car info: ', myCar);

myCar['owner'] = fullName;
console.log('Value of owner: ', myCar['owner']);

longString = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.';
console.log(longString);

myCar['color'] = 'silver';
console.log('Complete car info: ', myCar);
