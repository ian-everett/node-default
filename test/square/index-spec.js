/* eslint-disable func-names, prefer-arrow-callback, no-unused-vars */
const should = require('chai').should();
const Square = require('../../src/square');

describe('square', function () {
  it('when created it should exist', function () {
    const square = new Square(0);
    should.exist(square);
  });

  it('should have a length property which is a number', function () {
    const square = new Square(0);
    square.should.have.property('length').that.is.a('number');
  });

  it('should have an area function', function () {
    const square = new Square(10);
    square.area.should.be.a('function');
    square.area().should.equal(100);
  });

  it('should return 0 if no length is set', function () {
    const square = new Square();
    square.area().should.equal(0);
  });
});
