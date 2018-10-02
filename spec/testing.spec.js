const {checkPasswordStrength, sum3} = require('../Testing')
const { expect } = require('chai')//.expect; can use curly brackets to call object property (as we've done here) or the .property notation

//below is the syntax for writing tests
/*Quick note on testing @channel - if you are expecting something to equal an array or object, you need to use `.to.eql` in your test as opposed to `.to.equal`. We’ll go into more depth on this on Wednesday, but for now just rest on the knowledge that it relates to what Sam briefly mentioned about objects in JS being having references to their own point in memory. `[1, 2, 3]` does not equal `[1, 2, 3]`, contrary to appearances*/

describe('checkPasswordStrength', () => {
  it('return false if the password is fewer than 6 characters', () => {
    const actual = checkPasswordStrength('David');
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

describe('sum3', () => {
it('returns two numbers added together', () => {
  const expected = 3;
  const actual = sum3(2, 1);
expect(actual).to.equal(expected);
  });
  it('returns three numbers added together', () => {
    const actual = sum3(2, 1, 2);
    const expected = 5;
    expect(actual).to.equal(expected);
  });
  it('returns a single argument if only one number is given', () => {
    const expected = 5;
    const actual = sum3(5);
    expect(actual).to.equal(expected);
  });
  it('returns sum of any multiple of arguments', () => {
    const expected = 20;
    const actual = sum3(5, 5, 5, 5);
    expect(actual).to.equal(expected);
    expect(sum3(1, 4, 6, 0, 4, 6, 1, 4, 6)).to.equal(31);
  });
})