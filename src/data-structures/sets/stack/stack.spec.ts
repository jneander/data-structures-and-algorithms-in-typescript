import {expect} from 'chai'

import {Stack} from './stack'

describe('data-structures > sets > stack', () => {
  describe('Stack', () => {
    function stackToArray<T>(stack: Stack<T>) {
      const items: T[] = []

      for (let i = stack.length; i > 0; i--) {
        // Use unshift to place top of stack to end of list.
        items.unshift(stack.pop())
      }

      return items
    }

    describe('#push()', () => {
      it('adds an element to the stack', () => {
        const stack = new Stack<number>()
        stack.push(123)
        expect(stackToArray(stack)).to.eql([123])
      })

      it('adds to the top of the stack', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.push(456)
        stack.push(789)
        expect(stackToArray(stack)).to.eql([123, 456, 789])
      })

      it('increments the length of the stack', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.push(456)
        expect(stack.length).to.equal(2)
      })
    })

    describe('#pop()', () => {
      it('removes the top element in the stack', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.push(456)
        stack.push(789)
        stack.pop()
        expect(stackToArray(stack)).to.eql([123, 456])
      })

      it('decrements the length of the stack', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.push(456)
        stack.push(789)
        stack.pop()
        expect(stack.length).to.equal(2)
      })

      it('returns the removed element', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.push(456)
        stack.push(789)
        expect(stack.pop()).to.equal(789)
      })

      it('maintains stack structure', () => {
        const stack = new Stack<number>()
        stack.push(123)
        stack.pop()
        stack.push(456)
        expect(stackToArray(stack)).to.eql([456])
      })

      context('when the stack is empty', () => {
        it('does not modify the stack length', () => {
          const stack = new Stack<number>()
          stack.pop()
          expect(stack.length).to.equal(0)
        })

        it('returns undefined', () => {
          const stack = new Stack<number>()
          expect(stack.pop()).to.be.undefined
        })
      })
    })

    describe('#length', () => {
      it('is zero when the stack has no elements', () => {
        const stack = new Stack<number>()
        expect(stack.length).to.equal(0)
      })
    })
  })
})
