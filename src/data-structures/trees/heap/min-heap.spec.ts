import {expect} from 'chai'

import {MinHeap} from './min-heap'

describe('data-structures > trees > heap', () => {
  describe('MinHeap', () => {
    function heapToArray<T>(heap: MinHeap<T>): T[] {
      const items: T[] = []

      for (let i = heap.length; i > 0; i--) {
        items.push(heap.delete())
      }

      return items
    }

    describe('#insert()', () => {
      it('adds an element to the heap', () => {
        const heap = new MinHeap<number>()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        expect(heapToArray(heap)).to.eql([1, 2, 3])
      })

      it('increments the length of the heap', () => {
        const heap = new MinHeap<number>()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        expect(heap.length).to.equal(3)
      })

      it('maintains heap structure', () => {
        const heap = new MinHeap<number>()
        heap.insert(7)
        heap.insert(6)
        heap.insert(5)
        heap.insert(4)
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heapToArray(heap)).to.eql([1, 2, 3, 4, 5, 6, 7])
      })
    })

    describe('#delete()', () => {
      it('removes the smallest element from the heap', () => {
        const heap = new MinHeap<number>()
        heap.insert(3)
        heap.insert(1)
        heap.insert(2)
        heap.delete()
        expect(heapToArray(heap)).to.eql([2, 3])
      })

      it('decrements the length of the heap', () => {
        const heap = new MinHeap<number>()
        heap.insert(3)
        heap.insert(1)
        heap.insert(2)
        heap.delete()
        expect(heap.length).to.equal(2)
      })

      it('returns the removed element', () => {
        const heap = new MinHeap<number>()
        heap.insert(3)
        heap.insert(1)
        heap.insert(2)
        expect(heap.delete()).to.equal(1)
      })

      it('maintains heap structure', () => {
        const heap = new MinHeap<number>()
        heap.insert(7)
        heap.insert(3)
        heap.insert(4)
        heap.insert(2)
        heap.insert(6)
        heap.insert(5)
        heap.insert(1)

        const results = [
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
        ]

        expect(results).to.eql([1, 2, 3, 4, 5, 6, 7])
      })

      context('when the heap has no elements', () => {
        it('does not modify the heap length', () => {
          const heap = new MinHeap<number>()
          heap.delete()
          expect(heap.length).to.equal(0)
        })

        it('returns undefined', () => {
          const heap = new MinHeap<number>()
          expect(heap.delete()).to.be.undefined
        })
      })
    })

    describe('#length', () => {
      it('is zero when the heap has no elements', () => {
        const heap = new MinHeap<number>()
        expect(heap.length).to.equal(0)
      })
    })
  })
})
