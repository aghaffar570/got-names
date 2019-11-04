const expect = require('chai').expect
const gotNames = require('./index')

describe('GOT names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(gotNames.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string')
      }
    });

    it('should contain "Jon Snow"', () => {
      expect(gotNames.all).to.include('Jon Snow')
    });
  })

  describe('random', () => {
    it('should return a random item from the gotNames.all', () => {
      const randomItem = gotNames.random()
      expect(gotNames.all).to.include(randomItem)
    });
  })
})
