import {expect} from 'chai'

import {indexOfValueInArray, valueExistsInArray} from './linear-search'

describe('search > linear-search', () => {
  describe('valueExistsInArray()', () => {
    it('returns true when the value exists in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(4, array)).to.be.true
    })

    it('returns false when the value does not exist in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(6, array)).to.be.false
    })
  })

  describe('indexOfValueInArray()', () => {
    it('returns the first index of the given value in the array', () => {
      const array = [3, 2, 5, 4, 6, 5, 7]
      expect(indexOfValueInArray(5, array)).to.equal(2)
    })

    it('returns -1 when the value does not exist in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(indexOfValueInArray(6, array)).to.equal(-1)
    })
  })
})
