import {expect} from 'chai'

import {Queue} from './queue'

describe('data-structures > sets > queue', () => {
  describe('Queue', () => {
    function queueToArray<T>(queue: Queue<T>) {
      const items: T[] = []

      for (let i = queue.length; i > 0; i--) {
        items.push(queue.dequeue())
      }

      return items
    }

    describe('#enqueue()', () => {
      it('adds an element to the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        expect(queueToArray(queue)).to.eql([123])
      })

      it('adds to the end of the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.enqueue(456)
        queue.enqueue(789)
        expect(queueToArray(queue)).to.eql([123, 456, 789])
      })

      it('increments the length of the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.enqueue(456)
        expect(queue.length).to.equal(2)
      })
    })

    describe('#dequeue()', () => {
      it('removes the first element in the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.enqueue(456)
        queue.enqueue(789)
        queue.dequeue()
        expect(queueToArray(queue)).to.eql([456, 789])
      })

      it('decrements the length of the queue', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.enqueue(456)
        queue.enqueue(789)
        queue.dequeue()
        expect(queue.length).to.equal(2)
      })

      it('returns the removed element', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.enqueue(456)
        queue.enqueue(789)
        expect(queue.dequeue()).to.equal(123)
      })

      it('maintains queue structure', () => {
        const queue = new Queue<number>()
        queue.enqueue(123)
        queue.dequeue()
        queue.enqueue(456)
        expect(queueToArray(queue)).to.eql([456])
      })

      context('when the queue is empty', () => {
        it('does not modify the queue length', () => {
          const queue = new Queue<number>()
          queue.dequeue()
          expect(queue.length).to.equal(0)
        })

        it('returns undefined', () => {
          const queue = new Queue<number>()
          expect(queue.dequeue()).to.be.undefined
        })
      })
    })

    describe('#length', () => {
      it('is zero when the queue has no elements', () => {
        const queue = new Queue<number>()
        expect(queue.length).to.equal(0)
      })
    })
  })
})
