const sum3 = require('../Testing');
const {expect} = require('chai')//.expect; can use curly brackets to call object property (as we've done here) or the .propert notation

//below is the syntax for writing tests
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
    expect(sum(1, 4, 6, 0, 4, 6, 1, 4, 6)).to.equal(31);
  });
})