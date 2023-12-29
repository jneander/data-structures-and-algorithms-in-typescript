import {expect} from 'chai'

import {LRUCache} from './lru-cache'

describe('data-structures > sets > lru-cache', () => {
  describe('LRUCache', () => {
    describe('#length', () => {
      it('is zero when the cache has no elements', () => {
        const cache = new LRUCache<string, number>(3)
        expect(cache.length).to.equal(0)
      })
    })

    describe('#update()', () => {
      context('when the cache does not contain an element with the given key', () => {
        it('adds the element to the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          expect(cache.get('one')).to.equal(1)
        })

        it('increments the length of the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          expect(cache.length).to.equal(2)
        })
      })

      context('when the cache contains an element with the given key', () => {
        it('updates the existing element in the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('one', 3)
          expect(cache.get('one')).to.equal(3)
        })

        it('does not change the length of the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('one', 3)
          expect(cache.length).to.equal(2)
        })

        it('sets the element as most-recently-used', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('three', 3)
          cache.update('one', 11)
          cache.update('four', 4)
          cache.update('five', 5)
          expect(cache.get('one')).to.equal(11)
        })
      })

      context('when the cache has a length equal to its capacity', () => {
        it('adds the given element to the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('three', 3)
          cache.update('four', 4)
          expect(cache.get('four')).to.equal(4)
        })

        it('removes the least-recently-used element from the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('three', 3)
          cache.update('four', 4)
          expect(cache.get('one')).to.be.undefined
        })

        it('does not change the length of the cache', () => {
          const cache = new LRUCache<string, number>(3)
          cache.update('one', 1)
          cache.update('two', 2)
          cache.update('three', 3)
          cache.update('four', 4)
          expect(cache.length).to.equal(3)
        })
      })
    })

    describe('#get()', () => {
      it('returns the element stored with the given key', () => {
        const cache = new LRUCache<string, number>(3)
        cache.update('one', 1)
        expect(cache.get('one')).to.equal(1)
      })

      it('returns undefined when no element is stored with the given key', () => {
        const cache = new LRUCache<string, number>(3)
        cache.update('one', 1)
        cache.update('two', 2)
        cache.update('three', 3)
        expect(cache.get('four')).to.be.undefined
      })

      it('sets the element as most-recently-used', () => {
        const cache = new LRUCache<string, number>(3)
        cache.update('one', 1)
        cache.update('two', 2)
        cache.update('three', 3)
        cache.get('one')
        cache.update('four', 4)
        cache.update('five', 5)
        expect(cache.get('one')).to.equal(1)
      })
    })
  })
})
