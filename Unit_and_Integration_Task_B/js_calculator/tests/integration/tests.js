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
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('15')
  })

  it('should divide 21/7 and get 3', function () {
    element(by.css('#number2')).click()
    element(by.css('#number1')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number7')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('3')
  })

  it('should add 1+4 and get 5', function () {
    element(by.css('#number1')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('5')
  })

  it('should subtract 7-4 and get 3', function () {
    element(by.css('#number7')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('3')
  })

  it('should calculate (7+4)*3 and get 33', function () {
    element(by.css('#number7')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number4')).click()
    element(by.css('#operator_multiply')).click()
    element(by.css('#number3')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('33')
  })

  it('should calculate 700000000+99999999 and get 799999999', function () {
    element(by.css('#number7')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_add')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#number9')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('799999999')
  })

  it('should calculate 401-820 and get -419', function () {
    element(by.css('#number4')).click()
    element(by.css('#number0')).click()
    element(by.css('#number1')).click()
    element(by.css('#operator_subtract')).click()
    element(by.css('#number8')).click()
    element(by.css('#number2')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('-419')
  })

  it('should calculate 7/2 and get 4.5', function () {
    element(by.css('#number7')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number2')).click()
    element(by.css('#operator_equals')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('4.5')
  })

  it('should divide by 0 and get Infinity', function () {
    element(by.css('#number5')).click()
    element(by.css('#operator_divide')).click()
    element(by.css('#number0')).click()
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })
})
