/*
An error is something that stops your code from running
A bug is something that stops your program from outputting what you intended it to

Testing is a process by which we can check for bugs
* Unit test check small parts of code
* Integration tests check whether multiple parts of code work together correctly
* End-to-End tests check the whole program.

How to write tests
* console.assert() see below for example
* a separate folder (usually called spec or tests) and create a testing file and link it to js document you want to test

*/
function sum (a, b) {
 return +a + +b
};
console.log(sum(2, 6));

function sum2 (a, b) {
  return +a + +b
};
console.assert(sum(3, 4) === 6, 'Does not work that way');

function sum3(a ,b) {
  return +a + +b
};