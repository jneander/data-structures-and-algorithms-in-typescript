import {expect} from 'chai'

import {add} from './example'

describe('example > add()', () => {
  it('returns the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3)
  })
})
