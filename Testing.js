/*
An error is something that stops your code from running
A bug is something that stops your program from outputting what you intended it to

Testing is a process by which we can check for bugs
* Unit test check small parts of code
* Integration tests check whether multiple parts of code work together correctly
* End-to-End tests check the whole program.

How to write tests
* console.assert() see below for example
* a separate folder (usually called spec or tests) and create a testing file and link it to js document you want to test. - MAKE SURE CHAI IS INSTALLED VIA NPM
*NEED TO ENSURE MOCHA IS INSTALLED
* see sum3 below for syntax of linking to testing module
* see spec folder/testin.spec file for test syntax
*can change the 

Good Practice
Tests are only looking to pass and will pass if there's not content to the test
Need to see tests fail before you see them pass otherwise we could be getting false positives - change the test so that it will throw an assertion error to check that its testing the correct things

*/
function sum (a, b) {
 return +a + +b
};
console.log(sum(2, 6));

function sum2 (a, b) {
  return +a + +b
};
console.assert(sum(3, 4) === 6, 'Does not work that way');

function sum3(...args) { //however many arguments this receieves it will package them into an array
  return args.reduce((total, num) => total + num);
};
module.export = sum3;