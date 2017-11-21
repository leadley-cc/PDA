var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

describe('calculator functionality', function () {
  var runningTotal = element(by.css('#running_total'))

  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:3000')
  })

  // write integration tests here in the form of "it should do something..."
  it('should have working number button', function () {
    element(by.css('#number2')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number buttons', function () {
    element(by.css('#number2')).click()
    element(by.css('#number3')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('23')
  })

  it('should multiply 3x5 and get 15', function () {
    element(by.css('#number3')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number5')).click()
    element(by.css('#operator_equal')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('15')
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
