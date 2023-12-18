import {expect} from 'chai'

import {sortArray} from './selection-sort'

describe('sort > selection-sort', () => {
  describe('sortArray()', () => {
    it('sorts elements in an array in ascending order', () => {
      const array = [3, 1, 2, 5, -1, 0, 4, -2]
      sortArray(array)
      expect(array).to.eql([-2, -1, 0, 1, 2, 3, 4, 5])
    })

    it('reverses an array sorted in descending order', () => {
      const array = [5, 4, 3, 2, 1, 0, -1, -2]
      sortArray(array)
      expect(array).to.eql([-2, -1, 0, 1, 2, 3, 4, 5])
    })

    it('does nothing when given an empty array', () => {
      const array: number[] = []
      sortArray(array)
      expect(array).to.eql([])
    })
  })
})
