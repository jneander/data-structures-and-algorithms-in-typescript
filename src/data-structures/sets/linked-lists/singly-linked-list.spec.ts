import {expect} from 'chai'

import {SinglyLinkedList} from './singly-linked-list'

describe('data-structures > sets > linked-lists', () => {
  describe('SinglyLinkedList', () => {
    function listToArray<T>(list: SinglyLinkedList<T>) {
      const items: T[] = []

      for (const item of list.iterateForward()) {
        items.push(item)
      }

      return items
    }

    describe('#length', () => {
      it('is zero when the list has no elements', () => {
        const list = new SinglyLinkedList<number>()
        expect(list.length).to.equal(0)
      })
    })

    describe('#append()', () => {
      it('adds an element to the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        expect(listToArray(list)).to.eql([123])
      })

      it('adds to the end of the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        expect(listToArray(list)).to.eql([123, 456])
      })

      it('increments the length of the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        expect(list.length).to.equal(2)
      })
    })

    describe('#prepend()', () => {
      it('adds an element to the list', () => {
        const list = new SinglyLinkedList<number>()
        list.prepend(123)
        expect(listToArray(list)).to.eql([123])
      })

      it('adds to the start of the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.prepend(456)
        expect(listToArray(list)).to.eql([456, 123])
      })

      it('increments the length of the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.prepend(456)
        expect(list.length).to.equal(2)
      })
    })

    describe('#insertAt()', () => {
      it('adds the given element to the list', () => {
        const list = new SinglyLinkedList<number>()
        list.insertAt(123, 0)
        expect(listToArray(list)).to.eql([123])
      })

      it('adds to the start of the list when given an index of 0', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.insertAt(789, 0)
        expect(listToArray(list)).to.eql([789, 123, 456])
      })

      it('adds to the end of the list when given an index equal to the list length', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.insertAt(789, 2)
        expect(listToArray(list)).to.eql([123, 456, 789])
      })

      it('positions the element before an existing element at the given index', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.insertAt(789, 1)
        expect(listToArray(list)).to.eql([123, 789, 456])
      })

      it('increments the length of the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.insertAt(789, 1)
        expect(list.length).to.equal(3)
      })

      context('when the given index is negative', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.insertAt(789, -1)
          expect(listToArray(list)).to.eql([123, 456])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.insertAt(789, -1)
          expect(list.length).to.equal(2)
        })
      })

      context('when the given index exceeds the list length', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.insertAt(234, 100)
          expect(listToArray(list)).to.eql([123, 456, 789])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.insertAt(234, 100)
          expect(list.length).to.equal(3)
        })
      })
    })

    describe('#remove()', () => {
      context('when the given element is the only element in the list', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.remove(123)
          expect(listToArray(list)).to.eql([])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.remove(123)
          expect(list.length).to.equal(0)
        })

        it('returns the element', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          expect(list.remove(123)).to.equal(123)
        })
      })

      context('when the given element is the first of multiple elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.remove(123)
          expect(listToArray(list)).to.eql([456, 789])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.remove(123)
          expect(list.length).to.equal(2)
        })
      })

      context('when the given element is among many elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          list.remove(789)
          expect(listToArray(list)).to.eql([123, 456, 234, 567])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          list.remove(789)
          expect(list.length).to.equal(4)
        })

        it('returns the element', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          expect(list.remove(789)).to.equal(789)
        })
      })

      context('when the given element is the last of multiple elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.remove(789)
          expect(listToArray(list)).to.eql([123, 456])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.remove(789)
          expect(list.length).to.equal(2)
        })
      })

      context('when the given element is not in the list', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.remove(0)
          expect(listToArray(list)).to.eql([123, 456])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.remove(0)
          expect(list.length).to.equal(2)
        })

        it('returns undefined', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          expect(list.remove(0)).to.be.undefined
        })
      })
    })

    describe('#removeAt()', () => {
      context('when the given element is the only element in the list', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.removeAt(0)
          expect(listToArray(list)).to.eql([])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.removeAt(0)
          expect(list.length).to.equal(0)
        })

        it('returns the element', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          expect(list.removeAt(0)).to.equal(123)
        })
      })

      context('when the given element is the first of multiple elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(0)
          expect(listToArray(list)).to.eql([456, 789])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(0)
          expect(list.length).to.equal(2)
        })
      })

      context('when the given element is among many elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          list.removeAt(2)
          expect(listToArray(list)).to.eql([123, 456, 234, 567])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          list.removeAt(2)
          expect(list.length).to.equal(4)
        })

        it('returns the element', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.append(234)
          list.append(567)
          expect(list.removeAt(2)).to.equal(789)
        })
      })

      context('when the given element is the last of multiple elements', () => {
        it('removes the element from the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(2)
          expect(listToArray(list)).to.eql([123, 456])
        })

        it('decrements the length of the list', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(2)
          expect(list.length).to.equal(2)
        })
      })

      context('when the given index is negative', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.removeAt(-1)
          expect(listToArray(list)).to.eql([123, 456])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.removeAt(-1)
          expect(list.length).to.equal(2)
        })

        it('returns undefined', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          expect(list.removeAt(-1)).to.be.undefined
        })
      })

      context('when the given index equals the list length', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(3)
          expect(listToArray(list)).to.eql([123, 456, 789])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(3)
          expect(list.length).to.equal(3)
        })

        it('returns undefined', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          expect(list.removeAt(3)).to.be.undefined
        })
      })

      context('when the given index exceeds the list length', () => {
        it('does not modify existing list elements', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(100)
          expect(listToArray(list)).to.eql([123, 456, 789])
        })

        it('does not modify the list length', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          list.removeAt(100)
          expect(list.length).to.equal(3)
        })

        it('returns undefined', () => {
          const list = new SinglyLinkedList<number>()
          list.append(123)
          list.append(456)
          list.append(789)
          expect(list.removeAt(100)).to.be.undefined
        })
      })
    })

    describe('#reverse()', () => {
      it('reverses the order of elements in the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.append(789)
        list.reverse()
        expect(listToArray(list)).to.eql([789, 456, 123])
      })

      it('has no effect on a list with one element', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        expect(listToArray(list)).to.eql([123])
      })

      it('has no effect on an empty list', () => {
        const list = new SinglyLinkedList<number>()
        list.reverse()
        expect(listToArray(list)).to.eql([])
      })
    })

    describe('#iterateForward()', () => {
      it('iterates over each element in the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.append(789)

        const items: number[] = []

        for (const item of list.iterateForward()) {
          items.push(item)
        }

        expect(items).to.eql([123, 456, 789])
      })

      it('does not iterate when the list is empty', () => {
        const list = new SinglyLinkedList<number>()
        const items: number[] = []

        for (const item of list.iterateForward()) {
          items.push(item)
        }

        expect(items).to.eql([])
      })
    })

    describe('#iterateReverse()', () => {
      it('iterates over each element in the list', () => {
        const list = new SinglyLinkedList<number>()
        list.append(123)
        list.append(456)
        list.append(789)

        const items: number[] = []

        for (const item of list.iterateReverse()) {
          items.push(item)
        }

        expect(items).to.eql([789, 456, 123])
      })

      it('does not iterate when the list is empty', () => {
        const list = new SinglyLinkedList<number>()
        const items: number[] = []

        for (const item of list.iterateReverse()) {
          items.push(item)
        }

        expect(items).to.eql([])
      })
    })
  })
})
