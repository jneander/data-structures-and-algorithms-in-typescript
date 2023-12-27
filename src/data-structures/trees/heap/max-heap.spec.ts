import {expect} from 'chai'

import {MaxHeap} from './max-heap'

describe('data-structures > trees > heap', () => {
  describe('MaxHeap', () => {
    function heapToArray<T>(heap: MaxHeap<T>): T[] {
      const items: T[] = []

      for (let i = heap.length; i > 0; i--) {
        items.push(heap.delete())
      }

      return items
    }

    describe('#insert()', () => {
      it('adds an element to the heap', () => {
        const heap = new MaxHeap<number>()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heapToArray(heap)).to.eql([3, 2, 1])
      })

      it('increments the length of the heap', () => {
        const heap = new MaxHeap<number>()
        heap.insert(3)
        heap.insert(2)
        heap.insert(1)
        expect(heap.length).to.equal(3)
      })

      it('maintains heap structure', () => {
        const heap = new MaxHeap<number>()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        heap.insert(4)
        heap.insert(5)
        heap.insert(6)
        heap.insert(7)
        expect(heapToArray(heap)).to.eql([7, 6, 5, 4, 3, 2, 1])
      })
    })

    describe('#delete()', () => {
      it('removes the largest element from the heap', () => {
        const heap = new MaxHeap<number>()
        heap.insert(1)
        heap.insert(3)
        heap.insert(2)
        heap.delete()
        expect(heapToArray(heap)).to.eql([2, 1])
      })

      it('decrements the length of the heap', () => {
        const heap = new MaxHeap<number>()
        heap.insert(1)
        heap.insert(3)
        heap.insert(2)
        heap.delete()
        expect(heap.length).to.equal(2)
      })

      it('returns the removed element', () => {
        const heap = new MaxHeap<number>()
        heap.insert(1)
        heap.insert(3)
        heap.insert(2)
        expect(heap.delete()).to.equal(3)
      })

      it('maintains heap structure', () => {
        const heap = new MaxHeap<number>()
        heap.insert(1)
        heap.insert(2)
        heap.insert(3)
        heap.insert(4)
        heap.insert(5)
        heap.insert(6)
        heap.insert(7)

        const results = [
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
          heap.delete(),
        ]

        expect(results).to.eql([7, 6, 5, 4, 3, 2, 1])
      })

      context('when the heap has no elements', () => {
        it('does not modify the heap length', () => {
          const heap = new MaxHeap<number>()
          heap.delete()
          expect(heap.length).to.equal(0)
        })

        it('returns undefined', () => {
          const heap = new MaxHeap<number>()
          expect(heap.delete()).to.be.undefined
        })
      })
    })

    describe('#length', () => {
      it('is zero when the heap has no elements', () => {
        const heap = new MaxHeap<number>()
        expect(heap.length).to.equal(0)
      })
    })
  })
})
