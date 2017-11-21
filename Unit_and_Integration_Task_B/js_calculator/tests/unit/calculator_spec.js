var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  let calculator

  beforeEach(function () {
    calculator = new Calculator()
  })

  it('starts with zero total', function () {
    assert.equal(calculator.runningTotal, 0)
  })

  it('can have a number button clicked', function () {
    calculator.numberClick(3)
    assert.equal(calculator.runningTotal, 3)
  })

  it('can have multiple number buttons clicked', function () {
    calculator.numberClick(4)
    calculator.numberClick(7)
    calculator.numberClick(1)
    assert.equal(calculator.runningTotal, 471)
  })

  it('can have the clear button clicked', function () {
    calculator.numberClick(3)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })

  it('can have the clear button clicked during a calculation', function () {
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 8)
  })

  describe('operator buttons', function () {
    it('can have the equals operator clicked', function () {
      calculator.numberClick(3)
      calculator.numberClick(8)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 38)
    })

    it('can have the add operator clicked', function () {
      calculator.numberClick(3)
      calculator.operatorClick('+')
      calculator.numberClick(8)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 11)
    })

    it('can have the subtract operator clicked', function () {
      calculator.numberClick(9)
      calculator.operatorClick('-')
      calculator.numberClick(7)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 2)
    })

    it('can have the multiply operator clicked', function () {
      calculator.numberClick(3)
      calculator.operatorClick('*')
      calculator.numberClick(4)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 12)
    })

    it('can have the divide operator clicked', function () {
      calculator.numberClick(9)
      calculator.operatorClick('/')
      calculator.numberClick(3)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 3)
    })
  })

  describe('operator functions', function () {
    it('can add a number to the previous total', function () {
      calculator.numberClick(3)
      calculator.operatorClick('=')
      calculator.add(7)
      assert.equal(calculator.runningTotal, 10)
    })

    it('can subtract a number from the previous total', function () {
      calculator.numberClick(8)
      calculator.operatorClick('=')
      calculator.subtract(4)
      assert.equal(calculator.runningTotal, 4)
    })

    it('can multiply a number with the previous total', function () {
      calculator.numberClick(2)
      calculator.operatorClick('=')
      calculator.multiply(4)
      assert.equal(calculator.runningTotal, 8)
    })

    it('can divide the previous total by a number', function () {
      calculator.numberClick(16)
      calculator.operatorClick('=')
      calculator.divide(4)
      assert.equal(calculator.runningTotal, 4)
    })
  })

  describe('calculation tests', function () {
    it('can multiply 3x5 and get 15', function () {
      calculator.numberClick(3)
      calculator.operatorClick('*')
      calculator.numberClick(5)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 15)
    })

    it('can divide 21/7 and get 3', function () {
      calculator.numberClick(21)
      calculator.operatorClick('/')
      calculator.numberClick(7)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 3)
    })

    it('can add 1+4 and get 5', function () {
      calculator.numberClick(1)
      calculator.operatorClick('+')
      calculator.numberClick(4)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 5)
    })

    it('can subtract 7-4 and get 3', function () {
      calculator.numberClick(7)
      calculator.operatorClick('-')
      calculator.numberClick(4)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 3)
    })

    it('can add 7+4 and get 11 then multiply 11*3 and get 33', function () {
      calculator.numberClick(7)
      calculator.operatorClick('+')
      calculator.numberClick(4)
      calculator.operatorClick('*')
      assert.equal(calculator.previousTotal, 11)
      calculator.numberClick(3)
      calculator.operatorClick('=')
      assert.equal(calculator.previousTotal, 33)
    })
  })
})
