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
* see spec folder/testing.spec file for test syntax
*can change the instruction to run test by editing the test script in the package.json

Good Practice
Tests are only looking to pass and will pass if there's not content to the test
Need to see tests fail before you see them pass otherwise we could be getting false positives - change the test so that it will throw an assertion error to check that its testing the correct things

Test driven development - TDD (is part of agile methodoligies) is a process by which tests are incrememntally developed until reaching robustness


function sum (a, b) {
 return +a + +b
};
console.log(sum(2, 6));

function sum2 (a, b) {
  return +a + +b
};
console.assert(sum(3, 4) === 6, 'Does not work that way');
*/

function sum3(...args) { //however many arguments this receieves it will package them into an array
  return args.reduce((total, num) => total + num);
};

function checkPasswordStrength(password) {
 if (password.length >= 6) return false;
};
module.exports = {
  sum3, checkPasswordStrength
};
/*
Quick note on testing @channel - if you are expecting something to equal an array or object, you need to use `.to.eql` in your test as opposed to `.to.equal`. We’ll go into more depth on this on Wednesday, but for now just rest on the knowledge that it relates to what Sam briefly mentioned about objects in JS being having references to their own point in memory. `[1, 2, 3]` does not equal `[1, 2, 3]`, contrary to appearances
*/