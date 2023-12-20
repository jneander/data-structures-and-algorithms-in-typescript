import {expect} from 'chai'

import {findFirstBreakIndex, findMinimumHeight} from './two-crystal-balls'

describe('puzzles > two-crystal-balls', () => {
  describe('findFirstBreakIndex()', () => {
    const testCount = 10000

    it('returns the index of the first break', () => {
      const index = (Math.random() * (testCount * 0.8) + 0.1) | 0 // between 10% and 90% into tests
      const tests = new Array(index).fill(false).concat(new Array(testCount - index).fill(true))
      expect(findFirstBreakIndex(tests)).to.equal(index)
    })

    it('returns 0 when the ball always breaks', () => {
      const tests = new Array(testCount).fill(true)
      expect(findFirstBreakIndex(tests)).to.equal(0)
    })

    it('returns the last index when the ball only breaks at the last attempt', () => {
      const tests = new Array(testCount).fill(false)
      tests[testCount - 1] = true
      expect(findFirstBreakIndex(tests)).to.equal(testCount - 1)
    })

    it('returns -1 when the ball never breaks', () => {
      const tests = new Array(testCount).fill(false)
      expect(findFirstBreakIndex(tests)).to.equal(-1)
    })

    it('returns -1 when the test array is empty', () => {
      const tests = new Array(testCount).fill(false)
      expect(findFirstBreakIndex(tests)).to.equal(-1)
    })
  })

  describe('findFirstBreakIndex()', () => {
    const maxHeight = 10000
    let breakHeight = 0

    function testFn(height: number) {
      return height >= breakHeight
    }

    it('returns the minimum height that breaks the ball', () => {
      breakHeight = (Math.random() * (maxHeight * 0.8) + 0.1) | 0 // between 10% and 90% of max height
      expect(findMinimumHeight(testFn, maxHeight, 1)).to.equal(breakHeight)
    })

    it('returns 0 when the ball always breaks', () => {
      breakHeight = 0
      expect(findMinimumHeight(testFn, maxHeight, 1)).to.equal(breakHeight)
    })

    it('returns the last index when the ball only breaks at the last attempt', () => {
      breakHeight = maxHeight
      expect(findMinimumHeight(testFn, maxHeight, 1)).to.equal(breakHeight)
    })

    it('returns null when the ball never breaks', () => {
      breakHeight = maxHeight + 1
      expect(findMinimumHeight(testFn, maxHeight, 1)).to.equal(null)
    })
  })
})
