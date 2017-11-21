var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var expect = chai.expect

describe('calculator functionality', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true
    browser.get('http://localhost:3000')
  })

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function () {
    var runningTotal = element(by.css('#running_total'))
    element(by.css('#number2')).click()
    expect(runningTotal.getAttribute('value')).to.eventually.equal('2')
  })
})
