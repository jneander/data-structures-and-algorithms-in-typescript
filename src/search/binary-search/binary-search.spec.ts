import {expect} from 'chai'

import {indexOfValueInArray, valueExistsInArray} from './binary-search'

describe('search > binary-search', () => {
  describe('valueExistsInArray()', () => {
    it('returns true when the value exists in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(4, array)).to.be.true
    })

    it('returns false when the value does not exist in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(6, array)).to.be.false
    })

    it('returns false when the array is empty', () => {
      expect(valueExistsInArray(6, [])).to.be.false
    })

    for (let n = 1; n <= 11; n++) {
      context(`with an array of length ${n}`, () => {
        const array: number[] = []

        for (let v = 0; v < n; v++) {
          array.push(v + 2)
        }

        it('returns true when the value exists in the array', () => {
          for (const value of array) {
            expect(valueExistsInArray(value, array)).to.be.true
          }
        })

        it('returns false when the value does not exist in the array', () => {
          expect(valueExistsInArray(array[0] - 1, array)).to.be.false
          expect(valueExistsInArray(array[array.length - 1] + 1, array)).to.be.false
        })
      })
    }
  })

  describe('indexOfValueInArray()', () => {
    it('returns the index of the given value in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(indexOfValueInArray(4, array)).to.equal(3)
    })

    it('returns -1 when the value does not exist in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(indexOfValueInArray(6, array)).to.equal(-1)
    })

    it('returns the index of the given value in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(4, array)).to.be.true
    })

    it('returns -1 when the value does not exist in the array', () => {
      const array = [1, 2, 3, 4, 5]
      expect(valueExistsInArray(6, array)).to.be.false
    })

    it('returns -1 when the array is empty', () => {
      expect(valueExistsInArray(6, [])).to.be.false
    })

    for (let n = 1; n <= 11; n++) {
      context(`with an array of length ${n}`, () => {
        const array: number[] = []

        for (let v = 0; v < n; v++) {
          array.push(v + 2)
        }

        it('returns the index of the given value in the array', () => {
          for (const value of array) {
            expect(valueExistsInArray(value, array)).to.be.true
          }
        })

        it('returns -1 when the value does not exist in the array', () => {
          expect(valueExistsInArray(array[0] - 1, array)).to.be.false
          expect(valueExistsInArray(array[array.length - 1] + 1, array)).to.be.false
        })
      })
    }
  })
})
